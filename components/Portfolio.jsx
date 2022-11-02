import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectfit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectfit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectfit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectfit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
