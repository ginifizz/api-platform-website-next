import React from "react";
import { Speaker } from "con/types";

interface SpeakerSocialListProps {
  speaker: Speaker;
}

const SpeakerSocialList = ({ speaker }: SpeakerSocialListProps) => {
  const { github, twitter } = speaker;
  return (
    <div className="flex flex-row justify-center space-x-2.5">
      {github && (
        <a
          className="btn empty relative flex flex-col justify-center items-center p-2 overflow-hidden m-1 text-xl rounded-full"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-github" />
        </a>
      )}
      {twitter && (
        <a
          className="btn empty relative flex flex-col justify-center items-center p-2 overflow-hidden m-1 text-xl rounded-full"
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-twitter " />
        </a>
      )}
    </div>
  );
};

export default SpeakerSocialList;
