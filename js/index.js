// storing the hamburger menu in a varibale using JQuery
const Hamburger = $('#hamburger');
const CloseHamburger = $('#close-hamburger');
const Navigation = $('#navigations');

Hamburger.click(()=>{
    if(Navigation.css("display") === "none"){
        Navigation.css("display", Navigation.delay(400).fadeIn("slow"))
    } else {
        Navigation.css("display", "none");
    }
})

CloseHamburger.click(()=>{
    if(Navigation.css("display") === "block"){
        Navigation.css("display", Navigation.delay(400).fadeOut("slow"));
      
    } else {
        Navigation.css("display", "none");
    }
})



                // vanilla js
// const Hamburger = document.querySelector('#hamburger');
// const CloseHamburger = document.querySelector('#close-hamburger');
// const Navigation = document.querySelector('#navigations');

// Hamburger.addEventListener('click', ()=>{
//     if(Navigation.style.display === "none"){
//         Navigation.style.display = "block";
        

//     }else{
//         Navigation.style.display = "none";
//     }
// })


// CloseHamburger.addEventListener('click', ()=>{
//     if(Navigation.style.display === "block"){
//         Navigation.style.display = "none";

//     }else{
//         Navigation.style.display = "none";
//     }
// })




