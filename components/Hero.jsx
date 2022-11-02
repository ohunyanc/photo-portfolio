import React from "react";
import Link from "next/link";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-no-repeat custom-img">
      {/*overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="pt-24 text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <Link href="/contact">
          <button className="px-8 py-2 border">Book</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
