1. Define a search bar that takes an input. On submit it sets the state of the search term.
2. When the search term is submitted, the app.js takes the term parameter and makes a request to the unsplash API. The API connection is managed in unsplash.js
3. The API returns 10 images which are rendered through imagelist.js. This component takes an array of images then renders these to the screen with .map(). The array of images is passed by the app.js component
4. The imagecard is a container for the images and handles css style and rendering.
