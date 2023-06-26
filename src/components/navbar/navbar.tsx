import { type FC } from "react";
import styles from "./navbar.module.scss";
import cls from "classnames";

type Props = {
  dict: Record<any, any>;
};

export const Navbar: FC<Props> = ({ dict }) => {
  return (
    <nav className="relative flex flex-row w-full z-10 justify-end px-[10%] pt-[5vh]">
      <ul className={cls("flex flex-row gap-7 items-center", styles["menu"])}>
        <li>
          <a className="nav-text" href="#our-exposition">
            {dict.nav.link1}
          </a>
        </li>
        <li>
          <a className="nav-text" href="#our-story">
            {dict.nav.link2}
          </a>
        </li>
        <li>
          <a className="nav-text" href="#where">
            {dict.nav.link3}
          </a>
        </li>
      </ul>
    </nav>
  );
};
