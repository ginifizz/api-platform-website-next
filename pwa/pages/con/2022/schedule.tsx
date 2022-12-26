import React from "react";
import Layout from "con/components/2022/Layout";
import Head from "next/head";
import SectionTitle from "con/components/common/SectionTitle";
import ContactCard from "con/components/common/ContactCard";
import { GetStaticProps } from "next";
import { getAllConferences } from "con/utils";
import dayjs from "dayjs";
import extra from "con/data/2022/extraConferences";
import { Conference } from "con/types";
import ScheduleDay from "con/components/common/Schedule/ScheduleDay";

interface Schedule {
  conferences: Conference[];
}

const Schedule = ({ conferences }: Schedule) => {
  console.log(conferences);

  const days = [...conferences, ...(extra as any)].reduce((acc, conference) => {
    if (!acc[conference.date]) {
      acc[conference.date] = [];
    }
    acc[conference.date].push(conference);
    return acc;
  }, {});

  const sortedDays = Object.keys(days).sort((a, b) => {
    const date1 = dayjs(a);
    const date2 = dayjs(b);
    if (date1.isBefore(date2)) return -1;
    if (date1.isAfter(date2)) return 1;
    return 0;
  });

  console.log(sortedDays);

  return (
    <Layout logoAlwaysVisible>
      <Head>
        <title>Schedule</title>
        <meta property="og:title" content="Schedule" />
        <meta name="twitter:title" content="Schedule" />
      </Head>
      <div className="container flex flex-col items-center pt-10 | sm:pt-20">
        <SectionTitle h1 dark>
          Discover the <strong>schedule</strong>
        </SectionTitle>
        <div className="py-44">Page de test</div>
        <div className="schedule-page__content">
          {/* {sortedDays.map((key) => (
            <ScheduleDay key={key} date={key} conferences={days[key]} />
          ))} */}
        </div>
      </div>
      <div>
        <ContactCard />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const conferences = await getAllConferences("2022");
  return {
    props: {
      conferences,
    },
  };
};

export default Schedule;
