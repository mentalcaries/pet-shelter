import './Categories.css';
import catIcon from '../../images/cat-icon.png';
import dogIcon from '../../images/dog-icon.png';
import birdIcon from '../../images/bird-icon.png';
import bunnyIcon from '../../images/bunny-icon.png';
import spiderIcon from '../../images/spider-icon.png';

import React from 'react';

const Categories = ({ onSelection }: {onSelection: (name: string)=> void}) => {
  const categoryButtons = [
    { name: 'cats', image: catIcon, type: 'cat' },
    { name: 'dogs', image: dogIcon, type: 'dog' },
    { name: 'birds', image: birdIcon, type: 'bird' },
    { name: 'rabbits', image: bunnyIcon, type: 'rabbit' },
    { name: 'others', image: spiderIcon, type: 'other' },
  ];

  return (
    <div className="categories">
      {categoryButtons.map(({ name, image, type }, index) => (
        <button
          className="categories__button"
          value={name}
          key={index}
          onClick={() => onSelection(type)}
        >
          <img src={image} alt="" className="button__icon" />{' '}
          <p className="button__name">{name}</p>
        </button>
      ))}
    </div>
  );
};

export default Categories;
