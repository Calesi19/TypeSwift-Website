export function Instructions() {
  return (
    <div className="bg-[#eb4f26] min-h-[300px] w-full py-[150px] overflow-hidden">
          <h1 className="text-[64pt] container font-racing">How it Works</h1>
          <div className="container w-full flex gap-4 mt-10">
          
        <div className="w-1/2 overflow-x-visible">
          

          <div className="min-h-[125px] flex gap-8">
            <div>
              <div className="bg-white h-20 w-20 rounded-full text-3xl text-black font-bold flex justify-center items-center">
                1.
              </div>
            </div>
            <div className="pt-5 text-3xl font-bold">
              Download and install the
              <br />
              app for your operating
              <br />
              system.
            </div>
          </div>

          <div className="min-h-[125px] mt-8 flex gap-8">
            <div>
              <div className="bg-white h-20 w-20 rounded-full text-3xl text-black font-bold flex justify-center items-center">
                2.
              </div>
            </div>
            <div className="pt-5 text-3xl font-bold">
              Run TypeSwift and
              <br />
              create a new shortcut.
            </div>
          </div>

          <div className="min-h-[125px] mt-8 flex gap-8">
            <div>
              <div className="bg-white h-20 w-20 rounded-full text-3xl text-black font-bold flex justify-center items-center">
                3.
              </div>
            </div>
            <div className="pt-5 text-3xl font-bold">
              Enjoy typing away. Close
              <br />
              TypeSwift when you’re
              <br />
              finished.
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
