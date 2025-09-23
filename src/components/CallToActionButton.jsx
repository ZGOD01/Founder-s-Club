import { motion } from "framer-motion";

export default function CallToActionButton() {
  const handleClick = (e) => {
    e.preventDefault();

    if (window.pagesense) {
      window.pagesense.push(["trackEvent", "cta_button_click"]);
    } else {
      console.error("Zoho PageSense not loaded. Unable to track custom event.");
    }

    // Redirect to the Zoho Bookings page
    window.location.href =
      "https://scale100million.zohobookings.in/#/300029000000208032";
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
        className="relative w-80 py-6 
    bg-red-600 text-white font-semibold 
    text-base sm:text-lg md:text-xl rounded-full shadow-lg overflow-hidden 
    transition transform hover:scale-105 duration-300 ease-out text-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply Now
        <span className="animate-cross-line"></span>
      </motion.a>
    </motion.div>
  );
}
