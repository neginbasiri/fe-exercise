import React from 'react';
import Banner from './Banner';
import FilteredListContainer from './FilteredList/FilteredListContainer';
import Footer from './Footer';

const Home = () => <div id="app">
  <Banner/>
  <FilteredListContainer/>
  <Footer/>
</div>;

export default Home;
