let navBar = document.querySelector('#nav-bar');
let bar = document.querySelector('.bar-container');
let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');
let bar3 = document.querySelector('.bar-3');
let historyLink = document.querySelector('.history-link')
let bioLink = document.querySelector('.bio-link')
let faqsLink = document.querySelector('.faqs-link')
let purchaseLink = document.querySelector('.purchase-link')
let mediaQueryMaxWidth = window.matchMedia('(max-width: 500px)');

if (matchMedia) {
    mediaQueryMaxWidth.addEventListener('change', widthChange);
    widthChange(mediaQueryMaxWidth);
} else {
    mediaQueryMaxWidth.addEventListener('change', widthChange);
}
function widthChange(mediaQueryMaxWidth) {
    if (mediaQueryMaxWidth.matches) {
        mobileDisplay();
    } else {
        desktopDisplay();
    }
}
// }
// if(mediaQueryMaxWidth.matches){//check to see if my media query matches
//     mobileDisplay();//if it does match the display is 500px or less, it set
// } else {
//     return;
// }

function mobileDisplay() {
    console.log('mobileDisplay called');
    document.getElementById('mobileNav').style.width = '0%';
    bar.addEventListener('click', openNav);
    historyLink.addEventListener('click', showHistory);
    bioLink.addEventListener('click', showBio);
    faqsLink.addEventListener('click', showFaqs);
    purchaseLink.addEventListener('click', showStore);
    bar.addEventListener('click', openNav);
}
function desktopDisplay () {
    console.log('desktopDisplay called');
    bar.removeEventListener('click', openNav);
    historyLink.removeEventListener('click', showHistory);
    bioLink.removeEventListener('click', showBio);
    faqsLink.removeEventListener('click', showFaqs);
    purchaseLink.removeEventListener('click', showStore);
    bar.removeEventListener('click', openNav);
    document.getElementById('mobileNav').style.width = '100%';

}
document.addEventListener('scroll', scrollTest);
function scrollTest(){
    if (scrollY > 0) {
        // alert('it\'s working!');
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
}

function openNav() {
    console.log('openNav has been called');
    document.getElementById('mobileNav').style.width = '100%';
    bar.classList.add('change');
    bar.classList.add('closeBtn');
    bar.classList.remove('openBtn');
    bar.removeEventListener('click', openNav);
    bar.addEventListener('click', closeNav);
}
function closeNav() {
    console.log('closeNav has been called');
    document.getElementById('mobileNav').style.width = '0%';
    bar.classList.remove('change');
    bar.classList.add('openBtn');
    bar.classList.remove('closeBtn');
    bar.removeEventListener('click', closeNav);
    bar.addEventListener('click', openNav);
}
// new functionality for open close menue full screen

// document.querySelector('.openBtn').addEventListener('click', openNav);
// function removeHiddenClass() {
//     dropdownMenu.classList.remove('hidden');
// }
// function addHiddenClass() {
//     dropdownMenu.classList.add('hidden');
// }

//hamburger bar event listeners

//
// function showMenu(){
//     bar.classList.add('change');
//     dropdownMenu.classList.add('expand');
//     for (let i = 0; i < dropdownContent.length; i++) {
//     dropdownContent[i].classList.add('animated');
//     }
//     bar.removeEventListener('click', showMenu);
//     bar.addEventListener('click', hideMenu);
//     }
function showHistory(){
    closeNav();
    }
function showBio(){
    closeNav();
    }
function showFaqs(){
    closeNav();
    }
function showStore(){
    closeNav();
    }