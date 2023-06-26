import { type FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import beachSvg from "@/public/svgs/beach.svg";
import phareSvg from "@/public/svgs/lighthouse.svg";
import cls from "classnames";
import mandp from "@/public/images/mandp.png";

type Props = {
  dict: Record<any, any>;
};

export const Beach: FC<Props> = ({ dict }) => {
  return (
    <section className="w-full h-3/4 sm:h-1/2 flex flex-col ">
      <div
        className={cls(
          "flex flex-col gap-5 pl-[17vh] pr-[5vh]",
          "sm:max-w-[36%] sm:pl-0 sm:pr-0 sm:pt-[15vh] sm:ml-[30%]"
        )}
      >
        <h2>{dict.beach.h2}</h2>
        <article className="flex flex-col gap-4 text-justify">
          <p>{dict.beach.p1}</p>
          <p>{dict.beach.p2}</p>
          <p>{dict.beach.p3}</p>
          <p>{dict.beach.p4}</p>
          <p>{dict.beach.p5}</p>
        </article>
      </div>

      <div
        className={cls(
          "absolute w-[40vh] h-[40vh] left-[20%] bottom-[10%] ",
          "sm:w-[60vh] sm:h-[60vh] sm:left-auto sm:right-0 sm:bottom-[25vh]",
          styles["mandp-container"]
        )}
      >
        <Image src={mandp} alt="Marco et Polo" fill />
      </div>
      {/* Decors */}
      <div
        className={cls(
          "absolute w-[40vh] h-[160vh] left-0 bottom-0",
          styles["lighthouse-container"]
        )}
      >
        <Image priority src={phareSvg} alt="lighthouse" fill />
      </div>
      <div className="absolute w-[320vh] h-[25vh] right-0 bottom-0 z-30">
        <Image src={beachSvg} alt="beach" fill />
      </div>
    </section>
  );
};
