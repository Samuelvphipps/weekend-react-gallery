import './GalleryItems.css';
import { useState } from 'react';
import axios from 'axios';
function GalleryItem({imageList, getImages}){
    // console.log('imageList:', imageList);
  
    const setState=(evt)=>{

        console.log('in setstate fn');
        let photoId=evt.target.id;
        console.log(evt.target.id);
        axios.put(`/gallery/clicked/${photoId}`)
            .then(response=>{
                console.log(response);
                getImages()
            })
            .catch(err=>{
                console.error('in put clicked error', err)
            });

    };

    // const upVot=()=>{
    //     axios({
    //         method: 'PUT'
    //     })
    // }

    
  

    return(
        imageList.map((image)=>{
            return (
                <div className='image' key={image.id}>
                    <div  className='picture'>
                        <img className="active" onClick={setState} id={image.id} alt={image.description} src={image.path}/>
                    </div>
                    <button id={image.id} className="loveBtn">Love it!</button>
                    <p>❤️ {image.votecount} people love this! ❤️</p>
                </div>
                )}))};

export default GalleryItem