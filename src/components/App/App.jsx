import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ImageField from '../ImageField/ImageField';
import axios from 'axios';
import { useState, useEffect} from 'react';

function App() {
    let [imageList, setImageList] = useState([]);

    useEffect(() => {
      getImages()
  }, []);
    
    const getImages=()=>{
      axios({
        method: 'GET',
        url: '/gallery',
      })
        .then((response)=>{
          setImageList(response.data)
        })
        .catch(err=>{
          console.error('getting imagelist failed', err)
        })
    }

    return (
      <div className="App">
        <Header />
        <ImageField imageList={imageList}/>
      </div>
    );
}

export default App;
