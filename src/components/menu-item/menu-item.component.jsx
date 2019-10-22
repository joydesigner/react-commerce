import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size }) => (
  <div className={`menu-item ${size ? size : ''}`}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div >
);

export default MenuItem;