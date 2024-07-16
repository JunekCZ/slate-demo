import { useState } from "react";

import { useHelpManagement } from "./hooks";
import { ILanguageType } from "./types";
import { createClassNames } from "./utils";
import "./index.scss";
import {
  HelpManagementSectionPartItem,
  HelpManagementSectionParts,
} from "./components";
import { mockHelp } from "./mocks";

const classNames = createClassNames("help-management-page");

export const App = () => {
  const originalHelp = mockHelp;

  console.log("Nápověda:", originalHelp.help);

  const [activeLanguage] = useState<keyof ILanguageType<string>>("cz");
  const {
    help,
    activeHelpContentEditOption,
    activeSection,
    activeSubsection,
    activeItem,
    sortableListOptions,
    handleAddSortableItemClick,
    handleListChange,
    onItemUpdate,
  } = useHelpManagement({
    helpState: originalHelp,
    language: activeLanguage,
  });

  if (!help) {
    return (
      <div className={classNames()}>
        <div className="content-info-box">No data for selected</div>
      </div>
    );
  }

  return (
    <div className={classNames()}>
      <HelpManagementSectionParts
        activeHelpContentEditOption={activeHelpContentEditOption}
        activeSubsection={activeSubsection}
        listOptions={sortableListOptions}
        onAddSortableItemClick={handleAddSortableItemClick}
        onListChange={handleListChange}
      />
      <HelpManagementSectionPartItem
        item={activeItem}
        subsectionString={activeSection.value + "_" + activeSubsection?.value}
        updateItem={onItemUpdate}
      />
    </div>
  );
};
