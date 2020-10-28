let navBar = document.querySelector('#nav-bar');
let bar = document.querySelector('.bar-container');
let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');
let bar3 = document.querySelector('.bar-3');
let historyLink = document.querySelector('.history-link')
let bioLink = document.querySelector('.bio-link')
let faqsLink = document.querySelector('.faqs-link')
let purchaseLink = document.querySelector('.purchase-link')


bar.addEventListener('click', openNav);
historyLink.addEventListener('click', showHistory);
bioLink.addEventListener('click', showBio);
faqsLink.addEventListener('click', showFaqs);
purchaseLink.addEventListener('click', showStore);

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
    document.getElementById('mobileNav').style.width = '100%';
    bar.classList.add('change');
    bar.classList.add('closeBtn');
    bar.classList.remove('openBtn');
    bar.removeEventListener('click', openNav);
    bar.addEventListener('click', closeNav);
}
function closeNav() {
    document.getElementById('mobileNav').style.width = '0%';
    bar.classList.remove('change');
    bar.classList.add('openBtn');
    bar.classList.remove('closeBtn');
    bar.removeEventListener('click', closeNav);
    bar.addEventListener('click', openNav);
}
// new functionality for open close menue full screen

// document.querySelector('.openBtn').addEventListener('click', openNav);
bar.addEventListener('click', openNav);

// let x = window.matchMedia('(max-width: 500px)');

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

// function hideMenu() {
//     bar.classList.remove('change');
//     dropdownMenu.classList.remove('expand');
//     bar.removeEventListener('click', closeNav);
//     bar.addEventListener('click', openNav);
//     }
// function myFunction(x) {
//     if (x.matches) {
//         addHiddenClass();
//         console.log('hidden class added');
//     } else {
//         removeHiddenClass();
//         console.log('hidden class removed');
//     }}
// myFunction(x);