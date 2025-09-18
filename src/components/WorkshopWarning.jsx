import React from "react";

export default function WorkshopWarningEditorial() {
  const reasons = [
    {
      big: "PSYCHOLOGY",
      title: "You Are Not A Business Owner",
      desc: "This workshop is built for current business owners who want to scale — not hobbyists.",
      offset: 8,
    },
    {
      big: "SYSTEMS",
      title: "You Are Not An Action Taker",
      desc: "We move fast — if you don’t execute, you won’t gain the momentum this program creates.",
      offset: 42,
    },
    {
      big: "STRATEGY",
      title: "You Are Not Serious About Your Business",
      desc: "We work with owners ready to commit time, resources, and focus to grow.",
      offset: 76,
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6">
      {/* Intro */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h3 className="text-2xl tracking-widest text-[#d4b98c] uppercase mb-4">
          Who This Workshop Is Really For
        </h3>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          To Online service-business owners who are ready to scale... this system
          is built for you. No fluff, no generic advice — just proven strategies,
          smart systems, and AI automation to take your business all the way to{" "}
          <span className="font-semibold text-gray-900">7–8 figures</span> with
          clarity and speed.
        </p>
      </div>

      {/* Editorial layout */}
      {/* For mobile, use a simple vertical stack. For desktop, use the absolute positioning. */}
      <div className="max-w-6xl mx-auto relative md:overflow-visible">
        <div className="md:relative md:w-full h-auto md:h-[520px]">
          {/* Big cropped background words (typographic art) */}
          {reasons.map((r, i) => (
            <div key={i} className="mb-8 md:mb-0 text-center md:text-left">
              <span
                aria-hidden
                className="pointer-events-none select-none text-black opacity-7 font-extrabold leading-none block md:absolute md:left-0 md:w-full"
                style={{
                  top: i === 0 ? "8%" : i === 1 ? "42%" : "76%",
                  transform: "translateY(-50%)",
                  fontSize: "clamp(48px, 9vw, 160px)",
                  letterSpacing: "-2px",
                }}
              >
                {r.big}
              </span>

              {/* Floating callouts (typographic callouts — not boxes) */}
              <div
                className={`relative w-full flex flex-col items-center text-center md:absolute md:w-full md:flex-row md:items-center md:text-left`}
                style={{ top: i === 0 ? "8%" : i === 1 ? "42%" : "76%", transform: "translateY(-50%)" }}
              >
                {/* left/right alternating alignment */}
                <div
                  className={`flex-1 px-6 md:px-12 transition-transform duration-400 ease-out flex ${
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`max-w-xl md:max-w-[44%] transform transition-transform duration-400 group`}
                  >
                    {/* Title — inline, no container background */}
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:translate-y-[-6px] transition-transform">
                      {r.title}
                    </h4>

                    {/* Decorative underline built from text gradient */}
                    <div className="mt-2 inline-block">
                      <span
                        style={{
                          display: "inline-block",
                          height: 6,
                          width: 60,
                          borderRadius: 6,
                          background:
                            "linear-gradient(90deg, #d4b98c 0%, rgba(212,185,140,0.6) 100%)",
                          transform: "translateY(4px)",
                        }}
                      />
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-gray-700">{r.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}