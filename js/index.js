// storing the varibale using JQuery
const Hamburger = $('#hamburger');
const CloseHamburger = $('#close-hamburger');
const Navigation = $('#navigations');
const Name = $('#name');
const PhoneNumber = $('#phonenumber');
const Address = $('#address');
const Email = $('#email');
const Message = $('#Message');
const Email_Link = $('.mail-link')
const Error_Message = $('#errormsg')


// The open hamburger icon
Hamburger.click(()=>{
    if(Navigation.css("display") === "none"){
        Navigation.css("display", Navigation.delay(400).fadeIn("slow"))
    } else {
        Navigation.css("display", "none");
    }
})


// The close hamburger icon
CloseHamburger.click(()=>{

    if(Navigation.css("display") === "block"){

        Navigation.css("display", Navigation.delay(400).fadeOut("slow"));
      
    } else {

        Navigation.css("display", "none");

    }
})


// validation for the input fields
Email_Link.click(()=>{

    if(Name.val() === "" || PhoneNumber.val() === "" ||Address.val() === "" ||Email.val() === "" ||Message.val() === ""){

        Error_Message.text("fields cannot be empty").css("color", "red")

    }else{
        Error_Message.text("Thanks for reaching out..!").css("color", "green");
        Name.val('');
        PhoneNumber.val('');
        Address.val('');
        Email.val('');
        Message.val('');
    }
})


// email validation 
// Email_Link.click(()=>{
//     if(Email.val().includes('@')){
//         Error_Message.text("good")
//     }else{
//         Error_Message.text("invalid email addrres")
//     }
// })



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




