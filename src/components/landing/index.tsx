import { type FC } from "react";
import { Navbar } from "../navbar/navbar";
import styles from "./index.module.scss";

type Props = {
  dict: Record<string, string>;
};

export const Landing: FC<Props> = ({ dict }) => {
  return (
    <section className="w-full h-1/4 sm:h-1/2">
      <Navbar />
    </section>
  );
};
