const boutikCardFake = document.querySelector(".boutique-card-fake"); 
const boutikCard = document.querySelector(".boutique-card");
const addz = document.querySelector(".add");
const newAddz = document.querySelector(".new-add");
const cartView = document.querySelector(".cart-view");
const truKool = document.querySelector(".truKool");

addz.addEventListener("click", () => {
addz.style.display = "none";
newAddz.style.display = "block";
boutikCardFake.style.display = "none";
boutikCard.style.display = "block";
})

truKool.addEventListener("click", () => {
    cartView.classList.toggle("displayBlock");
})