import React from "react";
import Head from "next/head";
import Layout from "con/components/2022/Layout";
import { TITLE } from "con/data/meta";
import SpeakerList from "con/components/speakers/SpeakerList";
import SectionTitle from "con/components/common/SectionTitle";
import { getAllSpeakerSlugs, getSpeakerData } from "con/utils";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import glob from "tiny-glob";
import matter from "gray-matter";

const Speaker = ({ paths, speakerData }) => {
  if (!paths) {
    <div className="container flex flex-col items-center pt-10 sm:pt-20">
      <p>Loading</p>
    </div>;
  }
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

export const getStaticProps = async ({ params }) => {
  const speakerData = await getSpeakerData("2022", params.slug);
  console.log("speakerData", speakerData);
  return { props: { speakerData } };
};

export const getStaticPaths = async () => {
  const paths = await getAllSpeakerSlugs("2022");
  console.log("paths", paths);
  return { paths, fallback: false };
};

export default Speaker;
