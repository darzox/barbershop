 var loginLink = document.querySelector(".login-link");
            var popup = document.querySelector(".modal-login");
            var close = document.querySelector(".modal-close");
            var form = popup.querySelector("form");
            var login = popup.querySelector("[name=login]");
            var password = popup.querySelector("[name=password]");
            var storage = localStorage.getItem("login");

            loginLink.addEventListener("click", function(evt) {
                evt.preventDefault();
                popup.classList.add("modal-show");
                if (storage) {
                    login.value = storage;
                    password.focus();
                }else {
                    login.focus();
                };

            });
            
            window.addEventListener("keydown", function(evt) {
                    if (popup.classList.contains("modal-show")) {
                        if (evt.keyCode === 27) {
                            evt.preventDefault();
                        popup.classList.remove("modal-show");
                    }
                }
            })

            close.addEventListener("click", function(evt) {
                evt.preventDefault();
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
            });

            form.addEventListener("submit", function(evt) {
                if (!login.value || !password.value) {
                    evt.preventDefault();
                    popup.classList.add("modal-error");
                } else {
                    localStorage.setItem("login", login.value);
                }
                
            });