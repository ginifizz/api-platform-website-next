import React from 'react';
import EmptySpeakerCircle from "con/components/speakers/EmptySpeakerCircle";
import SpeakerCircle from "con/components/speakers/SpeakerCircle";
import { Speaker } from 'con/types';

interface SpeakerListProps {
  speakers: Speaker[];
}

const SpeakerList: React.ComponentType<SpeakerListProps> = ({speakers}) => {

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
        speakers.map((speaker) => (
          <div className="p-4 flex" key={speaker.name}>

          </div>
        ))
      )}
    </div>
  );
};

export default SpeakerList;
