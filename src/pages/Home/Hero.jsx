import TypingAnimation from "./Demo";
import { Button } from "flowbite-react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import {} from "react-icons/fa";
import "./style.css";

export function Hero() {
  return (
    <div>
      <div className="min-h-[600px] md:min-h-[400px] bg-[#eb4f26] slant-hero"></div>
      <div className="h-[600px] md:h-[400px] z-30 bg-white text-black flex flex-col justify-center">
        <div className="container flex flex-col md:flex-row">
          <div>
            <div>
              <h1 className="text-[48pt] md:text-[84pt] text-[#1E2F67] font-racing md:my-[-25px]">
                Type<span className="text-[#eb4f26]">Swift</span>
              </h1>
              <p className="text-4xl text-black font-racing">
                A light-weight text expander.
              </p>
            </div>

            <div className="mt-10 flex flex-col md:flex-row gap-2 z-30">
              <Button className="z-30" color="blue">
                Download
                <FaWindows className="ml-2 h-5 w-5" />
              </Button>
              <Button className="z-30" color="blue">
                Download
                <FaApple className="ml-2 h-5 w-5" />
              </Button>
              <Button className="z-30" color="blue">
                Download
                <FaLinux className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center w-full">
            <div className="h-[150px] w-full md:w-[300px] mt-10 md:mt-0 bg-slate-700 z-10 p-5 rounded-lg text-3xl text-white relative">
              <TypingAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
