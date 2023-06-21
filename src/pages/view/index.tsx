import { Timeline } from "@/components/timeline";
import { Container } from "@/viewers/container";
import { DoublePanel } from "@/viewers/double-panel/index";
import { Panel } from "@/viewers/panel";
import { Window } from "@/viewers/window";
import { useEffect, useMemo, useState } from "react";
import "./index.scss";
import { Landing, NewSinkingBoat, Waves } from "@/components";
import Image from "next/image";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

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
      <ReactLenis root>
        <div className="background-sea">
          <Container>P1</Container>
          <Container>P2</Container>
          <Container>P3</Container>

          <div id="gsap-timeline-section">
            <Container>P4</Container>
            <Container>p5</Container>
          </div>
          <div id="gsap-sinking-boat-section">
            <Container>P6</Container>
            <Container>P7</Container>
          </div>
        </div>
      </ReactLenis>
      <Window>
        <Panel bgColor="transparent" top={0} left={0} translate={translation}>
          <Landing />
        </Panel>
        <Panel bgColor="transparent" top={100} left={0} translate={translation}>
          <div className="absolute w-[40vh] h-[160vh] left-0 bottom-0">
            <Image priority src="/svgs/phare.svg" alt="lighthouse" fill />
          </div>
          <div className="absolute w-[320vh] h-[25vh] right-0 bottom-0 z-30">
            <Image src="/svgs/plage.svg" alt="beach" fill />
          </div>
        </Panel>
        <Panel
          bgColor="transparent"
          top={100}
          left={100}
          translate={translation}
        >
          <div className="absolute w-[200vh] h-[100vh] left-[10%] sm:left-1/2 bottom-0">
            <Image
              src="/svgs/fisher.svg"
              style={{ objectFit: "cover" }}
              alt="fisherman"
              fill
            />
          </div>
          <Waves />
        </Panel>
        <DoublePanel
          bgColor="transparent"
          top={200}
          left={100}
          translate={translation}
        >
          <Timeline />
        </DoublePanel>
        <DoublePanel
          bgColor="transparent"
          top={400}
          left={100}
          translate={translation}
        >
          <NewSinkingBoat />
        </DoublePanel>
        {/* <Panel
          bgColor="transparent"
          top={400}
          left={100}
          translate={translation}
        >
          <div className="absolute w-full h-full z-10">
            <Image
              className="sinking-boat will-change-transform"
              src="/svgs/boat.svg"
              fill
              style={{ objectFit: "cover" }}
              alt="sinkig boat"
            />
          </div>
        </Panel>
        <Panel
          bgColor="green"
          top={500}
          left={100}
          translate={translation}
        ></Panel> */}
      </Window>
    </>
  );
};

export default View;
