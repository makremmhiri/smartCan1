import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection({ scrollToCards, scrollToFooter }) {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>BIENVENUE</h1>
      <p id='para'>La municipalité de Djerba, à Houmet Souk, protège 
      l'environnement et préserve le riche patrimoine de cette région 
      splendide.</p>
      
      <div className='hero-btns'>
        
        <Button
        onClick={scrollToCards}
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DETAILS
        </Button>
    
        <Button
        onClick={scrollToFooter}
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          CONTACT <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
