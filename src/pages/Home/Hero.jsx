import TypingAnimation from "./Demo";
import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import {} from "react-icons/fa";
import "./style.css";

export function Hero() {
  return (
    <div>
      <div className="min-h-[400px] bg-[#eb4f26] slant-hero"></div>
      <div className="h-[400px] z-30 bg-white text-black flex flex-col justify-center">
        <div className="container">
          <h1 className="text-[84pt] text-[#1E2F67] font-racing">
            Type<span className="text-[#eb4f26]">Swift</span>
          </h1>
          <div className="flex gap-2 z-30">
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
      </div>

      <div className="h-[150px] w-[300px] bg-slate-700 absolute top-[100px] z-10 left-[800px] p-5 rounded-lg text-3xl">
        <TypingAnimation />
      </div>
    </div>
  );
}
