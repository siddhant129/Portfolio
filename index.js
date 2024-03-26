// For Tab-links

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabName) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (content of tabcontents) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// For side menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-150px";
}

// For contact form
const msg = document.getElementById("msg");
const form = document.forms["submit-to-google-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.innerHTML = "Message sent successfully";
  setTimeout(function () {
    msg.innerHTML = "";
  }, 5000);
  form.reset();
});

const jobTitle = document.getElementById("jobTitle");

let titleText = jobTitle.innerText;
const backVar = "Backend Developer ";
const webVar = "Web Developer ";
let newTitle = titleText;
let currentTitle = webVar;
let flag = 0;

setInterval(() => {
  let ttitleLen = newTitle.length;
  if (ttitleLen >= 1 && flag === 0) {
    newTitle = newTitle.substring(0, ttitleLen - 1);
    let newTitle1 = newTitle.concat("|");
    jobTitle.innerHTML = newTitle1;
    if (ttitleLen === 1 && currentTitle === webVar) {
      flag = 1;
      currentTitle = backVar;
    } else if (ttitleLen === 1 && currentTitle === backVar) {
      flag = 1;
      currentTitle = webVar;
    }
  } else if (ttitleLen >= 0 && flag === 1) {
    if (newTitle.length <= titleText.length) {
      newTitle = currentTitle.substring(0, ttitleLen);
      newTitle = newTitle.concat("|");
      titleText = currentTitle;
      jobTitle.innerHTML = newTitle;
      if (ttitleLen === titleText.length) {
        flag = 0;
      }
    }
  }
}, 130);

// for animation
