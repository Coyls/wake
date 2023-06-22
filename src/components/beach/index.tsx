import { type FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import beachSvg from "@/public/svgs/beach.svg";
import phareSvg from "@/public/svgs/lighthouse.svg";
import cls from "classnames";

type Props = {
  dict: Record<string, string>;
};

export const Beach: FC<Props> = ({ dict }) => {
  return (
    <section className="w-full h-3/4 sm:h-1/2 flex flex-col ">
      <div className="flex flex-col gap-5 pl-[17vh] pr-[5vh]">
        <h2>Notre exposition</h2>
        <article className="flex flex-col gap-4 text-justify">
          <p>
            Fort d’une volonté de d’éveiller les consciences et de rentre les
            musée ludique l’équipe Shield of the Sea vous propose de vivre
            l’expérience Wake.
          </p>
          <p> Alors qu’est ce que Wake ?</p>
          <p>
            C’est une expérience interactive et immersive ayant pour but
            d’éveiller les consciences au nombreuse problématique de l’océan par
            le biais du jeu !
          </p>
          <p>Alors pourquoi un jeu ? Quelle forme a-t-il ?</p>{" "}
          <p>Laissez nous vous présenter Marco et Polo !</p>
        </article>
      </div>
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
