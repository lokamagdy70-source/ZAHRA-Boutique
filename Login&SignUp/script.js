  // nav
let navbar = document.querySelector(".navbar")
window.onscroll = function(){
    if(window.scrollY > 50){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
}

// localStorage.removeItem("user");ظ
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

// /menu
let menuToggle = document.querySelector(".menu-toggle")
let navLinks = document.querySelector(".nav-links")
menuToggle.onclick = function(){
    navLinks.classList.toggle("active")
}
// الظهور السلس
const items = document.querySelectorAll(
    ".login-container,.signup-container, .img"
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


// تبديل بين الوج ان و  الساين اب
let loginContainer = document.querySelector(".login-container")
let signupContainer = document.querySelector(".signup-container")

let Signlink = document.getElementById("Signlink")
let loginlink = document.getElementById("loginlink")

Signlink.onclick = function(){
    loginContainer.style.display = "none"
    signupContainer.style.display = "flex"
}
loginlink.onclick =function(){
    signupContainer.style.display = "none"
    loginContainer.style.display = "flex"
}

// //عين ال login
let eyePsw = document.getElementById("eyePsw")
let lpsw = document.getElementById("lpsw")
eyePsw.onclick = function(){
    if(lpsw.type == "password"){
        lpsw.setAttribute("type" , "text")
    }else{
        lpsw.setAttribute("type", "password");
    }
}

// /////عين ال sign up
let spsw = document.getElementById("spsw")
let showSignPassword = document.getElementById("showSignPassword")
showSignPassword.onclick = function(){
    if(spsw.type == "password"){
        spsw.setAttribute("type" , "text")
    }else{
        spsw.setAttribute("type" , "password")
    }
}

// //////////////////////العين التالتهه
let eyeConfirm = document.getElementById("eyeConfirm")
let sConfirmPassword = document.getElementById("sConfirmPassword")
eyeConfirm.onclick = function(){
    if(sConfirmPassword.type == "password"){
        sConfirmPassword.setAttribute("type", "text")
    }else{
        sConfirmPassword.setAttribute("type", "password")
    }
}

// sign up box
let signupAlertBox = document.getElementById("signupAlertBox")
let signupAlertMessage = document.getElementById("signupAlertMessage")
// ال input بتاع sign up 
let FirstName = document.getElementById("FirstName")
let LastName = document.getElementById("LastName")
let sEmail = document.getElementById("sEmail")
let signupBtn = document.getElementById("signupBtn")
// const spsw = document.getElementById("spsw")
// const sConfirmPassword = document.getElementById("sConfirmPassword")
signupBtn.onclick = function(){

    if(FirstName.value == ""){
        signupAlertMessage.textContent = "Please enter your first name";
        signupAlertMessage.style.color = "red";
        signupAlertBox.style.display = "block";
    }else if(LastName.value == ""){
        signupAlertMessage.textContent = "Please enter your last name";
                signupAlertMessage.style.color = "red";
        signupAlertBox.style.display = "block";
    }else if(sEmail.value == ""){
        signupAlertMessage.textContent = "Please enter your email";
                signupAlertMessage.style.color = "red";
        signupAlertBox.style.display = "block";
    }else if(!sEmail.value.includes("@")){
        signupAlertMessage.textContent = "Please enter a valid email";
        signupAlertMessage.style.color = "red";
        signupAlertBox.style.display = "block";
    }else if(spsw.value == ""){
        signupAlertMessage.textContent = "Please enter your password";
        signupAlertMessage.style.color = "red";
        signupAlertBox.style.display = "block";
    }else if(!/[0-9]/.test(spsw.value)){
        signupAlertMessage.textContent = "Password must contain a number";
        signupAlertMessage.style.color = "red";
        signupAlertBox.style.display = "block";
    }else if(!/[^A-Za-z0-9]/.test(spsw.value)){
        signupAlertMessage.textContent = "Password must contain a symbol";
        signupAlertMessage.style.color = "red";
        signupAlertBox.style.display = "block";
    }else if(sConfirmPassword.value == ""){
        signupAlertMessage.textContent = "Please confirm your password";
        signupAlertMessage.style.color = "red"
        signupAlertBox.style.display = "block";
    }else if(spsw.value !== sConfirmPassword.value){
        signupAlertMessage.textContent = "Passwords do not match";
        signupAlertMessage.style.color = "red"
        signupAlertBox.style.display = "block";
    }else{
        signupAlertBox.style.display = "none";
        let user ={
            firstName:FirstName.value,
            lastName:LastName.value,
            password:spsw.value,
            email:sEmail.value
        }
        // خزنت البيانات الى كتبها
        localStorage.setItem("user", JSON.stringify(user))
        signupContainer.style.display = "none"
    loginContainer.style.display = "flex"
    }
}

 

//////////////////////شروط ال login
let lemail = document.getElementById("lemail")
let lpassword = document.getElementById("lpsw")
let loginBtn = document.getElementById("lbtn")
// login box
let loginAlertBox = document.getElementById("loginAlertBox")
let loginAlertMessage = document.getElementById("loginAlertMessage")
loginBtn.onclick = function(){
let savedUser = localStorage.getItem("user")
// بيحول تانى ل اوبجكتت
let user = JSON.parse(savedUser)
    if(lemail.value == ""){
        loginAlertMessage.textContent = "Please enter your email";
        loginAlertMessage.style.color = "red";
        loginAlertBox.style.display ="block"
    }else if(lpassword.value == ""){
        loginAlertMessage.textContent = "Please enter your password";
         loginAlertMessage.style.color = "red";
        loginAlertBox.style.display = "block"
    }
    else if (!lemail.value.includes("@")){
        loginAlertMessage.textContent = "Please enter a valid email";
        loginAlertMessage.style.color = "red";
        loginAlertBox.style.display = "block"
    }else if(lemail.value !== user.email){
        loginAlertMessage.textContent = "Email is incorrect";
        loginAlertMessage.style.color = "red";
    loginAlertBox.style.display = "block";
    }else if( lpassword.value !== user.password){
        signupAlertMessage.style.color = "red";
         loginAlertMessage.textContent = "Password is incorrect";
    loginAlertBox.style.display = "block";
    }
    else{
    loginAlertBox.style.display = "none"
    window.location.href = "../Home-page/index.html";
}
}