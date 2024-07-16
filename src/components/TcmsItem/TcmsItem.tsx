import { FC, ReactNode } from "react";
import { SortableElement } from "react-sortable-hoc";

// import { DragDropIcon } from '../../../icons';
import { createClassNames } from "../../utils";
import "./TcmsItem.styles.scss";

export interface ITcmsItemProps {
  /** Translated label of the item */
  translatedLabel: string;
  /** Elements at the right side of the component (with some actions) */
  children: ReactNode;
  /** If true, component is not dragable
   * @default false
   */
  disabled?: boolean;
}

const classNames = createClassNames("tcms-item");

export const TcmsItem: FC<ITcmsItemProps> = ({
  translatedLabel,
  children,
  disabled = false,
}) => {
  return (
    <div
      className={classNames({
        disabled,
      })}
      data-testid="tcms-item"
    >
      <div className={classNames("label")}>{translatedLabel}</div>
      <div className={classNames("content")}>{children}</div>
    </div>
  );
};

export const TcmsSortableItem = SortableElement<ITcmsItemProps>(
  (props: ITcmsItemProps) => <TcmsItem {...props} />
);
