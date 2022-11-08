import React, { PropsWithChildren } from 'react';
import useAnimation, { DirectionType } from 'con/hooks/useAnimation';

interface AnimatedPictureImageProps extends PropsWithChildren {
  direction?: DirectionType;
}

const AnimatedPictureImage: React.ComponentType<AnimatedPictureImageProps> = ({ direction = 'scale', children }) => {
  const animation = useAnimation(direction);
  return (
    <div className="w-full aspect-square relative" ref={animation}>
      {children}
    </div>
  );
};

export default AnimatedPictureImage;
