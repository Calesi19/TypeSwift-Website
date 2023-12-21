import "./style.css";

export function Hero() {
  return (
    <div>
      <div className="min-h-[400px] bg-[#eb4f26] slant-hero"></div>
      <div className="h-[400px] bg-white text-black flex items-center">
        <h1 className="container text-[64pt] text-[#1E2F67] font-racing">Type<span className="text-[#eb4f26]">Swift</span></h1>
      </div>

      <div className="h-[200px] w-[200px] bg-slate-700 absolute top-[100px] z-10 left-[800px]">

      </div>

    </div>
  );
}
