import KeyBenefits from "./KeyBenefits";

export default function Hero() {
  return (
    <div className="relative bg-white min-h-[80vh] flex items-start justify-center overflow-hidden mt-4">
      {/* 📱 Push down on mobile */}
      <div className="relative px-4 text-center max-w-5xl mt-1 md:mt-0">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight mx-auto">
          <span className="block text-black">
            How I Enroll{" "}
            <span className="text-blue-600 bg-yellow-100">50+ High-Ticket Clients</span> Every
            Month in My{" "}
            <span className="text-blue-600">Online Service Business</span>{" "}
            Using an{" "}
            <span className="underline underline-offset-4 text-blue-600">
              Army of A.I. Agents.
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="my-4 text-[15px] sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 leading-snug mx-auto px-6">
          ( And How You Can Copy My Funnel to Consistently Attract Premium Leads — Or You Don’t Pay )
        </h2>

        <KeyBenefits />
      </div>
    </div>
  );
}
