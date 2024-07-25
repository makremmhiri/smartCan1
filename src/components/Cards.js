import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
function Cards() {
  return (
    <div className='cards' id='get_started'>
      <h1 >Découvrez nos NOUVELLES MISES À JOUR !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-10.png'
              text='carte qui coordonne chaque poubelle à houmt el souk'
              label='NEW'
              path='/Gglmap'
            />
            <CardItem
              src='images/img-11.png'
              text='rapport sur chaque poubelle à houmt souk'
              label='NEW'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
