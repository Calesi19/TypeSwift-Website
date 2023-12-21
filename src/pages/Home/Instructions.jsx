export function Instructions() {
  return (
    <div className="bg-[#eb4f26] min-h-[300px] w-full py-[150px] overflow-hidden">
      <h1 className="text-[32pt] md:text-[64pt] text-white container font-racing">How it Works</h1>
      <div className="container w-full flex flex-col-reverse md:flex-row gap-4 mt-10">
        <div className="md:w-1/2 pt-10 md:pt-0 overflow-x-visible">
          <div className="min-h-[125px] flex gap-8">
            <div>
              <div className="bg-white h-14 w-14 md:h-20 md:w-20 rounded-full text-3xl text-[#eb4f26] font-bold flex justify-center items-center">
                1
              </div>
            </div>
            <div className="pt-5 text-3xl text-white font-bold text-balance">
              Download and install the app for your operating system.
            </div>
          </div>

          <div className="min-h-[125px] mt-8 flex gap-8">
            <div>
              <div className="bg-white h-14 w-14 md:h-20 md:w-20 rounded-full text-3xl text-[#eb4f26] font-bold flex justify-center items-center">
                2
              </div>
            </div>
            <div className="pt-5 text-3xl text-white font-bold text-balance">
              Run TypeSwift and create a new shortcut.
            </div>
          </div>

          <div className="min-h-[125px] mt-8 flex gap-8 ">
            <div>
              <div className="bg-white h-14 w-14 md:h-20 md:w-20 rounded-full text-3xl text-[#eb4f26] font-bold flex justify-center items-center">
                3
              </div>
            </div>
            <div className="pt-5 text-3xl text-white font-bold text-balance">
              Enjoy typing away. Close TypeSwift when you’re finished.
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col justify-center pl-15 overflow-visible">
          <img src="app.png" alt="TypeSwift App Example" />
        </div>
      </div>
    </div>
  );
}
