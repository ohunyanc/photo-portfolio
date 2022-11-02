import React from "react";
import IMG1 from "../public/assets/ig-img-1.jpeg";
import IMG2 from "../public/assets/ig-img-2.jpeg";

import IMG3 from "../public/assets/ig-img-3.jpeg";

import IMG4 from "../public/assets/ig-img-4.jpeg";

import IMG5 from "../public/assets/ig-img-5.jpeg";

import IMG6 from "../public/assets/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Adroit</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IMG1} />
        <InstagramImg socialImg={IMG2} />
        <InstagramImg socialImg={IMG3} />
        <InstagramImg socialImg={IMG4} />
        <InstagramImg socialImg={IMG5} />
        <InstagramImg socialImg={IMG6} />
      </div>
    </div>
  );
};

export default Instagram;
