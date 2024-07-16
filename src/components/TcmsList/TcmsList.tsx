import { FC } from "react";
import { SortableContainer } from "react-sortable-hoc";

import { createClassNames } from "../../utils";
import { ITcmsItemProps, TcmsSortableItem } from "../TcmsItem";
import "./TcmsList.styles.scss";

export interface ITcmsListProps {
  /** TCMS sortable items to be mapped for user interaction */
  options: ITcmsItemProps[];
}

const classNames = createClassNames("tcms-list");

export const TcmsList: FC<ITcmsListProps> = ({ options }) => {
  return (
    <div className={classNames()} data-testid="tcms-list">
      {options.map((option, index) => (
        <TcmsSortableItem key={index} index={index} {...option} />
      ))}
    </div>
  );
};

export const TcmsSortableList = SortableContainer<ITcmsListProps>(
  (props: ITcmsListProps) => <TcmsList {...props} />
);
