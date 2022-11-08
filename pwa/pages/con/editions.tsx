import React from 'react';
import navData from "con/data/nav";
import Layout from "con/components/layout";
import SectionTitle from "con/components/common/SectionTitle";
import { previousEditions } from "con/data/editions";
import EditionCard from 'con/components/editions/EditionCard';
import ContactCard from 'con/components/common/ContactCard';
import SectionSubTitle from 'con/components/common/SectionSubtitle';

const footer = [
  {
    title: "Previous editions",
    links: previousEditions.map((edition) => ({
      title: `${edition.year} edition`,
      link: `/con/${edition.year}`,
    })),
  },
];

const Editions = () => (
  <Layout nav={navData} footer={footer} logoAlwaysVisible>
    <>
        <div className="container pt-20 pb-52">
          <div className="speakers__header">
            <SectionTitle h1 dark>
              What happened <strong>last few years</strong>?
            </SectionTitle>
            <SectionSubTitle dark>{`Re-discover our ${previousEditions.length} previous editions`}</SectionSubTitle>
          </div>
          <div className="flex flex-row items-center justify-center mx-auto pb-200 gap-x-6">
            {previousEditions.map((edition) => (
              <EditionCard
                key={edition.year}
                withEditionTitle
                size="big"
                edition={edition}
              />
            ))}
          </div>
        </div>
      <ContactCard />
    </>
  </Layout>
);

export default Editions;
