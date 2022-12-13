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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-6">
          {speakers.map((speaker) => (
            <div className="p-4 mt-8" key={speaker.name}>
              <SpeakerItem speaker={speaker} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpeakerList;
