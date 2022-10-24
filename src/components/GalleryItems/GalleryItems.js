import './GalleryItems.css';
import { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import axios from 'axios';

function GalleryItem({imageList, getImages}){
    console.log('imageList:', imageList);


    const upVote=(evt)=>{
        let id=evt.target.id;
        //send event to server
        axios({
            method: 'PUT',
            url: `gallery/like/${id}`
        })
            .then((response)=>{
                console.log(response);
                getImages();
                // console.log(response.data)
            })
            .catch(err=>{
                console.error('in put error likes')
            });
    };
    
    return(

       /*
            <li className='image'>
                <div> image  with toggle
                <div> button and p  (condition render this as no people love this or number people love this)
            </li>
       */

        imageList.map((image)=>{
            return (  /// 
                <li className='image' key={image.id}>
                    <Toggle image={image}/>
                    <button id={image.id} onClick={upVote} className="loveBtn">Love it!</button>
                    
                    {image.likes===0 ? <p className="imageLikes">Noone loves this 😦</p> :
                    <p className="imageLikes">❤️ {image.likes} people love this! ❤️</p>}

                </li>
                )}))};

export default GalleryItem