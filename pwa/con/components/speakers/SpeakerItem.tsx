import React from "react";
import classNames from "classnames";
import { Speaker } from "con/types";
import SpeakerSocialList from "./SpeakerSocialList";
import Head from "next/head";
import Image from "next/image";
import EmptySpeakerCircle from "./EmptySpeakerCircle";
import SpeakerImage from "./SpeakerImage";

interface SpeakerProps {
  speaker: Speaker;
  social?: boolean;
  hoverable?: boolean;
}

const SpeakerItem = ({ speaker, hoverable = true }: SpeakerProps) => {
  const { id, name, job, company, slug, github, twitter } = speaker;
  const social = github || twitter;

  const speakerData = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: speaker.name,
    jobTitle: `${speaker.job} ${speaker.company ? `@ ${speaker.company}` : ""}`,
  };

  const speakerImage = `/images/con/2022/speakers/${speaker.id}.png`;

  return (
    <div className="conf__speaker-resume flex flex-col text-center">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(speakerData)}
        </script>
      </Head>
      <a
        className={classNames("conf__speaker-content group", {
          hoverable,
        })}
        href={slug}
      >
        <div className="font-raleway text-base leading-snug">
          <div className="text-center flex items-center justify-center flex-col group">
            <div className="w-60 h-60">
              <SpeakerImage image={speakerImage} />
            </div>
            <svg
              className="absolute transition-all justify-center items-center w-24 opacity-0 | group-hover:opacity-100 group-hover:w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 281.49 281.49"
              fill="#ffff"
            >
              <path d="M140.74,0C63.14,0,0,63.14,0,140.74S63.14,281.49,140.74,281.49s140.75-63.14,140.75-140.75S218.35,0,140.74,0Zm0,263.49A122.75,122.75,0,1,1,263.49,140.74,122.88,122.88,0,0,1,140.74,263.49Z" />
              <path d="M210.91,131.74H149.74V70.58a9,9,0,1,0-18,0v61.16H70.58a9,9,0,1,0,0,18h61.16v61.17a9,9,0,0,0,18,0V149.74h61.17a9,9,0,0,0,0-18Z" />
            </svg>
          </div>
        </div>

        <div className="text-white uppercase mt-7">
          <h3
            className="text-2xl font-semibold transition-all group-hover:text-blue group-hover:-translate-y-4
          "
          >
            {name}
          </h3>
          <div className="transition-all border-2 border-blue mt-3 mb-2 rounded-full w-10 mx-auto " />
          <p className="text-sm font-light relative ">
            {job}
            <br />
            {company ? (
              <>
                @ <strong className="font-normal">{company}</strong>
              </>
            ) : null}
          </p>
        </div>
        <div className="border-2 border-blue mt-3 mb-2 rounded-full w-1/5 mx-auto" />
      </a>
      {social && <SpeakerSocialList speaker={speaker} />}
    </div>
  );
};

export default SpeakerItem;
function useStaticQuery(arg0: any) {
  throw new Error("Function not implemented.");
}

function getImage(images: any) {
  throw new Error("Function not implemented.");
}
