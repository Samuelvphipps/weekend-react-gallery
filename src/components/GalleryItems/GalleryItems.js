import './GalleryItems.css';
import { useState } from 'react';
// import Toggle from '../Toggle/Toggle';
import axios from 'axios';

function GalleryItem({imageList, getImages, image}){
    console.log('imageList:', imageList);

    //local state to track if boolean is true or not for the conditional render
    const [active, setActive] = useState(true);

    //Put call to upvote and rerender
    const upVote=(evt)=>{
        let id=evt.target.id;
        //send event to server
        axios({
            method: 'PUT',
            url: `gallery/like/${id}`
        })
            .then((response)=>{
                console.log(response);
                //re render and call updated server state
                getImages();
                // console.log(response.data)
            })
            .catch(err=>{
                console.error('in put error likes')
            });
    };

            return (  /// 
                <li className='image' key={image.id}>
                        {/* conditional render for image or description*/}
                        <div  onClick={()=>setActive(!active)} className="toggleWrapper picture" >
                            {/* added conditional here during live solve. */}
                            {active ? 
                            (<img className="active" id={image.id}  alt={image.description} src={image.path}/>) 
                            :  
                            (<h4 className="inactive">{image.description}</h4>)}
                        </div>
                        {/* edan calls the function that lives all the way at app.js */}
                        {/* edan calls an inline with an id parameter onClick={()=>onLike(image.id)} */}
                        {/*                 must put a function to pass.  if you call it directly it goes nuts*/}
                        {/*                         if onClick={function()} ▶️ undefined/loop   */}
                                            {/* //on click run upvote function */}
                    <button id={image.id} onClick={upVote}  className="loveBtn">Love it!</button>
                                    {/* Conditional render for number of likes moved here from the original toggle 
                                    to keep things more concise as I previously over-refactored
                                    fixed after live solve*/}
                    {image.likes===0 ? <p className="imageLikes">Noone loves this 😦</p> :
                    <p className="imageLikes">❤️ {image.likes} people love this! ❤️</p>}
                </li>
                )};

export default GalleryItem