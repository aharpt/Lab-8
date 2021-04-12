let currentImageSrc;

// changes to previous image
let prevImage = () => {
  currentImageSrc = document.getElementById("img").getAttribute("src");
  if (currentImageSrc === "./img/image-1.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-4.jpg");
  } else if (currentImageSrc === "./img/image-2.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-1.jpg");
  } else if (currentImageSrc === "./img/image-3.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-2.jpg");
  } else if (currentImageSrc === "./img/image-4.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-3.jpg");
  }
};

// changes to next image
let nextImage = () => {
  currentImageSrc = document.getElementById("img").getAttribute("src");
  if (currentImageSrc === "./img/image-1.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-2.jpg");
  } else if (currentImageSrc === "./img/image-2.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-3.jpg");
  } else if (currentImageSrc === "./img/image-3.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-4.jpg");
  } else if (currentImageSrc === "./img/image-4.jpg") {
    document.getElementById("img").setAttribute("src", "./img/image-1.jpg");
  }
};
