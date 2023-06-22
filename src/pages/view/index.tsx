"use client";

import { Landing, SinkingBoat, Waves, Beach, Sea } from "@/components";
import { Timeline } from "@/components/timeline";
import { Container } from "@/viewers/container";
import { DoublePanel } from "@/viewers/double-panel/index";
import { Panel } from "@/viewers/panel";
import { Window } from "@/viewers/window";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useMemo, useState, type FC } from "react";
import "./index.scss";

const steps = {
  0: {
    top: 0,
    left: 0,
  },
  17: {
    top: 100,
    left: 0,
  },
  33: {
    top: 100,
    left: 100,
  },
  50: {
    top: 200,
    left: 100,
  },
  66: {
    top: 300,
    left: 100,
  },
  83: {
    top: 400,
    left: 100,
  },
  100: {
    top: 500,
    left: 100,
  },
};

const entries = Object.entries(steps);

const getRanges = (percent: number) => {
  if (percent === 0) {
    const min = entries[0];
    const max = entries[1];
    return [min, max];
  }

  if (percent === 100) {
    const lastIndex = entries.length - 1;
    const min = entries[lastIndex - 1];
    const max = entries[lastIndex];
    return [min, max];
  }

  const maxIdx = entries.findIndex(([key]) => parseInt(key, 10) > percent);
  const max = entries[maxIdx];
  const min = entries[maxIdx - 1];
  if (!min || !max) {
    throw new Error("Failed");
  }

  return [min, max];
};

type Props = {
  dict: Record<any, any>;
};

export const View: FC<Props> = ({ dict }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const documentElement = window.document.documentElement;
      const scrollPx = documentElement.scrollTop;
      const winHeightPx =
        documentElement.scrollHeight - documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setProgress(scrolled);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translation = useMemo(() => {
    const [min, max] = getRanges(progress);

    const minKey = parseInt(min[0], 10);
    const maxKey = parseInt(max[0], 10);
    const basePercent = ((progress - minKey) * 100) / (maxKey - minKey);

    const top =
      (min[1].top + (basePercent * (max[1].top - min[1].top)) / 100) * -1;
    const left =
      (min[1].left + (basePercent * (max[1].left - min[1].left)) / 100) * -1;

    return {
      top,
      left,
    };
  }, [progress]);

  return (
    <>
      <ReactLenis root>
        <div className="background-sky">
          <Container></Container>
          <Container></Container>
          <Container></Container>
        </div>
        <div className="background-sea">
          <div id="gsap-timeline-section">
            <Container></Container>
            <Container></Container>
          </div>
          <div id="gsap-sinking-boat-section">
            <Container></Container>
            <Container></Container>
          </div>
        </div>
      </ReactLenis>
      <Window>
        <DoublePanel
          bgColor="transparent"
          top={0}
          left={0}
          translate={translation}
        >
          <Landing dict={dict} />
          <Beach dict={dict} />
        </DoublePanel>
        <Panel
          bgColor="transparent"
          top={100}
          left={100}
          translate={translation}
        >
          <Sea dict={dict} />
        </Panel>
        <DoublePanel
          bgColor="transparent"
          top={200}
          left={100}
          translate={translation}
        >
          <Timeline dict={dict} />
        </DoublePanel>
        <DoublePanel
          bgColor="transparent"
          top={400}
          left={100}
          translate={translation}
        >
          <SinkingBoat dict={dict} />
        </DoublePanel>
      </Window>
    </>
  );
};

export default View;
