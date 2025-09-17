import { motion } from "framer-motion";

export default function CallToActionButton() {
  const handleClick = (e) => {
    e.preventDefault();

    if (window.pagesense) {
      window.pagesense.push(["trackEvent", "cta_button_click"]);
    } else {
      console.error("Zoho PageSense not loaded. Unable to track custom event.");
    }

    window.location.href = "/";
  };

  return (
    <motion.div
      className="py-2 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        onClick={handleClick}
        className="relative w-full sm:max-w-2xl px-42 py-8 bg-red-600 text-white font-semibold 
          text-base sm:text-lg md:text-xl rounded-full shadow-lg overflow-hidden 
          transition transform hover:scale-105 duration-300 ease-out text-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply Now ..!
        <span className="animate-cross-line"></span>
      </motion.a>
    </motion.div>
  );
}
