import GalleryItem from "../GalleryItems/GalleryItems";

function GalleryList({imageList, setImageList, getImages}){
    // console.log('imagelistingallerylist', imageList);
    return(
        <>
            
            <section className='imageField'>
                <GalleryItem 
                setImageList={setImageList}
                imageList={imageList}
                getImages={getImages}
                />
            </section>
        </>
    );
}

export default GalleryList