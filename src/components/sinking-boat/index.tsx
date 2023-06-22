import cls from "classnames";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import { type FC, useEffect, useRef } from "react";
import styles from "./index.module.scss";
import sinkingBoatSvg from "@/public/svgs/boat.svg";
import iconCompass from "@/public/svgs/icon-compass.svg";
import iconCross from "@/public/svgs/icon-cross.svg";
import iconPhone from "@/public/svgs/icon-phone.svg";
import map from "@/public/images/map.png";

type Props = {
  dict: Record<any, any>;
};

gsap.registerPlugin(ScrollTrigger);

const FACTOR = 0.65;

export const SinkingBoat: FC<Props> = ({ dict }) => {
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
      className="relative flex flex-col h-full w-full text-white"
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

      <div className="w-full h-1/2">
        <article className={cls("absolute text-center px-4", styles["title"])}>
          <h2>{dict["find-us"].h2}</h2>
          <p>{dict["find-us"].p1}</p>
        </article>
      </div>
      <div className="relative flex flex-col h-1/2 w-full gap-[5vh]">
        <div className="flex flex-col gap-[5vh] px-[7vh] pt-[5vh]">
          <article className="flex flex-col gap-[1.5vh]">
            <h2>{dict.where.h2}</h2>
            <p>{dict.where.p1}</p>
          </article>
          <ul className={styles["where"]}>
            <li>
              <Image
                src={iconCompass}
                width={32}
                height={32}
                alt="icon compass"
              />
              <p>3 Esplanade Augustin Aussedat 74960, Cran-gevrier</p>
            </li>
            <li>
              <Image src={iconCross} width={32} height={32} alt="icon cross" />
              <p>45.9,6.11667</p>
            </li>
            <li>
              <Image src={iconPhone} width={32} height={32} alt="icon phone" />
              <p>06 07 89 10 13</p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-[35vh]">
          <Image src={map} alt="map" style={{ objectFit: "cover" }} fill />
        </div>
      </div>
    </section>
  );
};
