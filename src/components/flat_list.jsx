import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    flats.map((flat, index) => {
      return (
        <Flat
          key={index}
          index={index}
          name={flat.name}
          img={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          selected={flat.name === selectedFlat.name}
          selectFlat={selectFlat} />
        )
    })
  );
}

export default FlatList;
