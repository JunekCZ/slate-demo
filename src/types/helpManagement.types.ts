import { BaseEditor } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

// import { ITranslationKeys } from '../../i18n/types';
import { IHelpTextItem } from "./help.types";

/** Base option type for select inputs. */
export interface ISelectOptionBase {
  /** Option label */
  label: string;
  /** Option value */
  value: string;
  /** Does this option select all? */
  isAllOption?: boolean;
  /** An additional value to hold the extra information (e.g. teamId for player). */
  additionalValue?: string;
  /** Translation options for label (e.g. plural, context). */
  labelTranslationsOptions?: string;
}

/** Option type extended by generic additional info. */
export interface ISelectOptionWithParam<T> extends ISelectOptionBase {
  /** An additional info to hold the extra information. */
  additionalInfo: T;
}

/** Option type for select inputs. */
export type ISelectOption<TOption = undefined> = TOption extends undefined
  ? ISelectOptionBase
  : ISelectOptionWithParam<TOption>;

// Definice typů pro CustomEditor & CustomElement
export type CustomEditor = BaseEditor &
  ReactEditor &
  HistoryEditor & {
    resetSelection: (newContentValue?: CustomElement[]) => void;
  };

export type ParagraphElement = {
  type: "paragraph";
  children: CustomText[];
};

export type HeadingElement = {
  type: "heading";
  level: number;
  children: CustomText[];
};

export type CustomElement = ParagraphElement | HeadingElement;

export type FormattedText = { text: string; bold?: true; italic?: true };

export type CustomText = FormattedText;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export interface IWysiwygToolbarButton {
  icon: JSX.Element;
  onClick: void;
}

export interface IHelpManagementItemEditation {
  index: number;
  title: string;
  content: Pick<IHelpTextItem, "text">[];
}

export const helpContentEditButtonOptions: ISelectOption[] = [
  {
    label: "editFunctions",
    value: "functions",
  },
  {
    label: "editNews",
    value: "news",
  },
  {
    label: "editTips",
    value: "tips",
  },
  {
    label: "editOpeningText",
    value: "main",
  },
];

export const helpManagementSectionKeys: ISelectOption[] = [
  {
    label: "players",
    value: "players",
  },
  {
    label: "formations",
    value: "formations",
  },
  {
    label: "videomaps",
    value: "videomaps",
  },
  {
    label: "goalkeeper",
    value: "goalkeepers",
  },
  {
    label: "games",
    value: "games",
  },
  {
    label: "teams",
    value: "teams",
  },
];

export const helpManagementSubsectionKeys: ISelectOption[] = [
  {
    label: "tabs",
    value: "tabs",
  },
  {
    label: "gamelog",
    value: "gamelog",
  },
  {
    label: "trend",
    value: "trend",
  },
  {
    label: "playerCard",
    value: "player-card",
  },
  {
    label: "comparePlayers",
    value: "compare-players",
  },
  {
    label: "similarityPlayers",
    value: "similarity-players",
  },
  {
    label: "dataTemplates",
    value: "data-settings",
  },
  {
    label: "pairs",
    value: "pairs",
  },
  {
    label: "formations",
    value: "formations",
  },
  {
    label: "playerCombinations",
    value: "player-combinations",
  },
  {
    label: "shots",
    value: "shots",
  },
  {
    label: "heatmap",
    value: "heatmap",
  },
  {
    label: "passes",
    value: "passes",
  },
  {
    label: "faceoffs",
    value: "faceoffs",
  },
  {
    label: "zoneEntries",
    value: "entries",
  },
  {
    label: "zoneExits",
    value: "exits",
  },
  {
    label: "shootouts",
    value: "shootouts",
  },
  {
    label: "netZones",
    value: "net-zones",
  },
  {
    label: "shotMap",
    value: "shotmap",
  },
  {
    label: "goalkeeperCard",
    value: "goalkeeper-card",
  },
  {
    label: "compareGoalkeepers",
    value: "compare-coalkeepers",
  },
  {
    label: "graphicOverview",
    value: "graphic-overview",
  },
  {
    label: "report",
    value: "report",
  },
  {
    label: "players",
    value: "players",
  },
  {
    label: "goalkeepers",
    value: "goalkeepers",
  },
  {
    label: "headToHead",
    value: "h2h",
  },
];
