import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';

const FindABand = () => {
  return (
    <Layout
      title="Find a Band."
      description="Find a band with BandHQ, search musicians wanted ads, find local musicians by location, genre or similar bands."
    >
      <Hero
        title="Find a band and connect with local musicians."
        subTitle="Find a band by location, what musicians are wanted, genre or similar bands."
        small
      />

      <ProjectList />
    </Layout>
  );
};

export default FindABand;
