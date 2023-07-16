const navbarEl = document.querySelector(".navbar");

const bottomColtainerEl = document.
querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bottomColtainerEl.offsetTop);


window.addEventListener("scroll", ()=> {
console.log(window.scrollY);
if(window.scrollY > bottomColtainerEl.offsetTop - navbarEl.offsetHeight - 50){
    navbarEl.classList.add("active")
}else{
    navbarEl.classList.remove("active")

}

});