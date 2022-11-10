const userName = document.querySelector(".user");
const btn = document.querySelector(".btn");
const password = document.querySelector(".pass");
const icon = document.querySelector(".icon");
const iconUser = document.querySelector(".icon-user");
const  email = document.querySelector(".email")
const eyeIcon = document.querySelector(".div-icon")
const form = document.querySelector(".form")

console.log(form.style.width==="")

// if(!email){
//     console.log("work");
// }

console.log(email.pattern);

// console.log(password.getAttribute("type"));
let pass = "";

password.addEventListener("keyup", (event) => {
  pass = event.target.value;

  const isCorrectPass = () => {
    if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pass)) {
      return true;
    }
    return false;
  };

  let isTrue = isCorrectPass();

  if (isTrue) {
    btn.style.border = "2px solid #F8CB2E "
    icon.classList.remove("active");
    iconUser.classList.add("active");
    password.style.border = "1px solid green";
  } else if (!isTrue) {
    btn.style.border = "1px solid #C2070C"
    password.style.border = "1px solid #C2070C";
    icon.classList.add("active");
    iconUser.classList.remove("active");
  }
  if (pass === "") {
    password.style.border = "";
  }

  let position;
  btn.addEventListener("mouseover", function () {
    if (!isTrue && pass !== "" ) {
       
      position ? (position = 0) : (position = 120);
      btn.style.transform = `translate(${position}px,0px)`;
      btn.style.transition = "all 0.1s ease";
    } else {
      btn.style.transform = `translate(${0}px,0px)`;
    }
  });
});

eyeIcon.addEventListener("click",()=>{
    const type = password.getAttribute("type")==="password"?"type":"password"
    password.setAttribute("type",type)
})