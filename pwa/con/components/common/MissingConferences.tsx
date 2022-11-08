import React from 'react';
import Section from 'con/components/common/Section';
import SectionTitle from 'con/components/common/SectionTitle';
import SectionSubTitle from './SectionSubtitle';
import Button from './Button';

const MissingConferences: React.ComponentType = () => {
  return (
    <Section className="py-5 relative overflow-hidden" section="missing">
      <div className="container text-center">
        <SectionTitle dark>
          <strong>Not registered in 2022?</strong>
        </SectionTitle>
        <SectionSubTitle dark>
          Watch the conference recordings on Youtube!
        </SectionSubTitle>
        <Button to="https://www.youtube.com/playlist?list=PL3hoUDjLa7eSo7-CAyiirYfhJe4h_Wxs4" external>
          Watch the conferences
        </Button>
      </div>
    </Section>
  );
};

export default MissingConferences;
