import React from "react";
import EmptySpeakerCircle from "con/components/speakers/EmptySpeakerCircle";
import SpeakerItem from "./SpeakerItem";
import { Speaker } from "con/types";

interface SpeakerListProps {
  speakers: Speaker[];
}

const SpeakerList = ({ speakers }: SpeakerListProps) => {
  return (
    <div className="flex flew-wrap justify-center">
      {0 === speakers.length ? (
        <>
          <div className="p-4 flex hoverable">
            <EmptySpeakerCircle index={1} />
          </div>
          <div className="p-4 flex hoverable">
            <EmptySpeakerCircle index={2} />
          </div>
          <div className="p-4 flex hoverable">
            <EmptySpeakerCircle index={3} />
          </div>
        </>
      ) : (
        <div className="flex flex-wrap justify-center pt-6 pb-36">
          {speakers.map((speaker) => (
            <div
              className="p-4 mt-8 w-full sm:w-1/2 lg:w-1/3"
              key={speaker.name}
            >
              <SpeakerItem speaker={speaker} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpeakerList;
