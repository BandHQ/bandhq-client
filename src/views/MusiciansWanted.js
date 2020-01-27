import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';

const MusiciansWanted = () => {
  return (
    <Layout
      title="Musicians Wanted"
      description="Search BandHQ musicians wanted ads, find local musicians by location, genre or similar bands."
    >
      <Hero
        title="Search Musicians Wanted adverts"
        subTitle="Find a musicians by location, genre or similar bands."
        small
      />

      <ProjectList />
    </Layout>
  );
};

export default MusiciansWanted;
