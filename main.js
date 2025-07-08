
// const hamburger = document.getElementById('hamburger');
// const navMobile = document.getElementById('nav-mobile');

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('active');
//     navMobile.classList.toggle('active');
// });

// const mobileLinks = document.querySelectorAll('.nav-link-mobile');
// mobileLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('active');
//         navMobile.classList.remove('active');
//     });
// });


// document.addEventListener('click', function(event) {
//     const isClickInsideNav = navMobile.contains(event.target);
//     const isClickOnHamburger = hamburger.contains(event.target);
    
//     if (!isClickInsideNav && !isClickOnHamburger && navMobile.classList.contains('active')) {
//         hamburger.classList.remove('active');
//         navMobile.classList.remove('active');
//     }
// });


// function toggleFaq(element) {
//     const faqItem = element.parentElement;
//     const isActive = faqItem.classList.contains('active');
    
//     // Close all FAQ items
//     document.querySelectorAll('.faq-item').forEach(item => {
//         item.classList.remove('active');
//     });
    
//     if (!isActive) {
//         faqItem.classList.add('active');
//     }
// }