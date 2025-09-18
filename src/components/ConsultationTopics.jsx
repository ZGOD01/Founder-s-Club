import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultationTimeline() {
  const topics = [
    "How to leverage AI agents to scale your business",
    "How to build a growth business rather than a survival business",
    "Characteristics of growth and survival businesses",
    "3 Reasons why business owners get stuck in survival mode",
    "Focus areas to build a growth business",
  ];

  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 1 }, // keeps container visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35, // delay between children
      },
    },
  };

  // Child item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          🚀 What We Will Cover in Your{" "}
          <span className="text-indigo-600">1-1 Consultation</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          These strategies apply to{" "}
          <span className="font-semibold">all online service businesses</span>{" "}
          — no matter your industry or team size.
        </p>
      </div>

      {/* Timeline */}
      <motion.div
        className="relative max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers once when 30% is visible
      >
        {/* Vertical line */}
        <div className="absolute left-5 top-0 w-1 h-full bg-indigo-200 rounded-full"></div>

        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-4 mb-10 last:mb-0"
            variants={itemVariants}
          >
            {/* Icon */}
            <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full shadow-md">
              <CircleCheckBig className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="bg-white shadow-md rounded-xl p-5 w-full hover:shadow-lg transition">
              <h3 className="text-gray-900 font-semibold text-lg">{topic}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
