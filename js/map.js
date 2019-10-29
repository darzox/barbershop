var mapPopup = document.querySelector(".footer-contacts a");
var mapClose = document.querySelector(".modal-map .modal-close");

mapPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show")
})