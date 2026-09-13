
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
    " .product-image,.product-info,p,span,h3 ,button"
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




let products = {

    "bonbon-dahlia": {
        name: "Bonbon Dahlia",
        price: "£35.00",
        image: "https://www.flowerbx.com/media/catalog/product/e/s/esli-dahlia-royal-windsor.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Daybreak Anthurium": {
        name: "Daybreak Anthurium",
        price: "£75.00",
        image: "https://www.flowerbx.com/media/catalog/product/a/n/anthurium_pink_stem.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Cornfield Foxtail Lily": {
        name: "Cornfield Foxtail Lily",
        price: "£35.00",
        image: "https://www.flowerbx.com/media/catalog/product/f/o/foxtail_lily_cornfield_foxtail_lily_vase_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Chiffon Lisianthus": {
        name: "Chiffon Lisianthus",
        price: "£75.00",
        image: "https://www.flowerbx.com/media/wysiwyg/peony_primrose_peony_vase_copy.jpg"
    },

    "Dusty Lilac Delphinium": {
        name: "Dusty Lilac Delphinium",
        price: "£100.00",
        image: "https://www.flowerbx.com/media/catalog/product/l/i/lilac-delphiniums-white-mayfair_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Memory Lane Rose": {
        name: "Memory Lane Rose",
        price: "£55.00",
        image: "https://www.flowerbx.com/media/catalog/product/r/o/rose_memory_lane_rose_vase3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Yellow Penny Lane Rose": {
        name: "Yellow Penny Lane Rose",
        price: "£50.00",
        image: "https://www.flowerbx.com/media/catalog/product/r/o/rose_yellow_penny_lane_rose_vase_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "the Beach Dahlia": {
        name: "The Beach Dahlia",
        price: "£45.00",
        image: "https://www.flowerbx.com/media/catalog/product/d/a/dahlia_sex_on_the_beach_dahlia_vase_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "The Soul Mate": {
        name: "The Soul Mate",
        price: "£70.00",
        image: "https://www.flowerbx.com/media/catalog/product/b/a/bacarat-flute-vase.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Sunflower": {
        name: "Sunflower",
        price: "£85.00",
        image: "https://www.flowerbx.com/media/catalog/product/s/u/sunflower_apothecary_sunflower_vase_set1_5.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=367&width=334&canvas=334:367"
    },

    "Patch": {
        name: "Patch",
        price: "£70.00",
        image: "https://www.flowerbx.com/media/catalog/product/b/l/blushing-reeva-flute-vase.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=367&width=334&canvas=334:367"
    },

    "Sorbonne Pink": {
        name: "Sorbonne Pink",
        price: "£35.00",
        image: "https://www.flowerbx.com/media/catalog/product/d/e/deluxe_lily_sorbonne_pink_long_stem_deluxe_lily_vase_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Bird of Paradise": {
        name: "Bird of Paradise",
        price: "£75.00",
        image: "https://www.flowerbx.com/media/catalog/product/b/i/birds_of_paradise_large_onyx_mayfair.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Blush Nude Stock": {
        name: "Blush Nude Stock",
        price: "£35.00",
        image: "https://www.flowerbx.com/media/catalog/product/s/t/stock_blush_nude_stock_vase1_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Ivory": {
        name: "Ivory",
        price: "£35.00",
        image: "https://www.flowerbx.com/media/catalog/product/r/o/rose_ivory_avalanche_rose_vase_6.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Red Daybreak Anthurium": {
        name: "Daybreak Anthurium",
        price: "£50.00",
        image: "https://www.flowerbx.com/media/catalog/product/a/n/anthurium_red_vase.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=845&width=768&canvas=768:845"
    },

    "Astrantia": {
        name: "Astrantia",
        price: "£100.00",
        image: "https://www.flowerbx.com/media/catalog/product/a/s/astrantia_first_kiss_astrantia_vase_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Sky High Orchid": {
        name: "Sky High Orchid",
        price: "£70.00",
        image: "https://www.flowerbx.com/media/catalog/product/o/r/orchid_plant_electric_white_phalaenopsis_orchid_plant_4stems_white_2.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Pink Cheeks Campanula": {
        name: "Pink Cheeks Campanula",
        price: "£50.00",
        image: "https://www.flowerbx.com/media/catalog/product/p/i/pink-campanula-med-apoth-01-pdp.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Pink Cheeks Campanulaa": {
        name: "Pink Cheeks Campanula",
        price: "£100.00",
        image: "https://www.flowerbx.com/media/catalog/product/a/s/astilbe_pink_flutter_astilbe_stem_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=845&width=768&canvas=768:845"
    },

    "Violet Campanula": {
        name: "Violet Campanula",
        price: "£75.00",
        image: "https://www.flowerbx.com/media/catalog/product/c/a/campanula_dark-purple.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Modern White Calla Lily": {
        name: "Modern White Calla Lily",
        price: "£100.00",
        image: "https://www.flowerbx.com/media/catalog/product/m/o/modern_white_cala_lilly_white_mayfair.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=768&width=768"
    },

    "Cotton Candy": {
        name: "Cotton Candy",
        price: "£35.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FUNBOXING%2F35-38-3-LB-PRODUCT-V2-1X1-WEB.jpg&w=640&q=75"
    },

    "Sensibility": {
        name: "Sensibility",
        price: "£75.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FUNBOXING%2F35-38-2-CL-PRODUCT-V2-WEB.jpg&w=640&q=75"
    },

    "Parma Violet": {
        name: "Parma Violet",
        price: "£35.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2FWK35-38%2FCHOICE%2F35-38-CHOICE1-CUT-DOWN-WEB.jpg&w=640&q=75"
    },

    "Dahlia Disco": {
        name: "Dahlia Disco",
        price: "£75.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FUNBOXING%2F35-38-2-SS-PRODUCT-V2-WEB.jpg&w=640&q=75"
    },

    "Sense": {
        name: "Sense",
        price: "£100.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FBUNDLES%2F35-38-3-CL-VASE.jpg&w=640&q=75"
    },

    "All the Hydrangeas": {
        name: "All the Hydrangeas",
        price: "£55.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FBUNDLES%2F35-38-1-CL-VASE.jpg&w=640&q=75"
    },

    "Rose A La Mode": {
        name: "Rose A La Mode",
        price: "£50.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FUNBOXING%2FNEW%2F35-38-1-SS-PRODUCT-V2-1X1-WEB.jpg&w=640&q=75"
    },

    "Neon Sky": {
        name: "Neon Sky",
        price: "£45.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FUNBOXING%2F35-38-3-SS-PRODUCT-1X1-V2-WEB.jpg&w=640&q=75"
    },

    "Parma Violet & Classic Vase": {
        name: "Parma Violet & Classic Vase",
        price: "£70.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FBUNDLES%2F35-38-2-CL-LARGE-CANDLE-BUNDLE.jpg&w=640&q=75"
    },

    "Tangerine Dream": {
        name: "Tangerine Dream",
        price: "£85.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2FWK35-38%2FPRODUCT%2F35-38-4-SS-PRODUCT-WEB.jpg&w=640&q=75"
    },

    "Cabbage Patch": {
        name: "Cabbage Patch",
        price: "£70.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FCHOICE%2F35-38-CHOICE3-DAHLIA-SS-PRODUCT-1X1-WEB.jpg&w=640&q=75"
    },

    "Autumn Embers": {
        name: "Autumn Embers",
        price: "£35.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FBUNDLES%2F35-38-2-SS-LARGE-CANDLE-BUNDLE.jpg&w=640&q=75"
    },

    "Autumn's Bounty2": {
        name: "Autumn's Bounty",
        price: "£75.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F35-38%2FBUNDLES%2F35-38-1-SS-LARGE-CANDLE-BUNDLE.jpg&w=640&q=75"
    },

    "Candle": {
        name: "Candle",
        price: "£35.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F39-42%2FPRODUCT%2F39-42-1-SS-PRODUCT-WEB.jpg&w=640&q=75"
    },

    "Tangerine Dream2": {
        name: "Tangerine Dream",
        price: "£35.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F39-42%2FPRODUCT%2F39-42-3-SS-PRODUCT-1X1-WEB.jpg&w=640&q=75"
    },

    "Patch2": {
        name: "Patch",
        price: "£50.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F39-42%2FPRODUCT%2F39-42-4-SS-PRODUCT-1X1-WEB.jpg&w=640&q=75"
    },

    "wedding": {
        name: "wedding",
        price: "£100.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F39-42%2FPRODUCT%2F39-42-2-SS-PRODUCT-WEB.jpg&w=640&q=75"
    },

    "Ciara con": {
        name: "Ciara con",
        price: "£70.00",
        image: "https://www.freddiesflowers.com/_next/image?url=https%3A%2F%2Ffreddiesflowers-com.s3.eu-west-2.amazonaws.com%2Fimages%2Fgift-products%2F39-42%2FCHOICE%2F39-42-SS-CHOICE1-PRODUCT-1X1-WEB.jpg&w=640&q=75"
    }

};


let link = new URLSearchParams(window.location.search);
let id = link.get("id");
let p = products[id];

let name = document.getElementById("productName");
name.textContent = p.name;

let image = document.getElementById("productImage");
image.src = p.image;

let productPrice = document.getElementById("productPrice");
productPrice.textContent = p.price;

// //////////////////

let basePrice = Number(p.price.replace("£", ""));
let quantityOptions = document.querySelectorAll(".quantity-option");

let quantity = 20;

quantityOptions.forEach(function(button) {

    button.onclick = function() {
        quantity = button.dataset.quantity;

        if (quantity == "20") {
            productPrice.textContent = "£" + basePrice;
        } else if (quantity == "50") {
            productPrice.textContent = "£" + (basePrice * 2);
        } else if (quantity == "100") {
            productPrice.textContent = "£" + (basePrice * 3);
        }
    }
});


// /////////////////
let buyBtn = document.getElementById("buyBtn")

buyBtn.onclick = function(){
    window.location.href =
        "../Checkout/index.html";
}

