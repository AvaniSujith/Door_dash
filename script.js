// document.querySelectorAll('.tab-item').forEach(item => {
//     item.addEventListener('click', function() {
//       document.querySelectorAll('.tab-item').forEach(i => i.classList.remove('active'));
//       document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
//       this.classList.add('active');
//       document.querySelector(this.getAttribute('data-target')).classList.add('active');
//     });
//   });

  window.onscroll = function() {stickyNavbar()};

function stickyNavbar() {
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.doorlogo');
    var sticky = 118; 

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        logo.classList.remove("hidden");
        logo.classList.add("visible");
    } else {
        navbar.classList.remove("sticky");
        logo.classList.remove("visible");
        logo.classList.add("hidden");
    }
}
