import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKaaba, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Example icon
import image10 from "../../public/images/image10.webp";

function Image1Banner({ title, description }) {
  return (
    <div className="relative w-[750px] m-7 h-[220px] overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image10} alt={title} layout="fill" objectFit="cover" />
      </div>
      {/* Diagonal faded color overlay with clip-path */}
      <div
        className="absolute inset-0 z-5 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom right, transparent, rgba(0, 0, 0, 0.7))",
          clipPath: "polygon(79% 0, 100% 0, 100% 100%, 70% 100%)",
        }}
      />
      {/* Text div */}
      <div className="absolute inset-0 flex items-end justify-start p-5">
        <div className="text-white">
          {/* Resize the FontAwesome icon directly */}
          <div className="h-10 w-10 object-cover">
            <FontAwesomeIcon icon={faKaaba} size="2x" className="mr-2" />
          </div>{" "}
          <h2 className="font-bold text-2xl">{title}</h2>
          <div className="flex items-center">
            <p className="mr-2">{description}</p>
            <div className="w-2 h-2 m-5">
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image1Banner;
