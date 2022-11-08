import React, { useContext } from "react";
import Web from "con/components/common/Web";
import Wave from "con/components/common/Wave";
import Section, { SectionContext } from "con/components/common/Section";
import Image from "next/image";

const CoverWeb: React.ComponentType = () => {
  const isVisible = useContext(SectionContext);
  return (
    <Web
      className="absolute z-0 h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-[80%] opacity-60 pointer-events-none"
      animated={false}
      isVisible={isVisible}
    />
  );
};

interface CoverProps {
  date: string;
  baseline: string;
  button?: JSX.Element;
}

const Cover: React.ComponentType<CoverProps> = ({ date, baseline, button }) => {
  return (
    <Section
      className="flex flex-col text-white text-center justify-center items-center min-h-screen w-full relative overflow-hidden pt-12 pb-12"
      section="home"
    >
      <div className="container relative z-10 flex flex-col items-center">
        <span className="inline-block uppercase border-2 border-white py-3 px-4 font-semibold text-sm font-raleway mb-10 | md:text-base">
          {date}
        </span>
        <h1 className="conf__cover-logo">
          <Image
            src="/images/con/logo.svg"
            alt="Api Platform Conference"
            width="800"
            height="172"
          />
        </h1>
        <span className="font-raleway text-3xl font-light py-12">{baseline}</span>
        <CoverWeb />
        {button || null}
      </div>
      <Wave
        className="absolute opacity-50 z-0 bottom-0 h-[60vh] right-[22%] top-[58%] -translate-y-1/2 rotate-[10deg]"
        animated={false}
      />
    </Section>
  );};

export default Cover;
