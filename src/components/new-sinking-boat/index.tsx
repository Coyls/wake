import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import cls from "classnames";

gsap.registerPlugin(ScrollTrigger);

export const NewSinkingBoat = () => {
  const sinkingBoatContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heighSinkingBoatContainer =
      sinkingBoatContainerRef.current?.clientHeight;

    gsap.fromTo(
      ".gsap-sinking-boat",
      {
        y: 0,
        scale: 1,
      },
      {
        y: 1270,
        scale: 40,
        scrollTrigger: {
          trigger: "#gsap-sinking-boat-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sinkingBoatContainerRef} className="relative h-full w-full">
      <div
        className={cls(
          "gsap-sinking-boat",
          "fixed w-full h-screen z-10",
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
      <div className={styles["clip"]}>
        <span
          className={cls(styles["clipping-circle"], "will-change-transform")}
        ></span>
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
