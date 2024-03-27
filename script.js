window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

window.addEventListener('scroll', function() {
    let header = document.querySelector('.topbar');
    header.classList.toggle('stickys', window.scrollY > 0);
});

let menu = document.querySelector('.menu');
let list = document.querySelector('ul');

menu.addEventListener('click',()=>{
    list.classList.toggle('show');

    let menuchild = menu.firstElementChild;
    if(list.classList.contains('show')){
        menuchild.classList.replace('fa-bars','fa-xmark');
    }
    else{
        menuchild.classList.replace('fa-xmark','fa-bars');
    }
})
let menu1 = document.querySelector('.menu1')
let contact = document.querySelector('.contact');
let message = document.querySelector('.message');

menu1.addEventListener('click',()=>{
    contact.classList.toggle('shows');
    // message.classList.toggle('shows')

    let menuchild = menu1.firstElementChild;
    if(contact.classList.contains('shows')){
        menuchild.classList.replace('fa-bars','fa-xmark');
    }
    else{
        menuchild.classList.replace('fa-xmark','fa-bars');
    }
})

let welcome = document.querySelector('.welcome')
window.addEventListener('scroll', function() {
    
    welcome.classList.add('showing', window.scrollY > 200);
});

const scrollUp = document.querySelector('.scrollUp');
window.addEventListener('scroll', function() {
    const scrollUp = document.querySelector('.scrollUp');
    if (window.scrollY > 400) {
        scrollUp.style.display = "block";

    } else {
        scrollUp.style.display = "none";
    }
});
scrollUp.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})



