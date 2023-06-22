import fishermanSvg from "@/public/svgs/fisherman.svg";
import Image from "next/image";
import { type FC } from "react";
import Waves from "../waves";

type Props = {
  dict: Record<string, string>;
};

export const Sea: FC<Props> = ({ dict }) => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-5 pl-[4vh] max-w-[85%] pt-[10vh]">
        <h2>Notre histoire</h2>
        <article className="flex flex-col gap-4">
          <p>
            Nous avons rencontré Marco & Polo pendant un petit séjour à
            Dauville.
          </p>
          <p>Nous avons été touché par leurs histoire et leur problèmes !</p>{" "}
          <p>
            Nous avons donc voulu agir pour les aider à lutter. Mais alors
            comment est né Wake ?
          </p>
        </article>
      </div>
      <div className="absolute w-[200vh] h-[100vh] left-[10%] sm:left-1/2 bottom-0">
        <Image
          src={fishermanSvg}
          style={{ objectFit: "cover" }}
          alt="fisherman"
          fill
        />
      </div>
      <Waves />
    </section>
  );
};
