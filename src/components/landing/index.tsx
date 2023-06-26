import { type FC } from "react";
import { Navbar } from "../navbar/navbar";
import styles from "./index.module.scss";
import wakeSvg from "@/public/svgs/wake.svg";
import Image from "next/image";

type Props = {
  dict: Record<string, string>;
};

export const Landing: FC<Props> = ({ dict }) => {
  return (
    <section className="w-full h-1/4 sm:h-1/2">
      <Navbar dict={dict} />
      <div className="relative w-[50%] h-[37%] mx-auto sm:top-[25vh] top-[5vh]">
        <Image src={wakeSvg} alt="wake" style={{ objectFit: "contain" }} fill />
      </div>
    </section>
  );
};
