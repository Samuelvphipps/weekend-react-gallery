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
                <GalleryItem 
                imageList={imageList}
                getImages={getImages}
                />
            </ul>
        </>
    );
}

export default GalleryList