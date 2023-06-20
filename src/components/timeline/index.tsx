import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef, useState } from "react";
import styles from "./timeline.module.scss";
import cls from "classnames";

gsap.registerPlugin(ScrollTrigger);

type SvgProps = {
  height: string;
  viewBox: string;
  d: string;
} | null;

// PX
const OFFSET_LINE = 100;
const GAP_LINE = 100;

export const Timeline = () => {
  const timelineRef = useRef<HTMLElement>(null);
  const [lineProps, setLineProps] = useState<SvgProps>(null);

  useEffect(() => {
    if (lineProps) {
      const lineSize = parseInt(lineProps.height) - OFFSET_LINE;

      gsap.fromTo(
        ".gsap-fish-line",
        {
          strokeDashoffset: lineSize,
        },
        {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: "#gsap-timeline-section",
            start: "top",
            end: "bottom top",
            scrub: true,
            markers: true,
          },
        }
      );

      gsap.fromTo(
        ".gsap-hook-container",
        {
          y: OFFSET_LINE,
        },
        {
          y: lineSize + GAP_LINE,
          scrollTrigger: {
            trigger: "#gsap-timeline-section",
            start: "top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, [lineProps]);

  useEffect(() => {
    const heightSectionTimeline = timelineRef.current?.clientHeight;

    if (heightSectionTimeline) {
      const lineHeight = (heightSectionTimeline - GAP_LINE).toString();

      setLineProps({
        height: lineHeight,
        viewBox: `0 0 2 ${lineHeight}`,
        d: `M1 0V${lineHeight}`,
      });
    }
  }, []);

  return (
    <section
      ref={timelineRef}
      className="flex flex-row sm:justify-center h-full w-full"
    >
      <div
        className={cls(
          "absolute w-12 h-12 left-[4.1%] sm:left-auto",
          "gsap-hook-container"
        )}
      >
        <svg
          id="Calque_2"
          data-name="Calque 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 1080"
        >
          <g id="Calque_2-2" data-name="Calque 2">
            <path d="m307.06,806.68l25.63,154.92,49.04,63.53,59.07,34.55h88.31s75.53-24.52,75.53-24.52l81.36-41.24,53.5-52.38,33.44-69.1v-72.45s-25.63-73.56-25.63-73.56l-71.33-74.68-69.1-42.35-34.55-52.38-25.63-56.84v-66.87s25.63-22.29,25.63-22.29l21.18-23.41,4.46-52.38-8.92-35.67-20.06-21.18v-107s-11.15-10.03-11.15-10.03v-20.06s11.15-12.26,11.15-12.26v-20.06s-11.15-6.69-11.15-6.69v-17.83s11.15-6.69,11.15-6.69v-22.29s-11.15,0-11.15,0v-10.03s11.15-13.37,11.15-13.37V12S546.69,0,546.69,0h-42.35s-18.95,16.46-18.95,16.46l-1.11,28.98,16.72,15.6-3.34,20.06-13.37,7.8,1.11,34.55,14.49,10.03-3.34,18.95-11.15,13.37-2.23,108.11-26.75,50.16v61.3s35.67,39.01,35.67,39.01l-1.11,71.33,25.63,89.16,49.04,70.22,86.94,55.73,53.5,73.56,3.34,84.71-37.9,55.73-83.59,51.27-58.81,20.06-70.48-4.46-44.58-33.44-32.32-65.76-10.03-64.64,70.22-1.11-65.76-50.16-62.42-130.4-6.69,160.5Zm232.94-548.36h-34.55v-64.64h34.55v64.64Zm0,127.06h-27.86s-13.37-20.06-13.37-20.06v-44.58h45.7s5.57,44.58,5.57,44.58l-10.03,20.06Z" />
            <rect fill="none" y="0" width="1080" height="1080" />
          </g>
        </svg>
      </div>

      {lineProps && (
        <svg
          className="relative ml-[10%] sm:ml-0"
          width="2"
          height={lineProps.height}
          viewBox={lineProps.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="gsap-fish-line"
            style={{ strokeDasharray: lineProps.height }}
            d={lineProps.d}
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      )}
    </section>
  );
};
