import React from "react";

import bgHeader from "@/assets/alessandro-zanini-T1FrGaYTNXs-unsplash.jpg";
// import Image from "next/image";

const Header = () => {
  return (
    <div
      className="hero min-h-[700px]"
      style={{ background: "url(" + bgHeader.src + ")" }}
    >
      <div className="hero-overlay opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-white">Bienvenue</h1>
          <p className="mb-5">
            Explorez la beauté unique de Madagascar avec nous. Des aventures
            inoubliables, des paysages époustouflants et une hospitalité
            chaleureuse vous attendent. Laissez-nous vous guider à travers une
            expérience de voyage exceptionnelle à la découverte de cette île
            paradisiaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
