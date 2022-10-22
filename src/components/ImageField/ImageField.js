function ImageField(){
    return(
        <>
            <h3>Gallery goes here</h3>
            <section className='imageField'>
            <div className='image'>
                <img src="images/goat_small.jpg"/>
                <button className="loveBtn">Love it!</button>
                <p>17 people lobe this!</p>
            </div>
            </section>
        </>
    );
}

export default ImageField