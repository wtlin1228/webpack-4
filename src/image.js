const makeImage = (url, height = 100, weight = 100) => {
  const image = document.createElement("img");

  image.src = url;
  image.height = height;
  image.width = weight;
  return image;
};

export default makeImage;
