import React from 'react';
import './homepage.styles.scss'
function HomePage() {
  return (
    <div className = 'homepage'>
      <div className = 'directory-menu'>
        <div className = 'menu-item'>
          <div className = 'content'>
            <h1 className = 'title'>Body</h1>
            <span className = 'subtitle'>BOOK NOW!!!</span>
          </div>
        </div>
        <div className = 'menu-item'>
          <div className = 'content'>
            <h1 className = 'title'>Hands</h1>
            <span className = 'subtitle'>BOOK NOW!!!</span>
          </div>
        </div>
        <div className = 'menu-item'>
          <div className = 'content'>
            <h1 className = 'title'>Legs</h1>
            <span className = 'subtitle'>BOOK NOW!!!</span>
          </div>
        </div>
        <div className = 'menu-item'>
          <div className = 'content'>
            <h1 className = 'title'>Hairs</h1>
            <span className = 'subtitle'>BOOK NOW!!!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
