import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import "./horizontal-scroll.scss";
import Waves from "../waves";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const HorizontalScroll = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1.23,
        end: () =>
          "+=" +
          (document.querySelector(".wrapper") as HTMLElement).offsetWidth,
      },
    });
  }, []);

  return (
    <div className="wrapper">
      <section className="panel">
        <div className="absolute phare  w-[1920px] h-[1600px]">

        <Image
          src="/svgs/phare.svg"
          fill
          style={{ objectFit: "cover" }}
          alt="phare"
          />
          </div>
      </section>
      <section className="panel overflow-x-hidden">
        <div className="absolute fisher-container w-[1600px] h-[800px]">
          <Image
            src="/svgs/fisher.svg"
            fill
            style={{ objectFit: "cover" }}
            alt="fisherman"
          />
        </div>
        <Waves />
      </section>
    </div>
  );
};
