[ X]add some images to the public/images
[ X]modify the server/modules/data.js to include
    [ ]id
    [ ]title
    [ ]description
    [ ]pathFor

[ X]install nodemon
[ X]npm install
[ X]npm run client/server

[ X]create components
    [X ] gallery list
    [ X] gallery item

[ X]- Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.

[ X]- Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
   
[ X]- Iterate (loop over) the list of gallery data

[ X]- Make GalleryItems

[ X]- Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 

[ X]- Update the `GalleryList` to use this component to display an image.

[ X]- Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).

[X ]- Display the number likes for each item and include a like button.

[X ]- When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.

[ X]- Update the gallery each time a like button is clicked.
