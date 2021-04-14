// make sure password length is at least 8 characters
let checkPasswordLength = () => {
  if (document.getElementById("input1").innerText.length < 8) {
    return false;
  }

  return true;
};


let validatePassword = () => {
  if (!checkPasswordLength()) {
    document.body.innerHTML += "<p class='error'>Please give a password that is at least 8 characters long</p>";
  }
};
