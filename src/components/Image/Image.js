import './Image.css';

function Image({imageList}){
    console.log('imageList:', imageList);
    return(
        imageList.map((image)=>{
            return (
                <div className='image' key={image.id}>
                    <div>
                        <img className="picture" src={image.path}/>
                    </div>

                    <button id="image.id" className="loveBtn">Love it!</button>
                    <p>❤️ {image.likes} people love this! ❤️</p>
                
                </div>)
        })
    );
};

export default Image