import CallToActionButton from "./CallToActionButton";
import Pipeline from "./PipelineBackground";

export default function BeforeAfterMarquee() {
  return (
    <section className="bg-white py-16">
      {/* The CallToActionButton has been moved here */}
      <div className="flex justify-center mb-12">
        <CallToActionButton />
      </div>

      <div className="text-center mb-12 px-5">
        {/* ✅ Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          The Only System Top{" "}
          <span className="text-blue-600">1% Business Owners</span> used To
          Scale To <span className="text-blue-600">7 Figures.</span>
        </h2>

        {/* ✅ Subheadline */}
        <p className="mt-4 text-gray-800 text-base md:text-lg font-medium">
          This is the ultimate{" "}
          <span className="bg-yellow-100 px-1 rounded">
            black-book of TOP 1% Business Owners
          </span>{" "}
          used (they won’t reveal it to you…)
        </p>
      </div>

      <Pipeline />
    </section>
  );
}
