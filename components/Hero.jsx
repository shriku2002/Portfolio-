"use client";
import { cn } from "@/utils/cn";
import Cursor from "./ui/cursor";
import { useState } from "react";

const Hero = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const textClasses =
    "mt-1 inline custom-cursor-hover-target font-[Rowdies] font-semibold text-stone-300 hover:text-stone-200 text-nowrap";
  return (
    <div
      className="flex flex-col items-center justify-center  w-full min-h-[80vh] md:min-h-screen p-2 md:p-10"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <p className={cn(textClasses, "text-[1.3rem] font-[Poppins] font-400")}>
        Hey There,
      </p>

      <p className={cn(textClasses, "text[1.7rem] md:text-[3rem] ")}>
        <span className="text-[1.4rem]  mr-1">I am </span> SHRIKANT RATHOD
      </p>
      <p
        className={cn(
          textClasses,
          "text-[1.7rem] md:text-[3rem] lg:text-[4rem] text-zinc-400 font-bold hover:text-zinc-300"
        )}
      >
        FRONTEND DEVELOPER !
      </p>

      {/* <p
        className={cn(
          textClasses,
          "text-[1.7rem] md:text-[3rem] lg:text-[4rem]  text-zinc-400 font-bold hover:text-zinc-300"
        )}
      >
        FULLSTACK DEVELOPER !!
      </p> */}
      <Cursor isMouseEnter={isMouseEnter} />
    </div>
  );
};

export default Hero;
