import GalleryItem from "../GalleryItems/GalleryItems";

function GalleryList({imageList, setImageList, getImages}){
    // console.log('imagelistingallerylist', imageList);
    return(
        <>
            <h3>Gallery goes here</h3>

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