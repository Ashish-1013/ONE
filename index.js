const menu = document.querySelector("#menu");
const nav = document.querySelector(".link");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

