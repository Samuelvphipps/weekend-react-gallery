import './GalleryItems.css';
import { useState } from 'react';
import axios from 'axios';
function GalleryItem({imageList, getImages}){
    // console.log('imageList:', imageList);
  
    const setState=(evt)=>{
        let photoId=evt.target.id;
        console.log(evt.target.id);
        axios({
            method: 'PUT',
            url: `/gallery/clicked/${photoId}`
        })
            .then((response)=>{
                // console.log(response)
                getImages()
            })
            .catch(err=>{
                console.error('in clickedGET', err);
            });
    };


    const [voteCount, setVoteCount] = useState(0)
    
  

    return(
        imageList.map((image)=>{
            return (
                <div className='image' key={image.id}>
                    <div  className='picture'>
                        <img className="active" onClick={setState} id={image.id} alt={image.description} src={image.path}/>
                    </div>
                    <button id="image.id" className="loveBtn">Love it!</button>
                    <p>❤️ {voteCount} people love this! ❤️</p>
                </div>
                )}))};

export default GalleryItem