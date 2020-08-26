const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

});



const fetchInfo = () => {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(json => displayRandomUser(json.results[0]))
}

const displayRandomUser = (json) => {
  displayProfilePic(json.picture.medium)
}

const displayProfilePic = (src) => {
  const image = document.getElementById('profile_picture')
  image.src = src
}

let btn = document.querySelector('button')
btn.addEventListener('click', fetchInfo)