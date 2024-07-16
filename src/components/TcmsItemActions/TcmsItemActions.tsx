import { FC } from "react";

import { createClassNames } from "../../utils";
import "./TcmsItemActions.styles.scss";

interface ITcmsItemActionsProps {
  itemIndex: number;
  handleItemEditClick: (itemIndex: number) => void;
}

const classNames = createClassNames("tcms-item-actions");

export const TcmsItemActions: FC<ITcmsItemActionsProps> = ({
  itemIndex,
  handleItemEditClick,
}) => (
  <div className={classNames()}>
    <div className={classNames("edit")}>
      <div onClick={() => handleItemEditClick(itemIndex)}>Edit</div>
    </div>
  </div>
);
