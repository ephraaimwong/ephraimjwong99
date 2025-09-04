const images = import.meta.glob('/src/assets/Carousel/*.{png,jpg,svg,jpeg,webp,JPG}', {eager: true});

const imagePaths = Object.values(images).map((image)=> image.default);

export default imagePaths;