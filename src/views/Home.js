import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SplitContent from '../components/SplitContent';
import ProjectList from '../components/ProjectList';
import SecontionHeader from '../components/SecontionHeader';
import SignupCTA from '../components/SignupCTA';

import homeImage1 from '../assets/home-image-1.png';
import homeImage2 from '../assets/home-image-2.png';
import homeImage3 from '../assets/home-image-3.png';
import homeImage4 from '../assets/home-image-4.png';

const Home = () => {
  return (
    <Layout
      title="Collaboration App for Musicians."
      description="BandHQ is an app where you can find a band, connect with musicians, collaborate on new tracks and keep track of your band’s events."
    >
      <Hero
        title="Find your next band with BandHQ."
        subTitle="Find a band, connect with musicians, collaborate on new tracks and keep on top of your band’s events."
        action={{
          label: 'Find a band',
          to: '/find-a-band',
        }}
      />

      <ProjectList />

      <SecontionHeader
        title="What is BandHQ?"
        text="BandHQ is a collection of tools created to help musicians find a band, collaborate on new tracks and keep on top of their band schedules"
      />

      <SplitContent image={homeImage1} title="Find band members" reverse>
        <>
          <p>
            Create a new project on BandHQ and add a genre, location, reference
            points, SoundCloud links and Spotify playlists so that you can find
            band members near you.
          </p>

          <p>
            You can even specify which musicians you need to complete your
            perfect line-up.
          </p>
        </>
      </SplitContent>

      <SplitContent image={homeImage2} title="Find a band">
        <>
          <p>
            If you’re looking to find a new or more established band, you can
            search for projects. If you find something you like, you can chat
            through the app and get inspired.
          </p>

          <p>
            Once you’ve found the perfect fit for you, you can add people to
            your project and start collaborating.
          </p>
        </>
      </SplitContent>

      <SplitContent
        image={homeImage3}
        title="Collaborate on new tracks"
        reverse
      >
        <>
          <p>
            Have an idea with your new band? Create a track and upload private
            demo links, lyrics and notes to allow your bandmates to comment,
            collaborate and keep track of all your ideas.
          </p>

          <p>
            Group them into releases to start planning your next record or set.
          </p>
        </>
      </SplitContent>

      <SplitContent image={homeImage4} title="Keep on top of band events" last>
        <>
          <p>
            Add rehearsals, studio time and gigs to a shared project calendar to
            keep track of your band commitments over multiple projects.
          </p>

          <p>
            This integrates into Google Calendar to keep everyone in the loop.
          </p>
        </>
      </SplitContent>

      <SignupCTA />
    </Layout>
  );
};

export default Home;
