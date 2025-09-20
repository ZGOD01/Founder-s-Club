// src/components/BusinessBreakthrough.jsx
import React from "react";
import { Brain, Cog, Rocket } from "lucide-react";
import CallToActionButton from "./CallToActionButton";

export default function BusinessBreakthrough() {
  const steps = [
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: "Right Psychology",
      desc: "Unlock the mindset to lead with clarity and confidence.",
      color: "from-[#d4b98c] to-[#b49467]",
    },
    {
      icon: <Cog className="w-10 h-10 text-white" />,
      title: "Right Systems",
      desc: "Streamline processes with scalable and efficient systems.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Rocket className="w-10 h-10 text-white" />,
      title: "Right Strategies",
      desc: "Apply winning strategies that fuel sustainable growth.",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="bg-white  px-6">
      <CallToActionButton />
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto pt-6 mb-16">
        <span className="text-2xl tracking-widest text-sky-500 uppercase font-bold">
          Business Growth
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
          What Will Change In Your Business After a 1-1 Consultation Call
        </h2>
      </div>

      {/* Floating Circles Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 relative">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center max-w-xs"
          >
            {/* Circle with Gradient */}
            <div
              className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
            >
              {step.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mt-6 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}