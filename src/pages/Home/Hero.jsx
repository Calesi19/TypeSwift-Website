import TypingAnimation from "./Demo";
import { Button } from "flowbite-react";
import "./style.css";

export function Hero() {
  return (
    <div>
      <div className="min-h-[400px] bg-[#eb4f26] slant-hero"></div>
      <div className="h-[400px] z-30 bg-white text-black flex flex-col justify-center items-center">
        <h1 className="container text-[64pt] text-[#1E2F67] font-racing">Type<span className="text-[#eb4f26]">Swift</span></h1>
        <Button color="blue" >Download</Button >
      </div>

      <div className="h-[150px] w-[300px] bg-slate-700 absolute top-[100px] z-10 left-[800px] p-5 rounded-lg text-3xl">
    <TypingAnimation />
      </div>

    </div>
  );
}
