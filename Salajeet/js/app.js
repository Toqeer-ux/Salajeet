$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    paginationSpeed: 5000,
    nav: false,
    stagePadding: 200,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        600: {
            items: 1,
            stagePadding: 100,
        },
        1000: {
            items: 1
        },
    }
})
// Products select Menu
document.addEventListener("DOMContentLoaded", function () {
    const productMenus = document.querySelectorAll(".product-menu");
    productMenus.forEach(function (menu) {
        const navLinks = menu.querySelectorAll("a");
        navLinks.forEach(function (navLink) {
            navLink.addEventListener("click", function (event) {
                event.preventDefault();
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                });
                this.classList.add("active");
            });
        });
    });
});
// 
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
// 
function setActive(event, clickedLink) {
    event.preventDefault();
    const links = document.querySelectorAll('.choose-color a');
    links.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
}
// Tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Grams 
document.querySelectorAll('.garms ul li a').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        document.querySelectorAll('.garms ul li a').forEach(function (btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});