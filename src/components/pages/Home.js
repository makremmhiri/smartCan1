import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  const scrollToCards = () => {
    const cardsSection = document.getElementById('get_started');
    cardsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    footerSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <HeroSection scrollToCards={scrollToCards} scrollToFooter={scrollToFooter}/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
