import {
  MouseEvent,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { BasePoint, BaseRange, createEditor } from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";

import { createClassNames, toggleBoldMark } from "../../utils";
import "./Wysiwyg.styles.scss";
import { CustomEditor, CustomElement } from "../../types";

export interface IWysiwygProps {
  onContentChange: (newValue: CustomElement[]) => void;
  resetSelection?: boolean;
  contentValue?: CustomElement[];
}

const classNames = createClassNames("wysiwyg");

const initialValue: CustomElement[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export const Wysiwyg = forwardRef<CustomEditor, IWysiwygProps>(
  ({ contentValue, onContentChange }, ref) => {
    const editor: CustomEditor = useMemo(
      () => withHistory(withReact(createEditor())),
      []
    );

    useImperativeHandle(ref, () => ({
      ...editor,
      resetSelection(newContentValue?: CustomElement[]) {
        const basePoint: BasePoint = {
          path: [0, 0],
          offset: 0,
        };
        const baseSelection: BaseRange = {
          anchor: basePoint,
          focus: basePoint,
        };
        editor.setSelection(baseSelection);
        setNewContentValue(newContentValue);
        editor.onChange();
      },
    }));

    useEffect(() => {
      setNewContentValue();
      editor.onChange();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentValue]);

    const setNewContentValue = (newContentValue?: CustomElement[]) => {
      const value = newContentValue ?? contentValue;
      if (!value || value.length < 1) {
        editor.children = initialValue;
        return;
      }

      if (value.length > 1) {
        editor.children = value;
        return;
      }

      // This line solves an error when Slate has { children } with [] value normally resulting in error.
      editor.children = value[0].children.length > 0 ? value : initialValue;
    };

    // Function for rendering elements
    const renderElement = useCallback((props: any) => {
      switch (props.element.type) {
        case "paragraph":
          return <p {...props.attributes}>{props.children}</p>;
        default:
          return <p {...props.attributes}>{props.children}</p>;
      }
    }, []);

    // Function for rendering text nodes
    const renderLeaf = useCallback((props: any) => {
      let { children } = props;

      if (props.leaf.bold) {
        children = <strong>{children}</strong>;
      }

      if (props.leaf.italic) {
        children = <em>{children}</em>;
      }

      return <span {...props.attributes}>{children}</span>;
    }, []);

    const handleToolbarButtonClick = (
      event: MouseEvent<HTMLButtonElement>,
      eventFunction: (editor: CustomEditor) => void
    ) => {
      event.preventDefault();
      eventFunction(editor);
    };

    return (
      <div className={classNames()}>
        <Slate
          editor={editor}
          initialValue={initialValue}
          onChange={(newValue) => onContentChange(newValue as CustomElement[])}
        >
          <div className={classNames("toolbar")}>
            <button
              onMouseDown={(event) =>
                handleToolbarButtonClick(event, toggleBoldMark)
              }
            >
              {/* <WysiwygTextBoldIcon /> */}
              Bold
            </button>
          </div>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Obsah části novinky..."
          />
        </Slate>
      </div>
    );
  }
);

export default Wysiwyg;
