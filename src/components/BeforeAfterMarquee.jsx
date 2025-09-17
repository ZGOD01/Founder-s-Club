
import CallToActionButton from "./CallToActionButton";

export default function BeforeAfterMarquee() {
  return (
    <section className="bg-white py-16">
      {/* The CallToActionButton has been moved here */}
      <div className="flex justify-center mb-12">
        <CallToActionButton />
      </div>

      <div className="text-center mb-12 px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          The Only System Top{" "}
          <span className="text-blue-600">1% Fat Loss Coaches</span> Need To
          Scale To <span className="text-blue-600">₹1 Cr+ This Year.</span>
        </h2>

        {/* ✅ Subheadline */}
        <p className="mt-4 text-gray-800 text-base md:text-lg font-medium">
          This is the ultimate{" "}
          <span className="bg-yellow-100 px-1 rounded">
            black-book of TOP 1% Fat Loss coaches
          </span>{" "}
          (they won’t reveal it to you…)
        </p>
      </div>

    </section>
  );
}
