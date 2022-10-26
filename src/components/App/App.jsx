import React from 'react';
import './App.css';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import { useState, useEffect} from 'react';

function App() {

    //local state to track array
    const [imageList, setImageList] = useState([]);    

    //renders on page load
    useEffect(() => {
      getImages()

  }, []);
    
    //Get state from server and set local state using setImageList
    const getImages=()=>{
      axios({
        method: 'GET',
        url: '/gallery',
      })
        .then((response)=>{

          console.log(response.data);
          // make state equal to array from server
          setImageList(response.data)
        })
        .catch(err=>{
            
          console.error('getting imagelist failed', err)
        })
    }


    //Edan put onlike event function here and passed it through as props to the items

    //DOM rendering
    return (
      <div className="App">
        {/* call header component */}
        <Header />
        {/* call GalleryList component */}
        <GalleryList 
        // pass image list and getimages function via props
        imageList={imageList}
        getImages={getImages}
        />
      </div>
    );
}

export default App;
