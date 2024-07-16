export interface ILanguageType<T extends unknown> {
  cz: T;
  en: T;
}

export interface IHelpTextItem {
  title: string;
  text: string;
}

export interface IHelpIds {
  id: string;
  pageId: string;
  subPageId: string;
}

export interface IHelpMain extends IHelpIds, ILanguageType<IHelpTextItem> {}
export type IHelpMainRecord = Record<string, IHelpMain>;

export interface IHelpTips extends IHelpIds, ILanguageType<IHelpTextItem[]> {}
export type IHelpTipsRecord = Record<string, IHelpTips>;

export interface IHelpFunctionsInfo
  extends ILanguageType<Pick<IHelpTextItem, "text">[]> {
  id: string;
  title: ILanguageType<string>;
}
export interface IHelpFunctions extends IHelpIds {
  items: IHelpFunctionsInfo[];
}
export type IHelpFunctionsRecord = Record<string, IHelpFunctions>;

export interface IHelpNews extends IHelpIds, ILanguageType<IHelpTextItem[]> {
  show: boolean;
  title: ILanguageType<string>;
}
export type IHelpNewsRecord = Record<string, IHelpNews>;

export interface IHelp {
  main: IHelpMainRecord;
  tips: IHelpTipsRecord;
  functions: IHelpFunctionsRecord;
  news: IHelpNewsRecord;
}

export interface IHelpItem {
  main: IHelpMain | undefined;
  tips: IHelpTips | undefined;
  functions: IHelpFunctions | undefined;
  news: IHelpNews | undefined;
}

export interface IHelpState {
  showHelpSidebar: boolean;
  help?: IHelp;
  isLoading?: boolean;
  error?: string;
}
