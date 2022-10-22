import './GalleryItems.css';
import { useState } from 'react';
function GalleryItem({imageList, getImages, setImageList}){
    // console.log('imageList:', imageList);

  

    // const setState=(evt)=>{
    //     let photoId=evt.target.id;
    
    //     let newArray=imageList
    //     // newArray[photoId-1].clicked = false
    //     console.log(newArray);
    //     if(newArray[photoId-1].clicked === false){
    //         newArray[photoId-1].clicked = true;
    //     }
    //     else{newArray[photoId-1].clicked=false};
    //     setImageList(newArray);
    //     getImages();
    // };
        
    
    return(
        imageList.map((image)=>{
            return (
                <div className='image' key={image.id}>
                    <div  className='picture'>
                        <img className="active"  id={image.id} alt={image.description} src={image.path}/>
                    </div>
                    <button id="image.id" className="loveBtn">Love it!</button>
                    <p>❤️ {image.likes} people love this! ❤️</p>
                </div>
                )}))};

export default GalleryItem