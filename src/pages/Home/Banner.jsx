

function ConstructionBanner() {
    return (
        <div className="h-[90px] w-[100vw] bg-[#ff9d1c46] fixed z-50">
            <div className="h-full flex flex-col justify-center items-center text-xl text-black">
                <h1 className="font-bold text-3xl">Coming Soon.<br/></h1>
                <p className="container text-center">The TypeSwift app is still under construction. Check again soon.</p>
            </div>
        </div>
    );
}

export default ConstructionBanner;