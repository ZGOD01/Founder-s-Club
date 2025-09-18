import React from "react";

export default function WorkshopVisualEditorial() {
  const reasons = [
    "You Are Not A Business Owner",
    "You Are Not An Action Taker",
    "You Are Not Serious About Your Business",
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h3 className="text-3xl font-bold text-blue-400 uppercase mb-4">
          Who This Workshop Is Really For
        </h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          To online service-business owners ready to scale — this system is built for you.
          No fluff, just proven strategies, smart systems, and AI automation to take your
          business to <span className="font-semibold text-gray-900">7–8 figures</span>.
        </p>
      </div>

      {/* Visual Section - Recreating the Image Design with more attractive central element */}
      <div className="relative flex items-center justify-center min-h-[500px] max-w-6xl mx-auto">
        {/* Central "DON'T JOIN IF" circle-segment - MORE ATTRACTIVE */}
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
          {/* Main background circle for shadow and general shape */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[#d4b98c] to-[#a0845a] shadow-xl flex items-center justify-center">
             {/* The Text "DON'T JOIN IF" */}
             <div className="relative z-10 text-center font-extrabold text-white leading-tight drop-shadow-md">
                <h4 className="text-4xl">
                  DON'T <br /> JOIN <br /> IF
                </h4>
              </div>
          </div>
         
          {/* Overlaying "petal" segments to create the gaps - slightly transparent for depth */}
          {/* Top segment */}
          <div
            className="absolute bg-white/30 backdrop-blur-sm w-[130px] h-[130px] rounded-full"
            style={{ top: "-10px", left: "50%", transform: "translateX(-50%) rotate(20deg)" }}
          ></div>
          {/* Bottom segment */}
          <div
            className="absolute bg-white/30 backdrop-blur-sm w-[130px] h-[130px] rounded-full"
            style={{ bottom: "-10px", left: "50%", transform: "translateX(-50%) rotate(-20deg)" }}
          ></div>
          {/* Right segment */}
          <div
            className="absolute bg-white/30 backdrop-blur-sm w-[130px] h-[130px] rounded-full"
            style={{ top: "50%", right: "-10px", transform: "translateY(-50%) rotate(90deg)" }}
          ></div>
        </div>

        {/* Reason Callouts with lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Reason 1 (Top Right) */}
          <div className="absolute top-10 right-10 flex items-center space-x-4 pointer-events-auto">
            <div className="w-12 h-0.5 bg-gray-400 transform rotate-12 -translate-x-4"/> {/* Line */}
            <div className="bg-[#fdf6ec] rounded-lg p-4 shadow-md text-gray-800 font-semibold text-sm">
              {reasons[0]}
            </div>
          </div>

          {/* Reason 2 (Middle Right) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center space-x-4 pointer-events-auto">
            <div className="w-12 h-0.5 bg-gray-400 -translate-x-4"/> {/* Line */}
            <div className="bg-[#fdf6ec] rounded-lg p-4 shadow-md text-gray-800 font-semibold text-sm">
              {reasons[1]}
            </div>
          </div>

          {/* Reason 3 (Bottom Right) */}
          <div className="absolute bottom-10 right-10 flex items-center space-x-4 pointer-events-auto">
            <div className="w-12 h-0.5 bg-gray-400 transform -rotate-12 -translate-x-4"/> {/* Line */}
            <div className="bg-[#fdf6ec] rounded-lg p-4 shadow-md text-gray-800 font-semibold text-sm">
              {reasons[2]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}