import Image from "../Image/Image";

function ImageField({imageList}){
    return(
        <>
            <h3>Gallery goes here</h3>

            <section className='imageField'>
                <Image imageList={imageList}/>
            </section>
        </>
    );
}

export default ImageField