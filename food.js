let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let btn = document.querySelector(".btn");
let orderbtn = document.querySelector("#order-form");
let bookbtn = document.querySelector("#book-form");
let scrolltop = document.querySelector("#scroll-top");
let loading = document.querySelector(".loader-container");

function menu_rotate() {
    if (menu.style.transform != "rotate(90deg)") {
        menu.style.transform = "rotate(90deg)";
    } else if (menu.style.transform == "rotate(90deg)") {
        menu.style.transform = "initial";
    }
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove(menu_rotate());
    navbar.classList.remove("active");

    if (window.scrollY > 60) {
        scrolltop.classList.add("active");
    } else {
        scrolltop.classList.remove("active");
    }
};

function order() {
    if (orderbtn.style.display == "none") {
        orderbtn.style.display = "block";
        bookbtn.style.display = "none";
    } else if (orderbtn.style.display != "none") {
        orderbtn.style.display = "none";
        bookbtn.style.display = "none";
    }
}

function book() {
    if (bookbtn.style.display == "none") {
        bookbtn.style.display = "block";
        orderbtn.style.display = "none";
    } else if (bookbtn.style.display != "none") {
        bookbtn.style.display = "none";
        orderbtn.style.display = "none";
    }
}

function loader() {
    loading.classList.add("fade-out");
}

window.onload = loader();