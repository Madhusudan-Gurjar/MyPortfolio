import React from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my certifications showcasing my learning and skills
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:shadow-purple-500/50 hover:-translate-y-2"
          >
            <div className="p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-xl"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {cert.title}
              </h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-lg font-semibold transition-colors"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
