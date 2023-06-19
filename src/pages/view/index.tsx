import { Container } from "@/viewers/container";
import { Panel } from "@/viewers/panel";
import { Window } from "@/viewers/window";
import { useState, useEffect, useMemo, CSSProperties } from "react";
import "./index.scss";
import { SinkingBoat } from "@/components/sinking-boat/sinking-boat";

const steps = {
  0: {
    top: 0,
    left: 0,
  },
  20: {
    top: 100,
    left: 0,
  },
  40: {
    top: 100,
    left: 100,
  },
  60: {
    top: 200,
    left: 100,
  },
  80: {
    top: 300,
    left: 100,
  },
  100: {
    top: 400,
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

const View = () => {
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
      <Container>P1</Container>
      <Container>P2</Container>
      <Container>P3</Container>
      <Container>P4</Container>
      <Container>P5</Container>
      <Container>P6</Container>
      <Window>
        <Panel bgColor="red" top={0} left={0} translate={translation}>
          <p id="red">Red</p>
        </Panel>
        <Panel bgColor="blue" top={100} left={0} translate={translation}>
          <p id="blue">Blue</p>
        </Panel>
        <Panel bgColor="green" top={100} left={100} translate={translation}>
          <p id="green">Green</p>
        </Panel>
        <Panel bgColor="yellow" top={200} left={100} translate={translation}>
          <p id="yellow">Yellow</p>
        </Panel>
        <Panel bgColor="orange" top={300} left={100} translate={translation}>
          {/* <p id="orange">orange</p> */}
          <SinkingBoat />
        </Panel>
        <SinkingBoat />
      </Window>
    </>
  );
};

export default View;
