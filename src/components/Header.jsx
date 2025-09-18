import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center w-full px-4">
      <header className="flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-indigo-700 text-white text-sm sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-b-2xl max-w-fit shadow-md">
        <span>For Coaches, Freelancers & Agencies owners</span>
      </header>
    </div>
  );
}
