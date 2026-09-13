// nav
let navbar = document.querySelector(".navbar")
window.onscroll = function(){
    if(window.scrollY > 50){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
}

// ///////////////////
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = function () {
    navLinks.classList.toggle("active");
};
// dark mod

let darkMod = document.getElementById("darkModeBtn")
if(localStorage.getItem("darkMode")=== "on"){
    document.body.classList.add("dark")
}else{
    document.body.classList.remove("dark")
}

darkMod.onclick = function(){
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("darkMode", "on")
    }
    else{
        localStorage.setItem("darkMode" , "off")
    }
}
// ///////////////////////////////

let items = document.querySelectorAll(
    ".contact , .contact-info , .form-group, h2, h3"
);

function showItems() {

    items.forEach(function(item) {
        if (item.getBoundingClientRect().top < window.innerHeight) {

            item.classList.add("show");
        }
    });
}
window.addEventListener("scroll", showItems);
//شغل لما الصفحه تفتح
showItems();

// ايطار الخريطه 
let map = L.map("map").setView([27.25433, 33.81597], 16);
// الى جوه الخريطه
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    .addTo(map);

L.marker([27.25433, 33.81597])
    .addTo(map)
    .bindPopup("ZAHRA Flower Shop")
    .openPopup();


// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
let contactForm = document.getElementById("contactForm")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let message = document.getElementById("message")

let m = document.getElementById("m")
contactForm.onsubmit = function(event){
    event.preventDefault();
    if(firstName.value == ""){
    m.textContent = "Please enter your first name"
    m.style.color = "red"
    }else if(lastName.value == ""){
        m.textContent = "Please enter your last name";
    m.style.color = "red"
    }else if(email.value == ""){
        m.textContent =  "Please enter your email";
        m.style.color = "red"
    }else if(message.value == ""){
        m.textContent = "Please write your message";
        m.style.color = "red"
    }

    else{
        m.textContent = "Your message has been sent successfully!";
        m.style.color = "green"
         firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    }
}



