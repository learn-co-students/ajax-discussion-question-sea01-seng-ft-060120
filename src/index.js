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

  let { cell, dob, email, location, name, phone, picture } = json

  let img = document.getElementById('profile_picture')
  img.src = picture.medium

  let fullname = document.getElementById('fullname')
  fullname.textContent = `${name.first} ${name.last}`

  let e = document.getElementById('email')
  e.textContent = email

  let s = document.getElementById('street')
  s.textContent = location.street.name

  let c = document.getElementById('city')
  c.textContent = location.city

  let st = document.getElementById('state')
  st.textContent = location.state

  let p = document.getElementById('postcode')
  p.textContent = location.postcode

  let ph = document.getElementById('phone')
  ph.textContent = phone

  let cl = document.getElementById('cell')
  cl.textContent = cell

  let d = document.getElementById('date_of_birth')
  d.textContent = dob.date

}

let btn = document.querySelector('button')
btn.addEventListener('click', fetchInfo)