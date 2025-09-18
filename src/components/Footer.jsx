import { Mail, Phone, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/scale100million logo.png";

export default function Footer() {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <footer className="relative bg-white text-black pt-2 pb-6 md:pt-6 md:pb-20 overflow-hidden">
      {/* Blue Glow */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 mt-2 md:mt-6">
        {/* Left - Logo + Contact Us */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <Link to="/" onClick={handleLogoClick} className="cursor-pointer">
            <img src={logo} alt="Scale100Million Logo" className="h-6 w-auto" />
          </Link>

          {/* Contact Us Heading */}
          <h3 className="text-lg font-semibold">Contact Us</h3>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 text-sm text-gray-700">
            <a
              href="mailto:scale100million@gmail.com"
              className="flex items-center gap-3 hover:underline"
            >
              <Mail size={16} className="shrink-0" />
              <span>scale100million@gmail.com</span>
            </a>
            <a
              href="tel:+919325847844"
              className="flex items-center gap-3 hover:underline"
            >
              <Phone size={16} className="shrink-0" />
              <span>+91 9325847844</span>
            </a>
            <a
              href="https://instagram.com/scale100million"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <Instagram size={16} className="shrink-0" />
              <span>@scale100million</span>
            </a>
          </div>
        </div>

        {/* Right - Quick Links */}
        <div className="flex flex-col items-center md:items-end w-full">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col items-start md:items-end space-y-2 text-sm text-gray-700">
            <li>
              <Link to="/terms" className="hover:underline block">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/cancellation" className="hover:underline block">
                Cancellation Policy
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:underline block">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline block">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-12 text-center text-xs text-gray-500">
        Mon – Sun, 10:00 AM – 10:00 PM
      </div>
      <div className="mt-2 text-center text-xs text-gray-400">
        © 2025 Scale100Million.com. All rights reserved.
      </div>
    </footer>
  );
}