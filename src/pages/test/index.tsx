import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { useEffect } from "react";
import "./test.scss";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WaveText from "@/components/wave-text/WaveText";
import Waves from "@/components/waves/Waves";
import { JumpingFish } from "@/components/jumping-fish/JumpingFish";

gsap.registerPlugin(ScrollTrigger);
export default function Test() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    /* const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray(".parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      tl.to(layer, { y: movement, ease: "none" }, 0);
    }); */
  }, []);

  return (
    <main>
      <div className="ocean-container">
        <WaveText />
        <Waves />
      </div>
      <div className="deep">
        <JumpingFish />
      </div>
    </main>
  );
}
