// storing the hamburger menu in a varibale using JQuery
const Hamburger = $('#hamburger');
const CloseHamburger = $('#close-hamburger');
const Navigation = $('#navigations');
const Name = $('#name');
const PhoneNumber = $('#phonenumber');
const Address = $('#address');
const Email = $('#email');
const Message = $('#Message');
const Email_Link = $('.mail-link')

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

Email_Link.click(()=>{
    if(Name.val() === "" || PhoneNumber.val() === "" ||Address.val() === "" ||Email.val() === "" ||Message.val() === ""){
        Email_Link.css("color", "red")
    }else{
        Email_Link.css("color", "white")
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




