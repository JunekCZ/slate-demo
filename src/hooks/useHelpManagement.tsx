import { useEffect, useState } from "react";
import { SortEndHandler } from "react-sortable-hoc";

import { ITcmsItemProps } from "../components";
import {
  IHelp,
  IHelpFunctions,
  IHelpFunctionsInfo,
  IHelpManagementItemEditation,
  IHelpState,
  IHelpTextItem,
  ILanguageType,
  ISelectOption,
  helpContentEditButtonOptions,
  helpManagementSectionKeys,
  helpManagementSubsectionKeys,
} from "../types";
import {
  createHelpManagementFunctionOptions,
  createHelpManagementMainOptions,
  createHelpManagementNewsOptions,
  createHelpManagementTipsOptions,
  getHelpItem,
  moveHelpTextItemIndexes,
  slateContentChanged,
  sortableListOptionsChanged,
} from "../utils";

interface IHelpManagementHookProps {
  helpState: IHelpState;
  language: keyof ILanguageType<string>;
}

export const useHelpManagement = ({
  helpState,
  language,
}: IHelpManagementHookProps) => {
  const deepHelpCopy: IHelpState = JSON.parse(JSON.stringify(helpState));
  const [help, setHelp] = useState<IHelp | undefined>(deepHelpCopy.help);
  const [activeSection] = useState<ISelectOption>(helpManagementSectionKeys[0]);
  const [activeSubsection, setActiveSubsection] =
    useState<ISelectOption | null>(null);
  const [activeHelpContentEditOption] = useState<ISelectOption>(
    helpContentEditButtonOptions[0]
  );
  const [sortableListOptions, setSortableListOptions] = useState<
    ITcmsItemProps[]
  >([]);
  const [activeItem, setActiveItem] = useState<
    IHelpManagementItemEditation | undefined
  >();

  useEffect(() => {
    setActiveSubsectionWithOptions(help, activeSection, setActiveSubsection);
    setHelpItem(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  useEffect(() => {
    if (!help || !activeSubsection || !activeHelpContentEditOption) return;

    const sortableOptions = createHelpManagementOptions(
      help,
      activeSection.value,
      activeSubsection.value,
      activeHelpContentEditOption.value as keyof IHelp,
      language
    );
    console.log(sortableListOptions);

    if (sortableListOptionsChanged(sortableOptions, sortableListOptions)) {
      setSortableListOptions(sortableOptions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    language,
    activeItem,
    activeSection,
    activeSubsection,
    activeHelpContentEditOption,
    help,
  ]);

  useEffect(() => {
    console.log("Help updated:", help);
    if (!help) {
      setHelp(deepHelpCopy.help);
    }
  }, [deepHelpCopy, help]);

  useEffect(() => {
    console.log("Active item changed:", activeItem);
  }, [activeItem]);

  const setActiveSubsectionWithOptions = (
    help: IHelp | undefined,
    activeSection: ISelectOption,
    onSetActiveSubsection: (subsectionOption: ISelectOption) => void
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
    onSetActiveSubsection(subsectionOptions[0]);
  };

  const createHelpManagementOptions = (
    help: IHelp,
    activeSectionTemplate: string,
    activeSubsection: string,
    activeFunction: keyof IHelp,
    activeLanguage: keyof ILanguageType<string>
  ): ITcmsItemProps[] => {
    const subsectionString = activeSectionTemplate + "_" + activeSubsection;

    if (activeFunction === "main") {
      return createHelpManagementMainOptions(
        help.main?.[subsectionString]?.[activeLanguage],
        handleItemEditClick
      );
    }

    if (activeFunction === "functions") {
      return createHelpManagementFunctionOptions(
        help.functions?.[subsectionString],
        activeLanguage,
        handleItemEditClick
      );
    }

    if (activeFunction === "news") {
      return createHelpManagementNewsOptions(
        help.news?.[subsectionString]?.[activeLanguage],
        handleItemEditClick
      );
    }

    return createHelpManagementTipsOptions(
      help.tips?.[subsectionString]?.[activeLanguage],
      handleItemEditClick
    );
  };

  const updateHelpFunctionsItem = (
    newItem: IHelpManagementItemEditation,
    subsectionString: string,
    language: "cz" | "en"
  ) => {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const updatedFunctions: IHelpFunctions = {
        ...prevState.functions[subsectionString],
      };
      updatedFunctions.items[newItem.index].title[language] = newItem.title;
      updatedFunctions.items[newItem.index][language] = newItem.content;
      setActiveItem(newItem);

      return {
        ...prevState,
        functions: {
          ...prevState.functions,
          [newItem.index]: updatedFunctions,
        },
      };
    });
  };

  const updateHelpNewsItem = (
    newItem: IHelpManagementItemEditation,
    subsectionString: string,
    language: "cz" | "en"
  ) => {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const updatedNews = { ...prevState.news[subsectionString] };
      updatedNews[language][newItem.index].title = newItem.title;
      updatedNews[language][newItem.index].text = newItem.content[0].text;
      setActiveItem(newItem);

      return {
        ...prevState,
        news: {
          ...prevState.news,
          [newItem.index]: updatedNews,
        },
      };
    });
  };

  const updateHelpTipsItem = (
    newItem: IHelpManagementItemEditation,
    subsectionString: string,
    language: "cz" | "en"
  ) => {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const updatedTips = { ...prevState.tips[subsectionString] };
      updatedTips[language][newItem.index].title = newItem.title;
      updatedTips[language][newItem.index].text = newItem.content[0].text;
      setActiveItem(newItem);

      return {
        ...prevState,
        tips: {
          ...prevState.tips,
          [newItem.index]: updatedTips,
        },
      };
    });
  };

  const updateHelpMainItem = (
    newItem: IHelpManagementItemEditation,
    subsectionString: string,
    language: "cz" | "en"
  ) => {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const updatedMain = { ...prevState.main[subsectionString] };
      updatedMain[language].title = newItem.title;
      updatedMain[language].text = newItem.content[0].text;
      setActiveItem(newItem);

      return {
        ...prevState,
        main: {
          ...prevState.main,
          [newItem.index]: updatedMain,
        },
      };
    });
  };

  const onItemUpdate = (updatedItem: IHelpManagementItemEditation) => {
    if (!help || !activeSubsection) return;

    const activeFunction = activeHelpContentEditOption.value;
    const subsectionString = activeSection.value + "_" + activeSubsection.value;

    if (activeFunction === "main") {
      if (!help.main[subsectionString]?.[language]) return;
      updateHelpMainItem(updatedItem, subsectionString, language);
      return;
    }

    if (activeFunction === "functions") {
      if (!help.functions[subsectionString]?.items?.[updatedItem.index]) return;
      updateHelpFunctionsItem(updatedItem, subsectionString, language);
      return;
    }

    if (activeFunction === "news") {
      if (!help.news[subsectionString]?.[language]?.[updatedItem.index]) return;
      updateHelpNewsItem(updatedItem, subsectionString, language);
      return;
    }

    if (!help.tips[subsectionString]?.[language]?.[updatedItem.index]) return;
    updateHelpTipsItem(updatedItem, subsectionString, language);
  };

  const handleItemEditClick = (itemIndex: number) => {
    if (!help || !activeSubsection) return;

    const item = getHelpItem(
      help,
      activeSection.value,
      activeSubsection.value,
      activeHelpContentEditOption.value as keyof IHelp,
      language,
      itemIndex
    );
    console.log(item);
    console.log("======= active item:", activeItem);
    if (activeItem) {
      const activeItemFromHelp = getHelpItem(
        help,
        activeSection.value,
        activeSubsection.value,
        activeHelpContentEditOption.value as keyof IHelp,
        language,
        activeItem.index
      );
      if (!activeItemFromHelp) return;
      console.log("Active item from help:", activeItemFromHelp);
      console.log(
        slateContentChanged(activeItem.content, activeItemFromHelp.content),
        activeItem.content,
        activeItemFromHelp.content
      );
      if (slateContentChanged(activeItem.content, activeItemFromHelp.content)) {
        // Shows modal
        return;
      }
    }

    setActiveItem(item);
  };

  const setHelpItem = (itemIndex: number = 0) => {
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

  const handleAddSortableItemClick = () => {
    setHelp((prevState) => {
      if (!prevState) return prevState;

      const subsectionString =
        activeSection.value + "_" + activeSubsection?.value;

      if (activeHelpContentEditOption.value === "functions") {
        const updatedFunctions = { ...prevState.functions[subsectionString] };
        const newFunction: IHelpFunctionsInfo = {
          // TODO: Add last index as id, not subsection string
          id: subsectionString,
          title: { cz: "Nová funkce", en: "New function" },
          cz: [{ text: "" }],
          en: [{ text: "" }],
        };
        updatedFunctions.items.push(newFunction);
        const parentNode = { ...prevState.functions };
        parentNode[subsectionString] = updatedFunctions;

        return {
          ...prevState,
          functions: {
            ...parentNode,
          },
        };
      }

      if (activeHelpContentEditOption.value === "news") {
        const updatedNews = { ...prevState.news[subsectionString] };
        const newNewsCZ: IHelpTextItem = {
          title: "Nová novinka",
          text: "",
        };
        updatedNews["cz"].push(newNewsCZ);
        const newNewsEN: IHelpTextItem = {
          title: "New news",
          text: "",
        };
        updatedNews["en"].push(newNewsEN);
        const parentNode = { ...prevState.news };
        parentNode[subsectionString] = updatedNews;

        return {
          ...prevState,
          news: {
            ...parentNode,
          },
        };
      }

      const updatedTips = { ...prevState.tips[subsectionString] };
      const newTipCZ: IHelpTextItem = {
        title: "Nový tip",
        text: "",
      };
      updatedTips["cz"].push(newTipCZ);
      const newTipEN: IHelpTextItem = {
        title: "New tip",
        text: "",
      };
      updatedTips["en"].push(newTipEN);
      const parentNode = { ...prevState.tips };
      parentNode[subsectionString] = updatedTips;

      return {
        ...prevState,
        tips: {
          ...parentNode,
        },
      };
    });
  };

  const handleListChange: SortEndHandler = ({ newIndex, oldIndex }) => {
    if (oldIndex === newIndex) return;

    setNewListToHelp(
      activeSection.value,
      activeSubsection?.value,
      activeHelpContentEditOption.value as keyof IHelp,
      language,
      newIndex,
      oldIndex
    );
  };

  const setNewListToHelp = (
    activeSectionTemplate: string,
    activeSubsection: string | undefined,
    activeFunction: keyof IHelp,
    activeLanguage: keyof ILanguageType<string>,
    newIndex: number,
    oldIndex: number
  ): IHelpManagementItemEditation | undefined => {
    const subsectionString = activeSectionTemplate + "_" + activeSubsection;

    if (activeFunction === "functions") {
      setHelp((prevState) => {
        if (!prevState) return prevState;

        const updatedFunctions = { ...prevState.functions[subsectionString] };
        const prevArray = updatedFunctions.items;
        const newArray = moveHelpTextItemIndexes(
          prevArray,
          oldIndex,
          newIndex
        ) as IHelpFunctionsInfo[];
        newArray[newIndex].id = prevArray[oldIndex].id;
        newArray[oldIndex].id = prevArray[newIndex].id;
        updatedFunctions.items = newArray;
        const parentNode = { ...prevState.functions };
        parentNode[subsectionString] = updatedFunctions;

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
        const newArray = moveHelpTextItemIndexes(
          prevArray,
          oldIndex,
          newIndex
        ) as IHelpTextItem[];
        updatedNews[activeLanguage] = newArray;
        const parentNode = { ...prevState.news };
        parentNode[subsectionString] = updatedNews;

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
        const newArray = moveHelpTextItemIndexes(
          prevArray,
          oldIndex,
          newIndex
        ) as IHelpTextItem[];
        updatedTips[activeLanguage] = newArray;
        const parentNode = { ...prevState.tips };
        parentNode[subsectionString] = updatedTips;

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

  return {
    activeSection,
    activeSubsection,
    activeHelpContentEditOption,
    activeItem,
    help,
    sortableListOptions,
    handleAddSortableItemClick,
    handleListChange,
    onItemUpdate,
  };
};
