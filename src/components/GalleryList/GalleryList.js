import GalleryItem from "../GalleryItems/GalleryItems";

function GalleryList({imageList, getImages}){
    // console.log('imagelistingallerylist', imageList);
    return(
        <>
            
            <ul className='imageField'>
                {/* 
                    should have imagelist.map and inside call <imageList>
                */}
                {/* 
                    {imageList.map((galleryItem)=>(                       
                            <GalleryItems key={image.id} galleryItem={galleryItem}/>                
                    ))}
                */}
                {/* loop through imagelist and call galleryItem I moved this here 
                since I had an extra layer into and then past galleryItem */}
                {imageList.map((image)=>(
                    <GalleryItem
                    image={image}
                    imageList={imageList}
                    getImages={getImages}
                    />
                ))}

                {/* <GalleryItem 
                imageList={imageList}
                getImages={getImages}
                /> */}
            </ul>
        </>
    );
}

export default GalleryList