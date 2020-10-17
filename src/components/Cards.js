import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>JAKSEL CHECK BOSQUE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Explore the night life of Blok M'
              label='Night Life'
              path='/quiz1/hometown'
            />
            <CardItem
              src='images/img-me2.jpg'
              text='Say hello to the creator'
              label='Myself'
              path='/quiz1/profile'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-0.jpg'
              text='Enjoy South Jakarta Foodies! '
              label='Culinary'
              path='/quiz1/food'
            />
            <CardItem
              src='images/img-13.jpeg'
              text='See the beauty of South Jakarta at Night'
              label='Timelapse'
              path='/quiz1/tourist'
            />
            <CardItem
              src='images/img-tokyo.jpg'
              text='Click here to see my hometown!'
              label='Hangout'
              path='/quiz1/hometown'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;