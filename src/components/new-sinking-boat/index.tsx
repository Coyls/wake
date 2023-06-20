import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import cls from "classnames";

gsap.registerPlugin(ScrollTrigger);

export const NewSinkingBoat = () => {
  return (
    <section className="relative h-full w-full">
      <div
        className={cls(
          "absolute w-full h-screen z-10",
          styles["sinking-boat-container"]
        )}
      >
        <Image
          className="sinking-boat will-change-transform"
          src="/svgs/boat.svg"
          fill
          style={{ objectFit: "cover" }}
          alt="sinkig boat"
        />
      </div>
      {/*  <div className="clip">
        <span className="clipping-circle will-change-transform"></span>
      </div> */}

      {/* <div className="content">
        <div className="main-img-con">
          <img src="images/background.jpg" />
          <div className="calque"></div>
        </div>
      </div> */}
    </section>
  );
};
