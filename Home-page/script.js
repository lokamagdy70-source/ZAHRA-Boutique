 //nav
let navbar = document.querySelector(".navbar");
window.onscroll = function(){
    if(window.scrollY > 50){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
}

//scroll animation
let items = document.querySelectorAll(
    ".how-it-works-item, .flower-card, .collection-card, .benefit, .join-content, p, span, h3, h2, button"
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

// responsive menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = function () {
    navLinks.classList.toggle("active");
};

// flower cards and arrows slider
let flowerItems = document.querySelectorAll(".flower-card");
let rightArrow = document.querySelector(".arrow-right");
let leftArrow = document.querySelector(".arrow-left");

let currentCard = 0;
function showCard() {
    if (flowerItems.length > 0 && flowerItems[currentCard]) {
        flowerItems[currentCard].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    }
}

if (rightArrow && leftArrow) {
    rightArrow.onclick = function () {
        currentCard++;
        if (currentCard >= flowerItems.length) {
            currentCard = 0;
        }
        showCard();
    };

    leftArrow.onclick = function () {
        currentCard--;
        if (currentCard < 0) {
            currentCard = flowerItems.length - 1;
        }
        showCard();
    };
}

// dark mode toggle
let darkMod = document.getElementById("darkModeBtn");

if(localStorage.getItem("darkMode") === "on"){
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

if(darkMod){
    darkMod.onclick = function(){
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("darkMode", "on");
        } else {
            localStorage.setItem("darkMode", "off");
        }
    }
}
 
// open product details function
function openProduct(card) {
    const id = card.dataset.id;
    window.location.href = "Product-Details/index.html?id=" + encodeURIComponent(id);
}

// collection link redirect
let collectionCard = document.querySelectorAll(".collection-card");

collectionCard.forEach(function(col){
    col.onclick = function(){
        window.location.href = "Collections/index.html";
    }
});
// collections slider

let collectionCards = document.querySelector(".collection-cards");
let collectionItems = document.querySelectorAll(".collection-card");
let collectionRightArrow = document.querySelector(".collection-arrow-right");
let collectionLeftArrow = document.querySelector(".collection-arrow-left");

let currentCollection = 0;

function showCollection() {

    let cardWidth = collectionItems[0].offsetWidth;
    let gap = 25;

    collectionCards.scrollTo({
        left: currentCollection * (cardWidth + gap),
        behavior: "smooth"
    });
}

if (collectionRightArrow && collectionLeftArrow) {

    collectionRightArrow.onclick = function () {

        if (currentCollection < collectionItems.length - 1) {
            currentCollection++;
            showCollection();
        }

    };


    collectionLeftArrow.onclick = function () {

        if (currentCollection > 0) {
            currentCollection--;
            showCollection();
        }

    };
}