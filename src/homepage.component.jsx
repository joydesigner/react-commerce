import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>hats</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>jackets</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>sneakers</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>womens</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>mens</h1>
          <span className='subtitle'>shop now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;