import React, { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const LOGOS = [
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-01_nvscg2.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-02_nby2jc.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-03_op6wvc.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-04_jchrau.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-05_ozwf0w.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710267/clients_names-06_gbbn9w.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-07_h3i3p4.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-08_zwas4e.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-09_gup9fr.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710268/clients_names-10_sxcg4u.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-11_ztxad7.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-12_gk5yqc.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-13_k2iehb.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-14_pybaa7.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-15_brmmt3.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710269/clients_names-16_gax0br.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-17_himezc.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-18_wwxr9w.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-19_lewai6.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-20_ouc3pk.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710270/clients_names-21_lqj37s.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-22_nre2g9.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710271/clients_names-23_gt2xuu.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-24_svmhvo.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-25_ezgs5z.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-26_luz5cv.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710296/clients_names-27_tqdk7j.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-28_gpcxqu.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710297/clients_names-29_kyxfsj.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1756710298/clients_names-30_afbcs5.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308730/CLIENT_NAMES-07_result_mxa6xh.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308730/CLIENT_NAMES-05_result_gmkqct.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308730/CLIENT_NAMES-06_result_zf4jxw.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308730/CLIENT_NAMES-11_result_qixzjm.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308730/CLIENT_NAMES-04_result_hzkydc.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308729/CLIENT_NAMES-10_result_x2qu3x.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308728/CLIENT_NAMES-08_result_awj5wi.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308729/CLIENT_NAMES-09_result_jlywyw.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308729/CLIENT_NAMES-02_result_cd7bcv.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308729/CLIENT_NAMES-01_result_wwaibo.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308728/CLIENT_NAMES-03_result_hhwqax.webp", alt: "Client brand" },
  { src: "https://res.cloudinary.com/dxiwvcfs5/image/upload/v1773308729/CLIENT_NAMES-12_result_jgoyea.webp", alt: "Client brand" },
  
];

const ClientLogosSection = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const el = document.getElementById("client-logos-section");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section
      id="client-logos-section"
      className={`section-padding overflow-hidden relative ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Subtle background gradient */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-30 ${
          isDarkMode
            ? "bg-gradient-to-b from-secondary/5 to-transparent"
            : "bg-gradient-to-b from-primary/5 to-transparent"
        }`}
      />

      <div className="container-custom relative z-10">
        {/* Heading with entrance animation */}
        <div
          className={`text-center mb-14 md:mb-16 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-primary to-secondary rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
            <span className="text-white font-semibold text-xs md:text-sm">Our Partners</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-normal mb-4 tracking-wide ${
              isDarkMode ? "text-white" : "text-primary"
            }`}
          >
            Trusted by{" "}
            <span className="text-gradient font-semibold">150+ Brands</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Companies around the world trust Pixdot to design and build their
            digital experiences.
          </p>
        </div>

        {/* Logo slider wrapper */}
        <div className="relative w-full -mx-4 md:-mx-6">
          <div
            className="logo-track flex items-center gap-8 md:gap-14 py-4"
            style={{ width: "max-content" }}
          >
            {duplicatedLogos.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="logo-card flex-shrink-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`w-full h-full rounded-2xl flex items-center justify-center p-4 md:p-5 transition-all duration-300 ease-out ${
                    isDarkMode
                      ? "bg-gray-800/80 border border-gray-700/50 shadow-lg hover:border-secondary/40 hover:shadow-secondary/10"
                      : "bg-white border border-gray-100 shadow-md hover:border-secondary/30 hover:shadow-xl"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={`${item.alt} ${index % LOGOS.length + 1}`}
                    className="logo-img w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .logo-track {
          animation: scrollLogos 40s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation-duration: 60s;
          }
        }

        .logo-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-card {
          width: 160px;
          height: 85px;
        }

        @media (min-width: 768px) {
          .logo-card {
            width: 180px;
            height: 95px;
          }
        }

        .logo-card .logo-img {
          max-width: 100%;
          max-height: 55px;
          object-fit: contain;
          transition: opacity 0.4s ease, transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .logo-card .logo-img {
            max-height: 60px;
          }
        }

        .logo-card:hover .logo-img {
          opacity: 1;
          transform: scale(1.05);
        }

        .logo-card > div {
          transition: transform 0.35s ease, box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .logo-card:hover > div {
          transform: translateY(-6px);
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;
