import { Dispatch, SetStateAction } from "react";
import { Editor, Text, Transforms } from "slate";

import { ITcmsItemProps, TcmsItemActions } from "../components";
import {
  CustomEditor,
  CustomElement,
  CustomText,
  IHelp,
  IHelpFunctions,
  IHelpFunctionsInfo,
  IHelpManagementItemEditation,
  IHelpTextItem,
  ILanguageType,
  ISelectOption,
} from "../types";
import { moveArrayItem, removeArrayItem } from "./common.utils";

// WYSIWYG
// Funkce pro přepínání tučného písma
export const toggleBoldMark = (editor: CustomEditor) => {
  const isActive = isBoldMarkActive(editor);
  Transforms.setNodes(
    editor,
    { bold: isActive ? undefined : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

export const isBoldMarkActive = (editor: CustomEditor) => {
  const [match] = Array.from(
    Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.bold === true,
      universal: true,
    })
  );

  return !!match;
};

// Funkce pro přepínání kurzívy
export const toggleItalicMark = (editor: CustomEditor) => {
  const isActive = isItalicMarkActive(editor);
  Transforms.setNodes(
    editor,
    { italic: isActive ? undefined : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

export const isItalicMarkActive = (editor: CustomEditor) => {
  const [match] = Array.from(
    Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.italic === true,
      universal: true,
    })
  );

  return !!match;
};

export const htmlToSlate = (html: string): CustomElement[] => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const transformNode = (node: ChildNode): CustomText[] => {
    if (node.nodeType === Node.TEXT_NODE) {
      return [{ text: node.nodeValue || "" }];
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      if (element.tagName.toLowerCase() === "b") {
        return Array.from(element.childNodes)
          .flatMap(transformNode)
          .map((textNode) => ({
            ...textNode,
            bold: true,
          }));
      }
    }

    return [];
  };

  const children = tempDiv
    ? Array.from(tempDiv.childNodes).flatMap(transformNode)
    : [{ text: "" }];

  return [
    {
      type: "paragraph",
      children,
    },
  ];
};

export const slateToHtml = (elements: CustomElement[]): string => {
  const transformNode = (node: CustomText): string => {
    if (node.bold) {
      return `<b>${node.text}</b>`;
    }

    return node.text;
  };

  return elements
    .flatMap((element) => {
      if (element.type === "paragraph") {
        return element.children.map(transformNode).join("");
      }

      return "";
    })
    .join("");
};

export const slateToHelpManagementItemEditationContent = (
  elements: CustomElement[]
): IHelpManagementItemEditation["content"] => {
  return elements.map((element) => ({
    text: slateToHtml([element]),
  }));
};

export const slateContentChanged = (
  content: Pick<IHelpTextItem, "text">[],
  newContent: Pick<IHelpTextItem, "text">[]
) =>
  content.length !== newContent.length ||
  content.some((content, index) => content.text !== newContent[index].text);

export const sortableListOptionsChanged = (
  newList: ITcmsItemProps[],
  oldList: ITcmsItemProps[]
) =>
  newList.length !== oldList.length ||
  newList.some((item, index) => {
    const oldItem = oldList[index];
    return (
      item.translatedLabel !== oldItem.translatedLabel ||
      item.disabled !== oldItem.disabled
    );
  });

export const setActiveSubsectionWithOptions = (
  help: IHelp | undefined,
  activeSection: ISelectOption,
  helpManagementSubsectionKeys: ISelectOption[],
  onSetActiveSubsection: (subsectionOption: ISelectOption) => void,
  onSetSubsectionOptions: (options: ISelectOption[]) => void
) => {
  if (!help) return;

  const functionKeys = Object.keys(help.functions);
  if (!functionKeys) return;

  const sectionKeys = functionKeys
    .filter((key) => key.includes(activeSection.value + "_"))
    .map((key) => key.split("_")[1]);
  if (!sectionKeys) return;

  const subsectionOptions = helpManagementSubsectionKeys.filter((key) =>
    sectionKeys.includes(key.value)
  );
  onSetSubsectionOptions(subsectionOptions);
  onSetActiveSubsection(subsectionOptions[0]);
};

export const removeItemFromHelpList = (
  activeSectionTemplate: string,
  activeSubsection: string | undefined,
  activeFunction: keyof IHelp,
  activeLanguage: keyof ILanguageType<string>,
  activeItem: IHelpManagementItemEditation | undefined,
  setActiveItem: Dispatch<
    SetStateAction<IHelpManagementItemEditation | undefined>
  >,
  setHelp: Dispatch<SetStateAction<IHelp | undefined>>,
  index: number
): IHelpManagementItemEditation | undefined => {
  const subsectionString = activeSectionTemplate + "_" + activeSubsection;

  if (activeFunction === "functions") {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const updatedFunctions = { ...prevState.functions[subsectionString] };
      const prevArray = updatedFunctions.items;
      const newArray = (
        removeArrayItem(prevArray, index) as IHelpFunctionsInfo[]
      ).map((item, index) => ({
        ...item,
        id: index.toString(),
      }));
      updatedFunctions.items = newArray;
      const parentNode = { ...prevState.functions };
      parentNode[subsectionString] = updatedFunctions;

      // now we have to update the index of activeItem
      if (activeItem) {
        console.log("Máme active item:", activeItem);
        const activeItemIndex = activeItem.index;
        if (activeItemIndex === index) {
          setActiveItem(undefined);
        } else if (activeItemIndex > index) {
          setActiveItem({ ...activeItem, index: activeItemIndex - 1 });
        }
      } else {
        console.log("ActiveItem je samozřejmě u n d e f i n e d");
      }

      return {
        ...prevState,
        functions: {
          ...parentNode,
        },
      };
    });
  }

  if (activeFunction === "news") {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const updatedNews = { ...prevState.news[subsectionString] };
      const prevArray = updatedNews[activeLanguage];
      const newArray = removeArrayItem(prevArray, index) as IHelpTextItem[];
      updatedNews[activeLanguage] = newArray;
      const parentNode = { ...prevState.news };
      parentNode[subsectionString] = updatedNews;

      // now we have to update the index of activeItem
      const activeItemIndex = activeItem?.index;
      if (activeItemIndex === index) {
        setActiveItem(undefined);
      } else if (activeItemIndex && activeItemIndex > index) {
        setActiveItem({ ...activeItem, index: activeItemIndex - 1 });
      }

      return {
        ...prevState,
        news: {
          ...parentNode,
        },
      };
    });
  }

  if (activeFunction === "tips") {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const updatedTips = { ...prevState.tips[subsectionString] };
      const prevArray = updatedTips[activeLanguage];
      const newArray = removeArrayItem(prevArray, index) as IHelpTextItem[];
      updatedTips[activeLanguage] = newArray;
      const parentNode = { ...prevState.tips };
      parentNode[subsectionString] = updatedTips;

      // now we have to update the index of activeItem
      const activeItemIndex = activeItem?.index;
      if (activeItemIndex === index) {
        setActiveItem(undefined);
      } else if (activeItemIndex && activeItemIndex > index) {
        setActiveItem({ ...activeItem, index: activeItemIndex - 1 });
      }

      return {
        ...prevState,
        tips: {
          ...parentNode,
        },
      };
    });
  }

  return undefined;
};

export const setHelpItem = (
  help: IHelp | undefined,
  activeSubsection: ISelectOption | null,
  activeSection: ISelectOption,
  activeHelpContentEditOption: ISelectOption,
  language: keyof ILanguageType<string>,
  itemIndex: number = 0,
  activeItem: IHelpManagementItemEditation | undefined,
  setActiveItem: Dispatch<
    SetStateAction<IHelpManagementItemEditation | undefined>
  >
) => {
  if (!help || !activeSubsection) return;
  console.log("Nastavuje se nový item");

  const item = getHelpItem(
    help,
    activeSection.value,
    activeSubsection.value,
    activeHelpContentEditOption.value as keyof IHelp,
    language,
    itemIndex
  );
  console.log(item);
  setActiveItem(item);
  console.log("Active item:", activeItem);
};

export const getHelpItem = (
  help: IHelp,
  activeSectionTemplate: string,
  activeSubsection: string,
  activeFunction: keyof IHelp,
  activeLanguage: keyof ILanguageType<string>,
  itemIndex: number
): IHelpManagementItemEditation | undefined => {
  const subsectionString = activeSectionTemplate + "_" + activeSubsection;

  if (activeFunction === "main") {
    if (!help.main[subsectionString]) return;
    const item = help.main[subsectionString][activeLanguage];
    if (!item) return;

    return {
      index: itemIndex,
      title: item.title,
      content: [
        {
          text: item.text,
        },
      ],
    };
  }

  if (activeFunction === "functions") {
    if (!help.functions[subsectionString]) return;
    const item = help.functions[subsectionString].items[itemIndex];
    if (!item) return;

    return {
      index: itemIndex,
      title: item.title[activeLanguage],
      content: item[activeLanguage],
    };
  }

  if (activeFunction === "news") {
    if (
      !help.news[subsectionString] ||
      !help.news[subsectionString][activeLanguage]
    )
      return;
    const item = help.news[subsectionString][activeLanguage][itemIndex];
    if (!item) return;

    return {
      index: itemIndex,
      title: item.title,
      content: [
        {
          text: item.text,
        },
      ],
    };
  }

  if (
    !help.tips[subsectionString] ||
    !help.tips[subsectionString][activeLanguage]
  )
    return;
  const item = help.tips[subsectionString][activeLanguage][itemIndex];
  if (!item) return;

  return {
    index: itemIndex,
    title: item.title,
    content: [
      {
        text: item.text,
      },
    ],
  };
};

export const moveHelpTextItemIndexes = (
  items: (IHelpTextItem | IHelpFunctionsInfo)[],
  oldIndex: number,
  newIndex: number
): (IHelpTextItem | IHelpFunctionsInfo)[] => {
  const newArray = [...items];
  moveArrayItem(newArray, oldIndex, newIndex);
  return newArray;
};

export const createHelpManagementMainOptions = (
  mainItem: IHelpTextItem | undefined,
  handleItemEditClick: (index: number) => void
): ITcmsItemProps[] => {
  if (!mainItem) return [];

  return [
    createHelpManagementItemActions(0, mainItem.title, handleItemEditClick),
  ];
};

export const createHelpManagementFunctionOptions = (
  functions: IHelpFunctions | undefined,
  activeLanguage: keyof ILanguageType<string>,
  handleItemEditClick: (index: number) => void
): ITcmsItemProps[] => {
  if (!functions?.items) return [];

  return functions.items.map((item, index) =>
    createHelpManagementItemActions(
      index,
      item.title[activeLanguage],
      handleItemEditClick
    )
  );
};

export const createHelpManagementNewsOptions = (
  news: IHelpTextItem[] | undefined,
  handleItemEditClick: (index: number) => void
): ITcmsItemProps[] => {
  if (!news) return [];

  return news.map((item, index) =>
    createHelpManagementItemActions(index, item.title, handleItemEditClick)
  );
};

export const createHelpManagementTipsOptions = (
  tips: IHelpTextItem[] | undefined,
  handleItemEditClick: (index: number) => void
): ITcmsItemProps[] => {
  if (!tips) return [];

  return tips.map((item, index) =>
    createHelpManagementItemActions(index, item.title, handleItemEditClick)
  );
};

const createHelpManagementItemActions = (
  index: number,
  title: string,
  handleItemEditClick: (index: number) => void
): ITcmsItemProps => ({
  translatedLabel: title,
  children: (
    <TcmsItemActions
      {...{
        handleItemEditClick,
      }}
      key={title}
      itemIndex={index}
    />
  ),
});
