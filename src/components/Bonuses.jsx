import React, { useState, useEffect } from "react";
import ScratchCard from "react-scratchcard-v2";
import { motion, AnimatePresence } from "framer-motion";
import ScratchMeImg from "../assets/scratch-me-1.png";

// ScratchCard settings
const settings = {
  width: 250,
  height: 250,
  image: ScratchMeImg,
  finishPercent: 70,
  brushSize: 20,
};

// Updated bonuses data
const bonuses = [
  {
    title: "AI Automation Mastery Lectures",
    description:
      "Get 10+ private recorded lectures where I walk you step-by-step through setting up AI automation for client acquisition, lead follow-ups, and business growth.\n👉 No tech overwhelm. No random YouTube rabbit holes. Just a clear roadmap to mastering the exact AI tools we use daily to enroll 50+ high-ticket clients per month.",
    note: "₹12,000 Value",
  },
  {
    title: "1-Page Business Model Canvas",
    description:
      "Design your entire service business in one simple page. Map your offer, clients, pricing, and funnels clearly—so you always know exactly what to do next to scale fast.",
    note: "₹7,000 Value",
  },
  {
    title: "Done-for-You AI Funnel Templates",
    description:
      "Skip the trial-and-error. Plug in your business and start attracting leads instantly with ready-to-use AI-powered funnel templates that generate high-ticket prospects on autopilot.",
    note: "₹6,000 Value",
  },
  {
    title: "Lead Magnet & Outreach Swipe Files",
    description:
      "Access proven scripts, emails, and messages to attract premium leads without cold-calling or guesswork. Just copy, paste, and watch your pipeline fill.",
    note: "₹5,000 Value",
  },
  {
    title: "AI-Powered Growth Tracker & Dashboard",
    description:
      "Track clients, leads, and revenue with one dashboard. See what’s working, automate follow-ups, and scale confidently with data-driven insights.",
    note: "₹6,000 Value",
  },
  {
    title: "Private Community Access & Live Q&A Sessions",
    description:
      "Join a community of ambitious service owners getting results with AI. Weekly Q&A sessions ensure you never get stuck and can implement strategies fast.",
    note: "₹6,299 Value",
  },
  {
    title: "High-Ticket Sales Mastery Script",
    description:
      "Get the exact step-by-step sales script top 1% online business owners use to consistently close high-ticket clients and scale beyond 7 figures.\n👉 No guessing, no trial-and-error—just plug in your offer and follow the proven system that turns calls into predictable revenue.",
    note: "₹7,000 Value",
  },
];

export default function Bonuses() {
  const [openBonuses, setOpenBonuses] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleBonus = (index) => {
    if (isMobile && !openBonuses[index]) {
      setOpenBonuses((prev) => ({ ...prev, [index]: true }));
    }
  };

  // Helper to split description for tip formatting
  const renderDescription = (desc) => {
    const parts = desc.split("👉");
    return (
      <>
        <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line leading-relaxed">
          {parts[0]}
        </p>
        {parts[1] && (
          <p className="text-xs sm:text-sm text-gray-500 mt-1 italic">{parts[1]}</p>
        )}
      </>
    );
  };

  return (
    <section className="relative py-4 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
            Get INSANE Bonuses
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 text-center mb-12">
          (Previously Sold For ₹49,229)
        </p>

        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* First row → 4 boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {bonuses.slice(0, 4).map((bonus, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 cursor-pointer min-h-[250px] flex flex-col items-center justify-start"
                style={{ width: settings.width }}
                onClick={() => toggleBonus(index)}
              >
                <AnimatePresence mode="wait">
                  {isMobile ? (
                    openBonuses[index] ? (
                      <motion.div
                        key="open-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col justify-start items-center h-full bg-gray-100 p-5 text-center space-y-2"
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                          {bonus.title}
                        </h3>
                        <p className="text-sm sm:text-base text-yellow-600 font-semibold">
                          {bonus.note}
                        </p>
                        {renderDescription(bonus.description)}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <img
                          src={ScratchMeImg}
                          alt="Scratch to reveal"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )
                  ) : (
                    <>
                      <ScratchCard {...settings} />
                      <div className="absolute inset-0 flex flex-col justify-start items-center h-full bg-white p-5 text-center space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                          {bonus.title}
                        </h3>
                        <p className="text-sm sm:text-base text-yellow-600 font-semibold">
                          {bonus.note}
                        </p>
                        {renderDescription(bonus.description)}
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Second row → 3 boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:px-16 lg:px-24 justify-items-center">
            {bonuses.slice(4).map((bonus, index) => (
              <div
                key={index + 4}
                className="relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 cursor-pointer min-h-[250px] flex flex-col items-center justify-start"
                style={{ width: settings.width }}
                onClick={() => toggleBonus(index + 4)}
              >
                <AnimatePresence mode="wait">
                  {isMobile ? (
                    openBonuses[index + 4] ? (
                      <motion.div
                        key="open-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col justify-start items-center h-full bg-gray-100 p-5 text-center space-y-2"
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                          {bonus.title}
                        </h3>
                        <p className="text-sm sm:text-base text-yellow-600 font-semibold">
                          {bonus.note}
                        </p>
                        {renderDescription(bonus.description)}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <img
                          src={ScratchMeImg}
                          alt="Scratch to reveal"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )
                  ) : (
                    <>
                      <ScratchCard {...settings} />
                      <div className="absolute inset-0 flex flex-col justify-start items-center h-full bg-white p-5 text-center space-y-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                          {bonus.title}
                        </h3>
                        <p className="text-sm sm:text-base text-yellow-600 font-semibold">
                          {bonus.note}
                        </p>
                        {renderDescription(bonus.description)}
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
