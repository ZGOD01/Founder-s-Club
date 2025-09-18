// src/components/MeetYourMentor.jsx
import React from "react";
import mentorImg from "../assets/Abhay.png"; // replace with your image

export default function MeetYourMentor() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto border border-gray-200 rounded-3xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left - Content */}
          <div className="p-10 md:p-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Meet Your Mentor
            </h2>

            <p className="text-lg font-semibold text-indigo-600 mb-6">
              🚀 On A Mission To Help 1 Million Business Owners Achieve Profit & Growth
            </p>

            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                I’m <span className="font-bold text-gray-900">Abhay Lagad</span> — your mentor,
                guide, and biggest supporter on this journey.
              </p>
              <p>
                With <span className="font-bold text-gray-900">Founders Club</span>, my mission is
                simple: give you the exact systems, strategies, and mindset that I wish I had when
                I was starting out — so you can skip the trial-and-error, avoid the common traps,
                and get straight to growth.
              </p>
              <p>
                Let’s make your vision a reality. Because I&apos;ve been through a lot of struggle
                myself…
              </p>
            </div>

            <div className="mt-8">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300">
                Start Your Growth Journey
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="h-full flex items-stretch">
            <img
              src={mentorImg}
              alt="Abhay Lagad - Mentor"
              className="w-full h-full object-cover md:rounded-l-none md:rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
