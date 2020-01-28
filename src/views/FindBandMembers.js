import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';

const FindBandMembers = () => {
  return (
    <Layout
      title="Find Band Members"
      description="Find Band Members and start a new band, find local musicians by location, genre or similar bands."
    >
      <Hero
        title="Find Band Members"
        subTitle="Find a band members by location, genre or similar bands."
        small
      />

      <ProjectList />
    </Layout>
  );
};

export default FindBandMembers;
