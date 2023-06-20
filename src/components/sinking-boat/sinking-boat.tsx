import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import "./sinking-boat.scss";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const SinkingBoat = () => {
  useEffect(() => {
    gsap.to(".clipping-circle", {
      scrollTrigger: {
        trigger: ".big-section",
        start: "top top",
        scrub: 1,
        pin: true,
      },
      scale: 25,
    });

    gsap.to(".sinking-boat", {
      scrollTrigger: {
        trigger: ".big-section",
        start: "top top",
        scrub: 1,
      },
      scale: 25,
    });

    gsap.from(".main-img-con", {
      scrollTrigger: {
        trigger: ".big-section",
        start: "center center",
        scrub: 1,
      },
      y: 500,
    });
  }, []);

  return (
    <section className="big-section">
      <div className="absolute w-full h-full z-10">
        <Image
          className="sinking-boat will-change-transform"
          src="/svgs/boat.svg"
          fill
          style={{ objectFit: "cover" }}
          alt="sinkig boat"
        />
      </div>
      <div className="clip">
        <span className="clipping-circle will-change-transform"></span>
      </div>

      <div className="content">
        <div className="main-img-con">
          <img src="images/background.jpg" />
          <div className="calque"></div>
        </div>
      </div>
    </section>
  );
};
