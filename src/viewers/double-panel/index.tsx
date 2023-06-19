import { FC, ReactNode, useMemo } from "react";
import styles from "./index.module.scss";
import cls from "classnames";

type Props = {
  bgColor: string;
  top: number;
  left: number;
  translate: { top: number; left: number };
  children?: ReactNode;
};

export const DoublePanel: FC<Props> = (props) => {
  const { bgColor, top, left, translate, children } = props;

  const translateTop = useMemo((): string => {
    return `${top + translate.top}%`;
  }, [top, translate.top]);

  const translateLeft = useMemo((): string => {
    return `${left + translate.left}%`;
  }, [left, translate.left]);

  return (
    <div
      className={cls(styles.container, styles.double)}
      style={{
        backgroundColor: bgColor,
        top: translateTop,
        left: translateLeft,
      }}
    >
      <div className="relative w-full h-full">{children}</div>
    </div>
  );
};
