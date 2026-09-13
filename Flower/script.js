// nav
let navbar = document.querySelector(".navbar")
window.onscroll = function(){
    if(window.scrollY > 50){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
}

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

let menuToggle = document.querySelector(".menu-toggle")
let navLinks = document.querySelector(".nav-links")
menuToggle.onclick = function(){
    navLinks.classList.toggle("active")
}


let items = document.querySelectorAll(
    ".title, .collections-filters, .collection-filter, .price-filter, .collections-products, .flower-card"
);

function showItems() {

    items.forEach(function(item) {
        if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add("show");
        }
    });
}
window.addEventListener("scroll", showItems);
showItems();


let textElements = document.querySelectorAll("p, span, h3");
let observer = new IntersectionObserver(function(en) {

    en.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("text-show");
            // observer.unobserve(entry.target);
        }

    });

});

textElements.forEach(function(element) {
    observer.observe(element);
});

// 
let seeMoreBtn = document.getElementById("seeMoreBtn");
let extraCards = document.querySelectorAll(".extra-card");

seeMoreBtn.addEventListener("click", function(){

    extraCards.forEach(function(ex){
        if(ex.classList.contains("extra-card")){
            ex.classList.remove("extra-card");
            // ex.classList.toggle("show");
        }else{
            ex.classList.add("extra-card");
        }

    });
// هل الباك موجود
    if(seeMoreBtn.classList.contains("back")){

        seeMoreBtn.classList.remove("back");
        seeMoreBtn.innerText = "See More";

    }else{

        seeMoreBtn.classList.add("back");
        seeMoreBtn.innerText = "Back";
    }
});



// ///////////////////////////////////////////
let inputColor = document.querySelectorAll('input[name="flower"]')
let inputPrice = document.querySelectorAll('input[name="price"]')
let cardsFlower = document.querySelectorAll(".flower-card")
// const cardsFlowers = document.querySelector(".flower-cards")
let forcolor = "";
let forprice = "";
inputColor.forEach(function(color){
    color.addEventListener("click",function(){
        forcolor= color.value ;
        filterCards()
        seeMoreBtn.style.display = "none";
    })
})
inputPrice.forEach(function(price){
    price.addEventListener("click", function(){
       forprice = price.value
        filterCards()
        seeMoreBtn.style.display = "none"
    })
})
function filterCards(){
    cardsFlower.forEach(function(card){
        let cardColor = card.dataset.flower
        let cardPrice = card.dataset.price
let colorMatch = forcolor == "" || forcolor.toLowerCase() == cardColor.toLowerCase()

let priceMatch = forprice == "" || forprice == cardPrice

        if(colorMatch && priceMatch){

            card.style.display = "block"

        }else{

            card.style.display = "none"

        }
    })
}

// //////////////////////////
function openProduct(card) {
    
    const id = card.dataset.id;

    window.location.href =
        "../Product-Details/index.html?id=" + id;
}