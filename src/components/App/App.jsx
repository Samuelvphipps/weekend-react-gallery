import React from 'react';
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import { useState, useEffect} from 'react';

function App() {
    const [imageList, setImageList] = useState([]);    

    useEffect(() => {
      getImages()

  }, []);
    
    const getImages=()=>{
      axios({
        method: 'GET',
        url: '/gallery',
      })
        .then((response)=>{
          console.log(response.data);
          setImageList(response.data)
        })
        .catch(err=>{
          console.error('getting imagelist failed', err)
        })
    }

    return (
      <div className="App">
        <Header />
        <GalleryList 
        setImageList={setImageList}
        imageList={imageList}
        getImages={getImages}
        />
      </div>
    );
}

export default App;
