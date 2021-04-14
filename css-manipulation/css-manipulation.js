let paragraph, red, green, blue, width;

let changeBorder = () => {
  paragraph = document.getElementById("paragraph");
  red = document.getElementById("red").value;
  green = document.getElementById("green").value;
  blue = document.getElementById("blue").value;
  width = document.getElementById("width").value;
  console.log(width);
  paragraph.style.borderColor = "rgb(" + red + ", "+ green + ", " + blue + ")";
  paragraph.style.borderWidth = width + "px";
};

let changeBackground = () => {
  paragraph = document.getElementById("paragraph");
  red = document.getElementById("red-2").value;
  green = document.getElementById("green-2").value;
  blue = document.getElementById("blue-2").value;
  width = document.getElementById("width-2").value;
  console.log(width);
  paragraph.style.backgroundColor = "rgb(" + red + ", "+ green + ", " + blue + ")";
  paragraph.style.backgroundSize = width + "px";
};

let changeCSS = () => {
  changeBorder();
  changeBackground();
};
