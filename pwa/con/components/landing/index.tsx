import React, { useRef } from "react";
import Wave from "con/components/common/Wave";
import Web from "con/components/common/Web";
import Image from "next/image";
import { previousEditions, currentEdition } from "con/data/editions";
import { PreviousEdition } from "con/types";
import ContactCard from "con/components/common/ContactCard";
import { useIntersection } from "react-use";
import useAnimation from "con/hooks/useAnimation";
//import EditionCard from "con/components/editions/EditionCard";
//import PictureGallery from "@con/components/common/PictureGallery";

const Landing: React.ComponentType = () => {
  const lastEdition: PreviousEdition =
    previousEditions?.[previousEditions.length - 1];

  const coverRef = useRef(null);
  const intersection = useIntersection(coverRef, {
    threshold: 0.5,
  });

  const isWebVisible = intersection?.isIntersecting;

  const animationPrevious = useAnimation("top");

  return (
    <>
      <section
        ref={coverRef}
        className="flex flex-col justify-center min-h-screen w-full relative overflow-hidden pt-8 pb-52"
      >
        <div className="container py-5 flex flex-col items-center">
          <h1 className="text-center w-full">
            <Image
              src="/images/con/logo.svg"
              alt="Api Platform Conference"
              width="800"
              height="172"
            />
          </h1>
          <span className="bg-blue-dark text-white mt-4 text-2xl font-bold py-0.5 px-4 inline-block -rotate-3">{`Edition ${currentEdition} in progress...`}</span>
        </div>
        <Web
          className="absolute z-0 h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-[80%] opacity-60 pointer-events-none"
          animated={false}
          isVisible={isWebVisible}
        />
        <Wave
          className="absolute opacity-50 z-0 bottom-0 h-[60vh] right-[22%] top-[58%] -translate-y-1/2 rotate-[10deg]"
          animated={false}
        />
      </section>
      <div className="pt-52">
        <ContactCard />
      </div>
    </>
  );
};

export default Landing;
