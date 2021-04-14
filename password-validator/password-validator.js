// make sure password length is at least 8 characters
let checkPasswordLength = () => {
  if (document.getElementById("input1").value.length < 8) {
    return false;
  }

  return true;
};

let checkPasswordsMatch = () => {
  if (document.getElementById("input1").value === document.getElementById("input2").value) {
    return true;
  } else {
    return false;
  }
};


let validatePassword = () => {
  let errorParagraph = "";
  if (!checkPasswordLength()) {
    errorParagraph = "<p class='error'>Please give a password that is at least 8 characters long</p>";
    document.body.innerHTML += errorParagraph;
  } else if (!checkPasswordsMatch()) {
    errorParagraph = "<p class='error'>Your passwords do not match</p>";
    document.body.innerHTML += errorParagraph;
  }
};
