import React from 'react';
import Link from "next/link";
import Image from "next/image";
import ConfContext from "con/contexts/ConfContext";
import PictureGallery from 'con/components/common/PictureGallery';
import Section from 'con/components/common/Section';
import SectionTitle from 'con/components/common/SectionTitle';
import SectionSubTitle from './SectionSubtitle';

const LastEdition: React.ComponentType<{edition: string, link: string}> = ({edition, link}) => {
  return (
    <Section className="bg-white overflow-hidden relative pb-10" section="lastyear">
      <div className="container">
        <SectionTitle>
          What happened <strong>last year</strong>
        </SectionTitle>
        <SectionSubTitle>
          {`Take a look at the ${edition} edition and find more information on `}
          <Link href={`/con/${edition}/review`}>
            <a className="text-blue-dark font-bold transition-colors hover:text-blue">our review</a>
          </Link>
        </SectionSubTitle>
      </div>
      <PictureGallery link={link}>
        {[...Array(6)].map((x, i) => (
          <Image
            layout="fill"
            objectFit="cover"
            alt=""
            key={`pic${i}`}
            src={`/images/con/${edition}/pic-0${i + 1}.jpg`}
          />
        ))}
      </PictureGallery>
    </Section>
  );
};

export default LastEdition;
