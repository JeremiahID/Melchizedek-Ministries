const Hamburger = document.querySelector('#hamburger');
const CloseHamburger = document.querySelector('#close-hamburger');
const Navigation = document.querySelector('#navigations');
console.log("working")

Hamburger.addEventListener('click', ()=>{
    if(Navigation.style.display === "none"){
        Navigation.style.display = "block";
        Navigation.style.transition = "" ;
        

    }else{
        Navigation.style.display = "none";
    }
})


CloseHamburger.addEventListener('click', ()=>{
    if(Navigation.style.display === "block"){
        Navigation.style.display = "none";

    }else{
        Navigation.style.display = "none";
    }
})