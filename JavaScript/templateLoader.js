function cargarTemplate(url, selector, callback = null) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let container = document.querySelector(selector);
            container.innerHTML = data;

            if (window.location.pathname === "/La_Boissierie/index/index.html") {
                let logo = container.querySelector("#LogoH");
                if (logo) {
                    logo.style.opacity = "0";
                }
            }
            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.error('Error al cargar el template:', error);
        });
}
