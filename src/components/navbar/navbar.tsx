import { type FC } from "react";
import styles from "./navbar.module.scss";
import cls from "classnames";
import Link from "next/link";

type Props = {
  dict: Record<any, any>;
};

export const Navbar: FC<Props> = ({ dict }) => {
  return (
    <nav className="relative flex flex-row w-full z-10 justify-end px-[10%] pt-[5vh]">
      <ul className={cls("flex flex-row gap-7 items-center", styles["menu"])}>
        <li>
          <a className="nav-text" href="#our-exposition">
            <span className="hidden sm:block">{dict.nav.link1.sm}</span>
            <span className="block sm:hidden">{dict.nav.link1.mobile}</span>
          </a>
        </li>
        <li>
          <a className="nav-text" href="#our-story">
            <span className="hidden sm:block">{dict.nav.link2.sm}</span>
            <span className="block sm:hidden">{dict.nav.link2.mobile}</span>
          </a>
        </li>
        <li>
          <a className="nav-text" href="#where">
            <span className="hidden sm:block">{dict.nav.link3.sm}</span>
            <span className="block sm:hidden">{dict.nav.link3.mobile}</span>
          </a>
        </li>
        <li>
          <a className="nav-text" href={dict.nav.switch.href}>
            {dict.nav.switch.label}
          </a>
        </li>
      </ul>
    </nav>
  );
};
