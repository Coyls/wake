import { type FC } from "react";
import { Navbar } from "../navbar/navbar";
import styles from "./index.module.scss";

type Props = {
  dict: Record<string, string>;
};

export const Landing: FC<Props> = ({ dict }) => {
  return (
    <section className="w-full h-full">
      <Navbar />
      <h1>{dict.test}</h1>
    </section>
  );
};
