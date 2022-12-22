import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "con/components/2022/Layout";
import SpeakerList from "con/components/speakers/SpeakerList";
import SectionTitle from "con/components/common/SectionTitle";
import ContactCard from "con/components/common/ContactCard";
import { getAllSpeakers } from "con/utils";
import { TITLE } from "con/data/meta";
import { Speaker } from "con/types";
import { GetStaticProps } from "next";

interface Speakers {
  speakers: Speaker[];
}

const Speakers = ({ speakers }: Speakers) => {
  return (
    <Layout logoAlwaysVisible>
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
      <div className="container flex flex-col items-center pt-10 | sm:pt-20">
        <div className="text-white">
          <SectionTitle h1 dark>
            Meet our <strong>speakers</strong>
          </SectionTitle>
          <p className="text-2xl text-center pt-2 pb-8">
            Join international speakers sharing their knowledge on English and
            French-speaking tracks.
          </p>
        </div>
        <div>
          <SpeakerList speakers={speakers} />
        </div>
      </div>
      <div>
        <ContactCard />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const speakers = await getAllSpeakers("2022");
  return {
    props: {
      speakers,
    },
  };
};

export default Speakers;
