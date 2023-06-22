import cls from "classnames";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import sinkingBoatSvg from "@/public/svgs/boat.svg";

gsap.registerPlugin(ScrollTrigger);

const FACTOR = 0.65;

export const SinkingBoat = () => {
  const sinkingBoatContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heighSinkingBoatContainer =
      sinkingBoatContainerRef.current?.clientHeight ?? 1250;

    gsap.fromTo(
      ".gsap-sinking-boat",
      {
        y: 0,
        scale: 1,
      },
      {
        y: heighSinkingBoatContainer * FACTOR,
        scale: 40,
        scrollTrigger: {
          trigger: "#gsap-sinking-boat-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".gsap-clipping-circle",
      {
        scale: 1,
      },
      {
        scrollTrigger: {
          trigger: "#gsap-sinking-boat-section",
          start: "top top",
          scrub: true,
        },
        scale: 40,
      }
    );
  }, []);

  return (
    <section
      ref={sinkingBoatContainerRef}
      className="relative flex flex-col-reverse h-full w-full"
    >
      <div
        className={cls(
          "gsap-sinking-boat",
          "absolute top-0 w-full h-screen z-10"
        )}
      >
        <Image
          className="will-change-transform"
          src={sinkingBoatSvg}
          fill
          style={{ objectFit: "cover" }}
          alt="sinkig boat"
        />
      </div>
      <div className={styles["clip"]}>
        <span
          className={cls(
            "gsap-clipping-circle",
            "will-change-transform",
            styles["clipping-circle"]
          )}
        ></span>
      </div>
      <div className={styles["content"]}>
        <div className={styles["main-img-con"]}>
          <p className="text-white">IL Y A RIEN A VOIR</p>
          <div className={styles["calque"]}></div>
        </div>
      </div>
    </section>
  );
};
