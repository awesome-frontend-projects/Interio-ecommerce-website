import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[75vh] lg:h-[87vh] bg-[url(/images/hero-img.png)] bg-no-repeat bg-cover rounded-2xl bg-[#0A0D17] flex items-center justify-center text-white mx-4 mt-24">
      <div className="text-center">
        <p className="subtitle">Minimal Interior Design</p>
        <h1 className="text-4xl font-semibold xl:text-6xl">
          We minimize your waste <br /> in every step of the process.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
