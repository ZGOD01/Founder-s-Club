import React from "react";
import { CheckCircle2 } from "lucide-react";
import Bonuses1 from "../assets/Bonuses1.png";
import Bonuses2 from "../assets/Bonuses2.png";
import Bonuses3 from "../assets/Bonuses3.png";
import Bonuses4 from "../assets/Bonuses4.png";
import Bonuses5 from "../assets/Bonuses5.png";
import Bonuses6 from "../assets/Bonuses6.png";
import Bonuses7 from "../assets/Bonuses7.png";

const BonusCard = ({ bonus }) => {
  const descLines = bonus.description.split("\n").filter((line) => line.trim() !== "");

  // Object map to select the correct image based on bonus.cardType
  const imageMap = {
    card1: Bonuses1,
    card2: Bonuses2,
    card3: Bonuses3,
    card4: Bonuses4,
    card5: Bonuses5,
    card6: Bonuses6,
    card7: Bonuses7,
  };

  const currentImage = imageMap[bonus.cardType] || Bonuses1; // Default to Bonuses1 if cardType is not found

  return (
    <div className="relative w-full max-w-md bg-gray-50 rounded-xl shadow-2xl border-2 border-[#facc15] overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
      {/* Top Tag and Image Section */}
      <div className="relative">
        {/* Tag at the top-left */}
        <div className="absolute top-0 left-0 z-10">
          <span className="bg-[#facc15] text-gray-900 font-extrabold text-sm px-4 py-2 rounded-br-lg rounded-tl-lg">
            {bonus.tag.toUpperCase()}
          </span>
        </div>
        {/* Placeholder for the image */}
        <div className="p-8 pt-12 flex justify-center items-center bg-white">
          <img
            src={currentImage} // Use the dynamically selected image
            alt={bonus.title}
            className="w-56 h-auto object-contain"
          />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Main Title and Subtitle */}
        <div className="border-l-4 border-[#242738] pl-4 mb-6">
          <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
            {bonus.title}
          </h3>
          <p className="text-sm text-gray-700 mt-2">{bonus.subtitle}</p>
        </div>

        {/* Description as bullet points */}
        <ul className="space-y-4 text-base text-gray-800 leading-relaxed flex-grow">
          {descLines.map((line, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>{line.trim()}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="bg-[#242738] text-white text-center py-5 font-bold text-xl cursor-pointer hover:bg-blue-600 transition-colors duration-300">
        {bonus.value}
      </div>
    </div>
  );
};

export default BonusCard;