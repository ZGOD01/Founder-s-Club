// src/pages/Terms.jsx
import { Link } from 'react-router-dom';

export default function Terms() {
  const allSections = [
    {
      id: "services",
      title: "Services",
      content: (
        <p className="pl-0">
          We provide business growth, client acquisition, and digital solutions
          on a service model.
        </p>
      ),
    },
    {
      id: "payments",
      title: "Payments",
      content: (
        <ul className="list-outside space-y-2 pl-5">
          <li>
            Payments are collected securely through UPI, debit/credit cards, and
            net banking.
          </li>
          <li>
            All charges and commissions are confirmed with the client before
            engagement.
          </li>
        </ul>
      ),
    },
    {
      id: "refund-policy",
      title: "Refund Policy",
      content: (
        <p className="pl-0">
          We follow a strict <strong>No Refund Policy</strong>. Once payment is
          made, it cannot be refunded under any circumstances. Please review our{" "}
          <span className="text-blue-400 underline cursor-pointer">
            Refund Policy
          </span>{" "}
          page for details.
        </p>
      ),
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      content: (
        <p className="pl-0">
          Clients must provide accurate information and comply with applicable
          laws. Misuse of our services may result in termination.
        </p>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content: (
        <p className="pl-0">
          We are not responsible for indirect, incidental, or consequential
          damages. Our liability is limited to the amount paid by the client for
          services.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: (
        <p className="pl-0">
          These Terms shall be governed by the laws of India.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-black mb-12 text-left">
          Terms & Conditions
        </h1>

        {/* Intro Text */}
        <p className="text-gray-600 max-w-2xl mb-12 text-left">
          Welcome to <strong className="text-black">Scale100Million.com</strong>. By
          accessing or using our website and services, you agree to be bound by
          these Terms & Conditions.
        </p>

        {/* All sections in one simple box */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-black/50 shadow-md p-6 hover:bg-white/10 transition-all duration-300 space-y-6 text-left">
          {allSections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-lg font-semibold text-black mb-2">
                {section.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h2>
              <div className="text-gray-600 leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}