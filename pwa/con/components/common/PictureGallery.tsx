import React, { PropsWithChildren } from "react";
import AnimatedPictureImage from "con/components/common/AnimatedPictureImage";
import Button from "con/components/common/Button";

interface PictureGalleryProps extends PropsWithChildren {
  link?: string;
  className?: string;
}

const PictureGallery: React.ComponentType<PictureGalleryProps> = ({
  link,
  children,
  className = "",
}) => {
  return (
    <section className={`bg-white relative ${className}`}>
      <div className="container text-center">
        <div className="grid grid-cols-2 gap-8 | lg:grid-cols-3">
          {React.Children.map(children, (child) => (
            <AnimatedPictureImage>{child}</AnimatedPictureImage>
          ))}
        </div>
        {link ? (
          <Button className="mt-5" empty external to={link}>
            See more pics on Flickr
          </Button>
        ) : null}
      </div>
    </section>
  );
};

export default PictureGallery;
