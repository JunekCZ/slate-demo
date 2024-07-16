import { FC, useEffect, useRef, useState } from "react";

import {
  CustomEditor,
  CustomElement,
  IHelpManagementItemEditation,
  IHelpTextItem,
} from "../../types";
import {
  createClassNames,
  htmlToSlate,
  slateContentChanged,
  slateToHelpManagementItemEditationContent,
} from "../../utils";
import "./HelpManagementSectionPartItem.styles.scss";
import { Wysiwyg } from "../Wysiwyg";

export interface IHelpManagementSectionPartItemProps {
  item: IHelpManagementItemEditation | undefined;
  subsectionString: string;
  updateItem: (item: IHelpManagementItemEditation) => void;
}

const classNames = createClassNames("help-management-section-part-item");

const contentToSlateValue = (
  content: Pick<IHelpTextItem, "text">[]
): CustomElement[] =>
  content.map((content) => htmlToSlate(content.text)).flatMap((value) => value);

export const HelpManagementSectionPartItem: FC<
  IHelpManagementSectionPartItemProps
> = ({ item, subsectionString, updateItem }) => {
  const [activeSubsectionString, setActiveSubsectionString] =
    useState<string>(subsectionString);
  const [activeContent, setActiveContent] = useState<CustomElement[]>([]);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isItemEditted, setIsItemEditted] = useState<boolean>(false);

  const editorRef = useRef<CustomEditor | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!item) return;
    handleWysiwygSelectionReset();

    if (subsectionString !== activeSubsectionString) {
      const slateContent = contentToSlateValue(item.content);
      setActiveContentWithTimeout(slateContent);
      setActiveIndex(item.index);
      setActiveTitle(item.title);
      setActiveSubsectionString(subsectionString);
      return;
    }

    if (item.index !== activeIndex) {
      const slateContent = contentToSlateValue(item.content);
      setActiveContentWithTimeout(slateContent);
      setActiveIndex(item.index);
      setActiveTitle(item.title);
      setActiveSubsectionString(subsectionString);
      return;
    }
    if (
      slateContentChanged(
        item.content,
        slateToHelpManagementItemEditationContent(activeContent)
      )
    ) {
      setActiveContentWithTimeout(contentToSlateValue(item.content));
    }

    if (item.title !== activeTitle) {
      setActiveTitle(item.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSubsectionString, item, subsectionString]);

  useEffect(() => {
    if (!item) return;

    if (
      (slateContentChanged(
        item.content,
        slateToHelpManagementItemEditationContent(activeContent)
      ) ||
        item.title !== activeTitle) &&
      item.index === activeIndex &&
      !isItemEditted
    ) {
      setIsItemEditted(true);
    }
  }, [
    activeContent,
    activeIndex,
    activeTitle,
    isItemEditted,
    item,
    updateItem,
  ]);

  if (!item)
    return <div className="content-info-box">No data for selected</div>;

  /**
   * Setting active content with timeout because when editor
   * is focused or its text is selected, text is not updated
   * @param content
   */
  const setActiveContentWithTimeout = (content: CustomElement[]) => {
    setTimeout(() => {
      setActiveContent(content);
    }, 30);
  };

  const handleWysiwygSelectionReset = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (editorRef.current) {
      editorRef.current.resetSelection(activeContent);
    }
  };

  const handleSaveButtonClick = () => {
    if (!activeContent || activeContent.length === 0 || !activeTitle.trim())
      return;

    setIsItemEditted(false);
    updateItem({
      title: activeTitle,
      content: slateToHelpManagementItemEditationContent(activeContent),
      index: item.index,
    });
  };

  return (
    <div className={classNames()}>
      <h3>Item editation</h3>
      <div className={classNames("wysiwyg")}>
        Edit dataset
        <Wysiwyg
          contentValue={activeContent}
          onContentChange={(content) => setActiveContent(content)}
          ref={editorRef}
        />
        <div
          className={classNames("wysiwyg__save-button")}
          onClick={handleSaveButtonClick}
        >
          Save
        </div>
      </div>
    </div>
  );
};
