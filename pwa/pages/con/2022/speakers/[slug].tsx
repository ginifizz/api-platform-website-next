import React from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "con/components/2022/Layout";
import { TITLE } from "con/data/meta";
import { getAllSpeakerSlugs, getSpeakerData } from "con/utils";
import { Speaker } from "con/types";
import SectionTitle from "con/components/common/SectionTitle";
import SpeakerImage from "con/components/speakers/SpeakerImage";
import SpeakerDescription from "con/components/speakers/SpeakerDescription";

interface SpeakerProps {
  speakerData: Speaker;
}

const Speaker = ({ speakerData }: SpeakerProps) => {
  const { company, github, twitter, job, name } = speakerData;
  const speakerImage = `/images/con/2022/speakers/${speakerData.id}.png`;

  return (
    <Layout logoAlwaysVisible>
      <Head>
        <title>{`${TITLE}: discover the speaker!`}</title>
        <meta property="og:title" content={`${TITLE}: discover the speaker!`} />
        <meta
          name="twitter:title"
          content={`${TITLE}: discover the speaker!`}
        />
      </Head>
      <div className="container max-w-7xl flex flex-col items-center pt-10 | sm:pt-20">
        <div className="text-white pt-7 pb-14">
          <SectionTitle h1 dark titleFatWeight>
            {name}
          </SectionTitle>
          <div className="w-20 mb-7 mx-auto border-2 border-blue rounded-full" />
          <p className="text-xl text-center uppercase font-light">
            {`${job} @ `}
            <span className="font-normal">{company}</span>
          </p>
        </div>
        <div className="flex flex-col items-center bg-white px-10 py-10 | lg:flex-row sm:py-20">
          <div className="w-72 h-72 | lg:w-80 lg:h-80 | xl:w-96 xl:h-96">
            <SpeakerImage image={speakerImage} />
          </div>
          <div className="w-2/3">
            <SpeakerDescription speaker={speakerData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const speakerData = await getSpeakerData("2022", slug);
  return { props: { speakerData, slug } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllSpeakerSlugs("2022");
  return {
    paths,
    fallback: false,
  };
};

export default Speaker;
