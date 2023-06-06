import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import "./timeline.scss";

gsap.registerPlugin(ScrollTrigger);

export const Timeline = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fish-line",
      {
        strokeDashoffset: 3000,
      },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: "#dive",
          start: "top",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section id="dive" className="flex flex-col items-center">
      <svg
        className="relative"
        width="2"
        height="300"
        viewBox="0 0 2 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0V300" stroke="black" strokeWidth="4" />
      </svg>
      <svg
        className="relative"
        width="2"
        height="3000"
        viewBox="0 0 2 3000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fish-line"
          d="M1 0V3000"
          stroke="black"
          strokeWidth="4"
        />
      </svg>
    </section>
  );
};
