import React from "react";
import Head from "next/head";
import Layout from "con/components/2022/Layout";
import { TITLE } from "con/data/meta";
import SectionTitle from "con/components/common/SectionTitle";
import { getAllSpeakerSlugs, getSpeakerData } from "con/utils";

const Speaker = ({ speakerData }) => {
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
      <div className="container flex flex-col items-center pt-10 sm:pt-20">
        <div className="text-white">
          <SectionTitle h1 dark>
            Meet our <strong>speakers</strong>
          </SectionTitle>
          <p className="text-2xl pt-2 pb-8">
            Join international speakers sharing their knowledge on English and
            French-speaking tracks.
          </p>
        </div>
        <div>
          <p>{speakerData.slug}</p>
        </div>
      </div>
    </Layout>
  );
};


export const getStaticProps = async ({ params: { slug }}) => {
  const speakerData = await getSpeakerData("2022", slug);
  return { props: { speakerData, slug } };
};

export const getStaticPaths = async () => {
  const paths = await getAllSpeakerSlugs("2022");
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export default Speaker;
