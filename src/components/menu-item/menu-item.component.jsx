import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => (
  <div className={`menu-item ${size ? size : ''}`} onClick={() => history.push(match.url + linkUrl)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div >
);

export default withRouter(MenuItem);