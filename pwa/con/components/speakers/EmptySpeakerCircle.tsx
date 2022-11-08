import React from 'react';
import Image from 'next/image';
import SpeakerImage from './SpeakerImage';

interface EmptySpeakerCircleProps {
  index: 1 | 2 | 3;
}

const EmptySpeakerCircle: React.ComponentType<EmptySpeakerCircleProps> = ({ index }) => {
  return (
    <div className="font-raleway text-base leading-snug">
      <div className="text-center flex items-center justify-center flex-col group">
        <div className="w-60 h-60">
          <SpeakerImage image={`/images/con/empty-speaker${index}.svg`} />
        </div>
        <div className="infos">
          <h3 className="h5 lined">Coming soon</h3>
        </div>
      </div>
    </div>
  );
};

export default EmptySpeakerCircle;
