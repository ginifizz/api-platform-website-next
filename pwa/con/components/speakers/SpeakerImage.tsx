import React from "react";
import Image from "next/image";

interface SpeakerImageProps {
  image: string;
}

const SpeakerImage = ({ image }: SpeakerImageProps) => {
  return (
    <div className="relative w-full h-full before:absolute before:w-[110%] before:h-[110%] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:pointer-events-none before:transition-all before:bg-circle before:bg-no-repeat before:duration-700 before:ease-out group-hover:before:rotate-45">
      <div className="rounded-full overflow-hidden w-full h-full relative after:absolute after:bg-blue-black after:opacity-0 after:w-full after:h-full after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:duration-500 after:transition-all after:rounded-full group-hover:after:opacity-50 group-hover:after:scale-95">
        <Image src={image} className="rounded-full" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default SpeakerImage;
