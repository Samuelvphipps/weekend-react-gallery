import './GalleryItems.css';
import { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import axios from 'axios';

function GalleryItem({imageList, getImages}){
    console.log('imageList:', imageList);

    const [active, setActive]=useState(false);

    const changeActive=()=>{

    }

    const upVote=(evt)=>{
        let id=evt.target.id;
        //send event to server
        axios({
            method: 'PUT',
            url: `gallery/like/${id}`
        })
            .then((response)=>{
                getImages();
            })
            .catch(err=>{
                console.error('in put error likes')
            });
    }

    
    return(
        imageList.map((image)=>{
            return (
                <div className='image' key={image.id}>
                    <Toggle image={image}/>
                    <button id={image.id} onClick={upVote} className="loveBtn">Love it!</button>
                    <p className="imageLikes">❤️ {image.likes} people love this! ❤️</p>
                </div>
                )}))};

export default GalleryItem