// src/components/WorkshopInfo.jsx
import React from "react";

export default function WorkshopInfo() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Who This Workshop Will Help The Best?
        </h2>

        <p className="text-center text-gray-700 text-lg md:text-xl mb-12">
          To Online service-business owners who are ready to scale.. this system is built for you.
          No fluff, no generic advice, just proven strategies, smart systems and AI automation to
          take your business all the way to 7–8 figures with clarity and speed
        </p>

        {/* The "Don't Join" section - redesigned for a vertical flow */}
        <div className="relative flex flex-col items-center gap-12 mt-16">
          {/* Circle at the top */}
          <div className="w-44 h-44 rounded-full bg-red-600 flex items-center justify-center text-center font-black text-white text-2xl shadow-[0_0_30px_5px_rgba(220,38,38,0.6)] z-10">
            DON’T <br /> JOIN IF
          </div>

          {/* Lines and Boxes */}
          <div className="relative w-full flex flex-col items-center space-y-8">
            {/* Vertical Line Connector */}
            <div className="absolute top-0 bottom-0 w-1 bg-red-400 opacity-50"></div>

            <div className="relative w-full flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center -ml-2 text-white">
                {/* Optional: Add an icon here, e.g., a simple 'X' */}
              </div>
              <div className="relative w-full max-w-sm md:max-w-md bg-white border-2 border-red-200 rounded-xl shadow-lg p-5 font-medium text-gray-800 text-center md:text-left">
                You Are Not A Business Owner
              </div>
            </div>

            <div className="relative w-full flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center -ml-2 text-white">
                {/* Optional: Add an icon */}
              </div>
              <div className="relative w-full max-w-sm md:max-w-md bg-white border-2 border-red-200 rounded-xl shadow-lg p-5 font-medium text-gray-800 text-center md:text-left">
                You Are Not An Action Taker
              </div>
            </div>

            <div className="relative w-full flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center -ml-2 text-white">
                {/* Optional: Add an icon */}
              </div>
              <div className="relative w-full max-w-sm md:max-w-md bg-white border-2 border-red-200 rounded-xl shadow-lg p-5 font-medium text-gray-800 text-center md:text-left">
                You Are Not Serious About Your Business
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}