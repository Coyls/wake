import { HorizontalScroll } from "@/components/horizontal-scroll/horizontal-scroll";
import { Landing } from "@/components/landing/landing";
import { Navbar } from "@/components/navbar/navbar";
import "./index.scss";
import { Timeline } from "@/components/timeline/timeline";

export const Home = () => {
  return (
    <main>
      <Navbar />
      <Landing />
      <HorizontalScroll />
      <Timeline />
    </main>
  );
};

export default Home;
