import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <Link
      to="/services"
      className="w-full flex justify-between items-center flex-col space-y-4 md:px-5 px-3 md:py-7 py-4 border-2 border-neutral-200 rounded-md"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center">
        <img
          src={img}
          alt="Service"
          className="w-full h-full object-center object-cover rounded-full"
        />
      </div>
      <h1 className="text-lg text-blue-500 font-semibold text-center">
        {title}
      </h1>
      <p className="text-sm text-neutral-500 font-normal line-clamp-2 text-center">
        {desc}
      </p>
    </Link>
  );
};

export default ServiceCard;
