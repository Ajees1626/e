import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-primary/20"
          : "bg-gradient-to-br from-[#f5f7fb] via-white to-secondary/10"
      }`}
    >
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div
          className={`transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 tracking-wide ${
              isDarkMode ? "text-white" : "text-primary"
            }`}
          >
            Build Powerful
            <br />
            <span className="text-gradient font-semibold tracking-wide">
              Digital Experiences
            </span>
            <br />
            with{" "}
            <span className="text-gradient font-semibold tracking-wide">Pixdot</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pixdot is a creative IT agency delivering high-quality Web
            Development, App Development, Graphic Design and Digital
            Marketing solutions that help brands grow faster in the
            digital world.
          </p>

          {/* CTA Button - gradient */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition transform hover:scale-105 shadow-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95"
          >
            Start Your Project
            <FaArrowRight />
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Pixdot Color Shape */}
          <div
            className={`absolute inset-0 rounded-[120px] md:rounded-[200px] ${
              isDarkMode
                ? "bg-secondary/70"
                : "bg-secondary opacity-90"
            }`}
          />

          <img
            src="https://res.cloudinary.com/dxiwvcfs5/image/upload/v1761651797/hero_tweuqo.png"
            alt="Pixdot Digital Team"
            className="relative z-10 w-full max-w-xl mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;