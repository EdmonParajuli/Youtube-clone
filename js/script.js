let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar")

menuIcon.addEventListener('click',()=>{
    sidebar.classList.toggle("small-sidebar");
})