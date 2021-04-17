// make sure password length is at least 8 characters
let checkPasswordLength = () => {
  if (document.getElementById("input1").value.length < 8) {
    return false;
  }

  return true;
};

// make sure passwords match
let checkPasswordsMatch = () => {
  if (document.getElementById("input1").value === document.getElementById("input2").value) {
    return true;
  } else {
    return false;
  }
};


// function that is called when the button is clicked
let validatePassword = () => {
  let errorParagraph = "";
  if (!checkPasswordLength()) {
    errorParagraph = "Please give a password that is at least 8 characters long";
    document.querySelector(".error").innerHTML = errorParagraph;
  } else if (!checkPasswordsMatch()) {
    errorParagraph = "Your passwords do not match";
    document.querySelector(".error").innerHTML = errorParagraph;
  }
};
