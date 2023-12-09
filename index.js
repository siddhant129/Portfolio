// For Tab-links

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-content")

function opentab(tabName) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (content of tabcontents) {
        content.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add('active-tab')
}


// For side menu
var sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right ="-150px"
}

// For contact form
const msg = document.getElementById("msg")
const form = document.forms['submit-to-google-form']

form.addEventListener('submit',e=>{
    e.preventDefault
    msg.innerHTML = 'Message sent successfully'
    setTimeout(function(){
        msg.innerHTML = '';

    },5000)
    form.reset()
})



const jobTitle = document.getElementById('jobTitle')

let titleText = jobTitle.innerText
console.log(titleText);

let newTitle = titleText
const flag = 1
setInterval(() => {
    let ttitleLen = newTitle.length
    if (ttitleLen >=1) {
        newTitle = newTitle.substring(0,ttitleLen-1)
        console.log(titleText);
        let newTitle1 = newTitle.concat('|')
        console.log(newTitle);
        jobTitle.innerHTML = newTitle1
    }
    else if(ttitleLen == 0){
        if (titleText === 'Web Developer |'){
            newTitle = 'Backend Developer |'
            titleText = 'Backend Developer |'
        }
        else{
            newTitle = 'Web Developer |'
            titleText = 'Web Developer |'
        }
    }

}, 300);

// for animation


