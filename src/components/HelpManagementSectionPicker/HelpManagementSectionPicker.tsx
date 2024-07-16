import { FC } from "react";

import { ISelectOption } from "../../types";
import { createClassNames } from "../../utils";
import "./HelpManagementSectionPicker.styles.scss";

export interface IHelpManagementSectionPickerProps {
  activeSection: ISelectOption | undefined;
  activeHelpContentEditOption: ISelectOption | null;
  activeSubsection: ISelectOption | null;
  helpContentEditButtonOptions: ISelectOption[];
  subsectionOptions: ISelectOption[];
  onActiveSubsectionChange: (newValue: ISelectOption) => void;
  onHelpContentEditButtonClick: (functionKey: any) => void;
}

const classNames = createClassNames("help-management-section-picker");

export const HelpManagementSectionPicker: FC<
  IHelpManagementSectionPickerProps
> = ({
  activeSection,
  activeHelpContentEditOption,
  activeSubsection,
  helpContentEditButtonOptions,
  subsectionOptions,
  onActiveSubsectionChange,
  onHelpContentEditButtonClick,
}) => {
  if (!activeSection)
    return <div className="content-info-box">No data for selected</div>;

  return (
    <div className={classNames()}>
      <h3>Active section</h3>
      <div className={classNames("subsection-controller")}>
        Section editation There was "onActiveSubsectionChange" method
      </div>
      <div className={classNames("edit-type-buttons")}>
        Help content editation There was onHelpContentEditButtonClick(option)
        method
      </div>
    </div>
  );
};
