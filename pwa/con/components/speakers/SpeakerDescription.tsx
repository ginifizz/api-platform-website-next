import React from "react";
import classnames from "classnames";
import styles from "./SpeakerDescription.module.css";
import SpeakerSocialList from "./SpeakerSocialList";
import { Speaker } from "con/types";

interface SpeakerDescriptionProps {
  speaker: Speaker;
}

const SpeakerDescription = ({ speaker }: SpeakerDescriptionProps) => {
  const { github, twitter, contentHtml } = speaker;
  const social = github || twitter;

  return (
    <div className="flex flex-col text-center pt-8 | lg:pl-14 ">
      <div
        className={classnames(styles.content)}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <div className="flex justify-center | lg:justify-start">
        {social && <SpeakerSocialList speaker={speaker} />}
      </div>
    </div>
  );
};

export default SpeakerDescription;
