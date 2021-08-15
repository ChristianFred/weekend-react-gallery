import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList';

function App() {

let [galleryList, setGalleryList] = useState([]);

useEffect(() => {
  getImages();
});

const getImages = () => {
  axios
    .get('/gallery')
    .then((response) => {
      setGalleryList(response.data);
    })
    .catch((error) => {
      alert('Could not get the gallery.');
      console.log('Error getting galleryList', error);
    });
};















    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList={galleryList}
        />
      </div>
    );
}

export default App;
