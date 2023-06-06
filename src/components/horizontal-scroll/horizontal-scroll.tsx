import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import "./horizontal-scroll.scss";

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
        <h1>SCROLL DOWN</h1>
      </section>
      <section className="panel">
        <h2>ONE</h2>
      </section>
      <section className="panel">
        <h2>TWO</h2>
      </section>
      <section className="panel">
        <h2>THREE</h2>
      </section>
    </div>
  );
};
