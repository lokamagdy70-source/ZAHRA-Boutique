// //nav
let navbar = document.querySelector(".navbar")
window.onscroll = function(){
    if(window.scrollY > 50){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
}

/// dark mod
 
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


let menuToggle = document.querySelector(".menu-toggle")
let navLinks = document.querySelector(".nav-links")
menuToggle.onclick = function(){
    navLinks.classList.toggle("active")
}


let items = document.querySelectorAll(
    " .Your-inf,.checkout-content, .title ,.Bouquet"
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



// 
let PlaceOrder = document.getElementById("PlaceOrder")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let address = document.getElementById("address")
let OrderBtn = document.getElementById("OrderBtn")


OrderBtn.onclick = function (event) {

     event.preventDefault();
    
    if (firstName.value == "") {
        PlaceOrder.textContent = "Enter your first name";
        PlaceOrder.style.color = "red"
    }else if(lastName.value == "") {
        PlaceOrder.textContent = "Enter your last name";
                PlaceOrder.style.color = "red"
    }else if(email.value == "") {
        PlaceOrder.textContent = "Enter your email";
                PlaceOrder.style.color = "red"
    }else if(phone.value == "") {
        PlaceOrder.textContent = "Enter your phone number";
                PlaceOrder.style.color = "red"
    }else if(address.value == "") {
        PlaceOrder.textContent = "Enter your address";
                PlaceOrder.style.color = "red"
            }
else{
    PlaceOrder.textContent = "Your order has been checked successfully!";
            PlaceOrder.style.color = "green"
            firstName.textContent == ""
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            phone.value = "";
            address.value = "";
}

}