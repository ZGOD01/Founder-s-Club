import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-5 right-5 z-50
            p-3
            bg-blue-600 hover:bg-blue-700
            text-white text-2xl font-bold
            rounded-full shadow-lg
            transition-all duration-300
            transform hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          &uarr;
        </button>
      )}
    </>
  );
};

export default BackToTop;