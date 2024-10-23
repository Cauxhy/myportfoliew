import React from 'react';
import HomeComponent from './homeContent';
import Head from './Head';

const Home = () => {
  return (
    <div>
       <Head />
      <HomeComponent /> {/* Use the HomeComponent here */}
    </div>
  );
};

export default Home;
