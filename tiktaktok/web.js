function myFunction1() {
  var signupform = document.getElementById("C2");
  var loginform = document.getElementById("C1");
  var signupbtn = document.getElementById("BTN1");
  var loginbtn = document.getElementById("BTN2");
  var logintxt = document.getElementById("TXT1");
  var signuptxt = document.getElementById("TXT2");

  if (signupform.style.display === "none") {
    signupform.style.display = "block";
    signuptxt.style.display = "block";
    logintxt.style.display = "none";
    signupbtn.style.display = "none";
    loginform.style.display = "none";
    loginbtn.style.display = "block";
  } else {
    signupform.style.display = "none";
    signupbtn.style.display = "block";
    loginform.style.display = "block";
    loginbtn.style.display = "none";
    signuptxt.style.display = "none";
    logintxt.style.display = "block";
  }
}

function myFunction2() {
  var signupform = document.getElementById("C2");
  var loginform = document.getElementById("C1");
  var signupbtn = document.getElementById("BTN1");
  var loginbtn = document.getElementById("BTN2");
  var logintxt = document.getElementById("TXT1");
  var signuptxt = document.getElementById("TXT2");

  if (loginform.style.display === "none") {
    signupform.style.display = "none";
    signupbtn.style.display = "block";
    loginform.style.display = "block";
    loginbtn.style.display = "none";
    signuptxt.style.display = "none";
    logintxt.style.display = "block";
  } else {
 signupform.style.display = "block";
    signupbtn.style.display = "none";
    loginform.style.display = "none";
    loginbtn.style.display = "block";
    signuptxt.style.display = "block";
    logintxt.style.display = "none";
  }
}