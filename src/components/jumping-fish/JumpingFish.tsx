import Image from "next/image";
import fishSvg from "../../public/images/fish.svg";
import { useEffect } from "react";
import { gsap } from "gsap";

export const JumpingFish = () => {
  useEffect(() => {
    gsap.to(".fish-container", {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: 4,
    });
  }, []);

  return (
    <div className="fish-container">
      <Image className="fish" width={100} height={100} src={fishSvg} alt={""} />
    </div>
  );
};
