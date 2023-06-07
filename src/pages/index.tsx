import { Footer } from "@/components/footer/footer";
import { HorizontalScroll } from "@/components/horizontal-scroll/horizontal-scroll";
import { Landing } from "@/components/landing/landing";
import { Navbar } from "@/components/navbar/navbar";
import { SinkingBoat } from "@/components/sinking-boat/sinking-boat";
import { Timeline } from "@/components/timeline/timeline";
import "./index.scss";

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Landing />
      <HorizontalScroll />
      <Timeline />
      <SinkingBoat />
      <Footer />
    </main>
  );
};

export default Home;
