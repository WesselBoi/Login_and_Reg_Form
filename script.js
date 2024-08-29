let login = document.querySelector(".login");
let register = document.querySelector(".register");
let checkMaterial = document.querySelector(".CheckBoxText");
let inputs = document.querySelector(".inputs");
let button=document.querySelector(".submit")


register.addEventListener("click", () => {
  if (!document.getElementById("email")) {
    const email = document.createElement("input");
    email.type = "email";
    email.id = "email";
    email.placeholder = "Email";
    email.required = true;
    inputs.prepend(email);
  }
  register.style.backgroundColor="gray"
  login.style.backgroundColor="#efefef"

  checkMaterial.innerHTML="I agree to the Terms and Conditions"
  button.innerHTML="Register"
});

login.addEventListener("click", () => {
  inputs.removeChild(email);
  register.style.backgroundColor="#efefef"
  login.style.backgroundColor="gray"
  checkMaterial.innerHTML="Remember Password"
  button.innerHTML="Log In"
});

