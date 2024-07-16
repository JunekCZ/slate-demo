import { FC } from "react";
import { SortEndHandler } from "react-sortable-hoc";

import { ITcmsItemProps, TcmsSortableList } from "../../components";
import { ISelectOption } from "../../types";
import { createClassNames } from "../../utils";
import "./HelpManagementSectionParts.styles.scss";

export interface IHelpManagementSectionPartsProps {
  activeHelpContentEditOption: ISelectOption | null;
  activeSubsection: ISelectOption | null;
  listOptions: ITcmsItemProps[];
  onAddSortableItemClick: () => void;
  onListChange: SortEndHandler;
}

const classNames = createClassNames("help-management-section-parts");

export const HelpManagementSectionParts: FC<
  IHelpManagementSectionPartsProps
> = ({
  activeHelpContentEditOption,
  activeSubsection,
  listOptions,
  onAddSortableItemClick,
  onListChange,
}) => {
  if (!activeHelpContentEditOption) {
    return (
      <div className={classNames()}>
        <div className="content-info-box">No data for selected</div>
      </div>
    );
  }

  return (
    <div className={classNames()}>
      <h3>Active subsection label</h3>
      <TcmsSortableList
        options={listOptions}
        onSortEnd={onListChange}
        distance={1}
        lockAxis="y"
      />
      {activeHelpContentEditOption.value !== "main" && (
        <div
          className={classNames("add-button")}
          onClick={onAddSortableItemClick}
        >
          + Add another item
        </div>
      )}
    </div>
  );
};
