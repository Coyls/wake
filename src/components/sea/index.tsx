import fishermanSvg from "@/public/svgs/fisherman.svg";
import Image from "next/image";
import { type FC } from "react";
import Waves from "../waves";
import cls from "classnames";

type Props = {
  dict: Record<any, any>;
};

export const Sea: FC<Props> = ({ dict }) => {
  return (
    <section className="w-full h-full">
      <div
        className={cls(
          "flex flex-col gap-5 pl-[4vh] max-w-[85%] pt-[10vh]",
          "sm:max-w-[36%] sm:pl-0 sm:ml-[25%]"
        )}
      >
        <h2> {dict.sea.h2} </h2>
        <article className="flex flex-col gap-4">
          <p>{dict.sea.p1}</p>
          <p>{dict.sea.p2}</p>
          <p>{dict.sea.p3}</p>
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
