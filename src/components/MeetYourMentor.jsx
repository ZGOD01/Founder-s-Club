// src/components/MeetYourMentor.jsx
import React from "react";
import mentorImg from "../assets/Abhay.png"; // replace with your image
import CallToActionButton from "./CallToActionButton";

export default function MeetYourMentor() {
  return (
    <section className="relative bg-white py-4 px-6 md:px-12 lg:px-24">
      
        <CallToActionButton/>
      <div className="mt-3 max-w-6xl mx-auto border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Image - Stacked on top for mobile */}
          <div className="order-1 md:order-2 h-full flex items-stretch">
            <img
              src={mentorImg}
              alt="Abhay Lagad - Mentor"
              className="w-full h-96 sm:h-[28rem] md:h-full object-cover md:rounded-l-none md:rounded-r-3xl"
            />

          </div>

          {/* Content */}
          <div className="order-2 md:order-1 p-8 md:p-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6">
              Meet Your <span className="text-indigo-600">Mentor</span>
            </h2>

            <p className="text-lg font-semibold text-indigo-600 mb-6">
              On A Mission To Help 1 Million Business Owners Achieve{" "}
              <span className="underline decoration-indigo-400">Profit & Growth</span>
            </p>

            <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                I’m{" "}
                <span className="font-bold text-gray-900">Abhay Lagad</span> — your
                mentor, guide, and biggest supporter on this journey.
              </p>
              <p>
                With <span className="font-bold text-gray-900">Founders Club</span>,
                my mission is clear: to share the proven{" "}
                <span className="text-indigo-600 font-semibold">
                  systems, strategies, and mindset
                </span>{" "}
                I wish I had when I was starting — so you skip the
                trial-and-error and get straight to growth.
              </p>
              <p className="italic text-gray-600">
                Let’s turn your vision into reality. I know the struggle, and I
                know the way forward.
              </p>
            </div>

            <div className="mt-8">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300">
                Start Your Growth Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
