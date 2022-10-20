[ ]add some images to the public/images
[ ]modify the server/modules/data.js to include
    [ ]id
    [ ]title
    [ ]description
    [ ]pathFor

[ ]install nodemon
[ ]npm install
[ ]npm run client/server

[ ]create components
    [ ] gallery list
    [ ] gallery item

[ ]- Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.

[ ]- Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
   
[ ]- Iterate (loop over) the list of gallery data

[ ]- Make GalleryItems

[ ]- Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 

[ ]- Update the `GalleryList` to use this component to display an image.

[ ]- Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).

[ ]- Display the number likes for each item and include a like button.

[ ]- When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.

[ ]- Update the gallery each time a like button is clicked.