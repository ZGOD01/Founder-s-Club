// src/components/WorkshopInfo.jsx
import React from "react";

export default function WorkshopInfo() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Who This Workshop Will Help The Best?
        </h2>

        {/* 🔥 Added descriptive text below headline */}
        <p className="text-center text-gray-700 text-lg md:text-xl mb-12">
          To Online service-business owners who are ready to scale.. this system is built for you. 
          No fluff, no generic advice, just proven strategies, smart systems and AI automation to 
          take your business all the way to 7–8 figures with clarity and speed
        </p>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Circle - moved further left 🔥 */}
          <div className="flex-shrink-0 flex items-center md:h-[240px] justify-center md:justify-start md:-ml-20">
            <div className="w-36 h-36 rounded-full bg-sky-500 flex items-center justify-center text-center font-bold text-white text-lg shadow-[0_0_25px_5px_rgba(14,165,233,0.7)]">
              DON’T <br /> JOIN IF
            </div>
          </div>

          {/* Arrows + Boxes (unchanged) */}
          <div className="relative flex flex-col space-y-6 z-10">
            <div className="w-72 h-16 bg-gray-50 border border-gray-200 rounded-xl shadow-md flex items-center px-4 font-medium text-gray-800 relative">
              You Are Not A Business Owner
            </div>
            <div className="w-72 h-16 bg-gray-50 border border-gray-200 rounded-xl shadow-md flex items-center px-4 font-medium text-gray-800 relative">
              You Are Not An Action Taker
            </div>
            <div className="w-72 h-16 bg-gray-50 border border-gray-200 rounded-xl shadow-md flex items-center px-4 font-medium text-gray-800 relative">
              You Are Not Serious About Your Business
            </div>

            {/* SVG Arrows overlay */}
            <svg
              className="hidden md:block absolute left-[-160px] top-0 h-full w-[160px] pointer-events-none z-0"
              viewBox="0 0 160 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0 0 L8 4 L0 8 z" fill="#0ea5e9" />
                </marker>
              </defs>

              <path
                d="M70 80 C110 60, 130 50, 150 40"
                stroke="#0ea5e9"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead)"
                strokeLinecap="round"
              />

              <path
                d="M70 120 C110 120, 130 120, 150 120"
                stroke="#0ea5e9"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead)"
                strokeLinecap="round"
              />

              <path
                d="M70 160 C110 180, 130 190, 150 200"
                stroke="#0ea5e9"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead)"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
