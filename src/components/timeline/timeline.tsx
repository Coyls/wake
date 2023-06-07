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
        strokeDashoffset: 2500,
      },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: "#timeline-section",
          start: "top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      ".hook-container",
      {
        y: 300,
      },
      {
        y: 2800,
        scrollTrigger: {
          trigger: "#timeline-section",
          start: "top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section id="timeline-section" className="flex flex-col items-center pb-32">
      <div className="hook-container absolute w-12 h-12">
        <svg
          className="w-full h-full"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="640.000000pt"
          height="1280.000000pt"
          viewBox="0 0 640.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M5280 12781 c-176 -38 -316 -117 -442 -249 -300 -314 -319 -787 -45
-1131 87 -109 247 -221 387 -269 l30 -11 0 -4253 c0 -2781 -3 -4283 -10 -4338
-36 -303 -123 -577 -261 -823 -420 -746 -1247 -1216 -2139 -1217 -877 -1
-1652 505 -2024 1320 -80 176 -153 428 -175 610 -7 52 -13 105 -15 118 -4 28
-11 28 215 -3 242 -32 439 -53 439 -46 0 7 -1088 1293 -1126 1331 l-25 25 4
-695 c4 -752 3 -747 63 -1020 114 -518 386 -999 778 -1378 525 -507 1220 -773
1951 -749 459 16 845 112 1260 317 563 277 1015 724 1280 1265 130 265 197
478 252 795 17 100 18 326 23 4423 l5 4318 73 30 c260 104 459 342 517 619 20
93 19 251 -1 348 -64 312 -300 562 -615 652 -108 31 -287 36 -399 11z m335
-363 c231 -75 378 -320 336 -557 -60 -333 -416 -515 -716 -367 -192 95 -306
308 -276 514 25 168 127 309 276 383 125 62 248 70 380 27z"
            />
          </g>
        </svg>
      </div>

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
        height="2500"
        viewBox="0 0 2 2500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fish-line"
          d="M1 0V2500"
          stroke="black"
          strokeWidth="4"
        />
      </svg>
    </section>
  );
};
