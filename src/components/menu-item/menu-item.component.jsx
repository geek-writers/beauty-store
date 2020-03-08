import React from 'react';

import './menu-items.styles.scss';
const MenuItem = ({title,image}) => (
    <div style={{
      backgroundImage: `url(${image})`
    }} className = 'menu-item'>
      <div className = 'content'>
        <h1 className = 'title'>{title}</h1>
        <span className = 'subtitle'>BOOK NOW!!!</span>
      </div>
    </div>
);

export default MenuItem;
