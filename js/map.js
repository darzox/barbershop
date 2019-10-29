var mapPopup = document.querySelector(".modal-map");
var mapLink = document.querySelector(".footer-contacts a");
var mapClose = document.querySelector(".modal-map .modal-close");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show")
})