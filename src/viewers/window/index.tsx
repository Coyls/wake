import { FC, ReactNode } from "react";
import styles from './index.module.scss';

type Props = {
    children: ReactNode;
}

export const Window: FC<Props> = (props) => {

    const { children } = props;

    return <div className={styles.container}>{children}</div>;
}