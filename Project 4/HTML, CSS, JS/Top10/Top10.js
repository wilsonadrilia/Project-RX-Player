//------------------------HEADER PART------------------------
const navDrop = document.querySelector('.nav-drop');
const nav = document.querySelector('nav ul');

navDrop.addEventListener('click', function(){
    nav.classList.toggle('slide');
});