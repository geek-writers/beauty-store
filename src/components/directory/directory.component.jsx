import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          title:'Body',
          img: 'https://i.ibb.co/8b5zfbs/8-content-writing-tips-for-a-full-body-massage-spa.jpg',
          id: 1
        },
        {
          title:'Hands',
          img: 'https://i.ibb.co/G5QH9B3/french-manicure.jpg',
          id: 2
        },
        {
          title:'Legs',
          img: 'https://i.ibb.co/HzWXP4d/what-is-a-pedicure-what-does-a-pedicure-feel-like.png',
          id: 3
        },
        {
          title:'Hairs',
          img: 'https://i.ibb.co/4JmfJ41/moroccan-oil-hair-spa-at-myglamm-gallery-large-1489407067.jpg',
          id: 4
        },
        {
          title:'Face',
          img: 'https://i.ibb.co/9tCZBnS/how-often-should-you-get-a-facial-lede.jpg',
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className = 'directory-menu'>
      {
        this.state.data.map(({title,img,id}) => (
          <MenuItem key={id} title={title} image = {img}/>
        ))
      }
      </div>
    )
  }
}

export default Directory;
