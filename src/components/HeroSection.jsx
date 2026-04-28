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
      className={`relative overflow-hidden flex items-start md:items-center pt-15 pb-12 sm:pt-28 sm:pb-16 md:min-h-screen md:py-0 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-900 to-primary/20"
          : "bg-gradient-to-br from-[#f5f7fb] via-white to-secondary/10"
      }`}
    >
      <div className="container-custom grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div
          className={`transition-all duration-1000 text-left ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <h1
            className={`text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] md:leading-tight mb-4 sm:mb-6 tracking-normal md:tracking-wide ${
              isDarkMode ? "text-white" : "text-primary"
            }`}
          >
            Build Powerful
            <br />
            <span
              className={`font-semibold tracking-normal md:tracking-wide ${
                isDarkMode ? "text-gradient-dark" : "text-gradient"
              }`}
            >
              Digital Experiences
            </span>
            <br />
            with{" "}
            <span
              className={`font-semibold tracking-normal md:tracking-wide ${
                isDarkMode ? "text-gradient-dark" : "text-gradient"
              }`}
            >
              Pixdot
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Pixdot is a forward-thinking Branding and Business Development company delivering strategic and creative solutions across Web Development, App Development, Graphic Design, and Digital Marketing to help brands thrive in the digital era.
          </p>

          {/* CTA Button - gradient */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition transform hover:scale-105 shadow-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95"
          >
            Start Your Project
            <FaArrowRight />
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`relative transition-all duration-1000 delay-300 mt-8 sm:mt-10 md:mt-0 ${
            show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* Pixdot Color Shape */}
          <div
            className={`absolute inset-2 sm:inset-0 rounded-[70px] sm:rounded-[120px] md:rounded-[200px] ${
              isDarkMode
                ? "bg-secondary/70"
                : "bg-secondary opacity-90"
            }`}
          />

          <img
            src="https://res.cloudinary.com/dxiwvcfs5/image/upload/v1761651797/hero_tweuqo.png"
            alt="Pixdot Digital Team"
            className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] md:max-w-xl mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;