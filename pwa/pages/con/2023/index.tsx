import React from 'react';
import { TITLE } from 'con/data/meta';
import Head from 'next/head';
import Layout from 'con/components/2023/Layout';
import Cover from 'con/components/common/Cover';
import ContactCard from 'con/components/common/ContactCard';
import LastEdition from 'con/components/common/LastEdition';
import MissingConferences from 'con/components/common/MissingConferences';
import SectionTitle from 'con/components/common/SectionTitle';
import SectionSubtitle from 'con/components/common/SectionSubtitle';
import SpeakerList from 'con/components/speakers/SpeakerList';

const Conf2023: React.ComponentType = () => {
  return (
    <Layout>
      <Head>
        <title>{`${TITLE}: meet the best API experts!`}</title>
        <meta
          property="og:title"
          content={`${TITLE}: meet the best API experts!`}
        />
        <meta
          name="twitter:title"
          content={`${TITLE}: meet the best API experts!`}
        />
      </Head>
      <Cover
        date="September 21 - 22, 2023 | Lille & online"
        baseline="Meet the best API experts at the only event dedicated to the API Platform framework and its ecosystem."
        button={
          <div>
            <a
              className="btn"
              href="mailto:events@les-tilleuls.coop?subject=I want to be a speaker!"
            >
              Become a speaker!
            </a>
          </div>
        }
      />
      <LastEdition
        link="https://flickr.com/photos/194052559@N02/albums/72177720302238684"
        edition="2022"
      />
      <MissingConferences />
      <section className="bg-white">
        <SectionTitle>
          Our <strong>speakers</strong>
        </SectionTitle>
        <SectionSubtitle>
          Our selected speakers will be revealed in 2023. Want to be part of
          them? <a
              className="text-blue-dark font-bold transition-colors hover:text-blue"
              href="mailto:events@les-tilleuls.coop?subject=I want to be a speaker!"
            >Contact us!</a>
        </SectionSubtitle>
        <SpeakerList speakers={[]}/>
      </section>
      <div className="pt-52">
        <ContactCard />
      </div>
    </Layout>
  );
};

export default Conf2023;
