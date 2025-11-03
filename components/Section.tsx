import Image from "next/image";
import React from "react";

const Section = () => {
  return (
    <section>
      <div className="container">
        {/* Image */}
        <figure>
          <Image src="/images/" alt="img" />
        </figure>
      </div>
    </section>
  );
};

export default Section;
