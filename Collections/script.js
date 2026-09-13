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

// ///////////////////////////////////
let menuToggle = document.querySelector(".menu-toggle")
let navLinks = document.querySelector(".nav-links")
menuToggle.onclick = function(){
    navLinks.classList.toggle("active")
}
// ////////////////////////////////////
 const items = document.querySelectorAll(
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
//شغل لما الصفحه تفتح
showItems();


// //////////////////////////////
let textElements = document.querySelectorAll("p, span, h3");

let observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("text-show");
            // observer.unobserve(entry.target);
        }

    });

});

textElements.forEach(function(element) {
    observer.observe(element);
});

// ///////////////////////////////////////////////
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


/////////////////////////////////////////////////////

let coRadio = document.querySelectorAll('input[name="collection"]')
let cards = document.querySelectorAll(".flower-card")
let price = document.querySelectorAll('input[name="price"]')

// nothing selected
let selectedCollection = ""
let selectedPrice = ""

coRadio.forEach(function(radio){

    radio.addEventListener("click", function(){

        selectedCollection = radio.value

        filterCards()
        seeMoreBtn.style.display = "none"

    })

})
// Price
price.forEach(function(radio){

    radio.addEventListener("click", function(){
            // علشان نفتكر اختيار المشتخدم
        selectedPrice = radio.value
        filterCards()
        seeMoreBtn.style.display = "none"
    })

})

 
function filterCards(){ 

    cards.forEach(function(card){

        let cardCollection = card.dataset.collection
        let cardPrice = card.dataset.price


        let collectionMatch =
            selectedCollection == "" ||
            cardCollection == selectedCollection
        let priceMatch =
            selectedPrice == "" ||
            cardPrice == selectedPrice

        if(collectionMatch && priceMatch){

            card.style.display ="block"
            
             card.classList.remove("extra-card")

        }else{

            card.style.display = "none"

        }

    })

}



function openProduct(card) {

    const id = card.dataset.id;
    

    window.location.href =
        "../Product-Details/index.html?id=" + id;
}