import React from "react";
import BonusCard from "./BonusCard";

// Define the bonusesData array directly within the component file
const bonusesData = [
  {
    id: 1,
    title: "AI Automation Mastery Lectures",
    tag: "Bonus #1",
    description:
      "Get 10+ private recorded lectures where I walk you step-by-step through setting up AI automation for client acquisition, lead follow-ups, and business growth.\n No tech overwhelm. No random YouTube rabbit holes. Just a clear roadmap to mastering the exact AI tools we use daily to enroll 50+ high-ticket clients per month.",
    value: "₹12,000 Value",
    cardType: "card1", // Added this line
  },
  {
    id: 2,
    title: "1-Page Business Model Canvas",
    tag: "Bonus #2",
    description:
      "Design your entire service business in one simple page. Map your offer, clients, pricing, and funnels clearly—so you always know exactly what to do next to scale fast.",
    value: "₹7,000 Value",
    cardType: "card2", // Added this line
  },
  {
    id: 3,
    title: "Done-for-You AI Funnel Templates",
    tag: "Bonus #3",
    description:
      "Skip the trial-and-error. Plug in your business and start attracting leads instantly with ready-to-use AI-powered funnel templates that generate high-ticket prospects on autopilot.",
    value: "₹6,000 Value",
    cardType: "card3", // Added this line
  },
  {
    id: 4,
    title: "Lead Magnet & Outreach Swipe Files",
    tag: "Bonus #4",
    description:
      "Access proven scripts, emails, and messages to attract premium leads without cold-calling or guesswork. Just copy, paste, and watch your pipeline fill.",
    value: "₹5,000 Value",
    cardType: "card4", // Added this line (repeating the pattern)
  },
  {
    id: 5,
    title: "AI-Powered Growth Tracker & Dashboard",
    tag: "Bonus #5",
    description:
      "Track clients, leads, and revenue with one dashboard. See what’s working, automate follow-ups, and scale confidently with data-driven insights.",
    value: "₹6,000 Value",
    cardType: "card5", // Added this line
  },
  {
    id: 6,
    title: "Private Community Access & Live Q&A Sessions",
    tag: "Bonus #6",
    description:
      "Join a community of ambitious service owners getting results with AI. Weekly Q&A sessions ensure you never get stuck and can implement strategies fast.",
    value: "₹6,299 Value",
    cardType: "card6", // Added this line
  },
  {
    id: 7,
    title: "High-Ticket Sales Mastery Script",
    tag: "Bonus #7",
    description:
      "Get the exact step-by-step sales script top 1% online business owners use to consistently close high-ticket clients and scale beyond 7 figures.\n No guessing, no trial-and-error—just plug in your offer and follow the proven system that turns calls into predictable revenue.",
    value: "₹7,000 Value",
    cardType: "card7", // Added this line
  },
];

export default function Bonuses() {
  return (
    <section className="relative py-12 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 drop-shadow-lg">
            Get INSANE Bonuses
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 px-4 py-2 bg-white text-gray-500 rounded-full inline-block">
          ( Previously Sold For ₹24,997 )
        </p>

        {/* Updated Grid: uses Flexbox and grid to center the last item */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 **justify-items-center**">
          {bonusesData.map((bonus, index) => (
            <div
              key={bonus.id}
              className={`flex justify-center w-full ${
                index === bonusesData.length - 1 && bonusesData.length % 2 !== 0
                  ? 'sm:col-span-2'
                  : ''
              }`}
            >
              <BonusCard bonus={bonus} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}