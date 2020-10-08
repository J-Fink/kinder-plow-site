let navBar = document.querySelector('#nav-bar');
let bar = document.querySelector('.bar-container');
let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');
let bar3 = document.querySelector('.bar-3');
let learnMoreLink = document.querySelector('.learn-more-link')
let educationLink = document.querySelector('.education-link')
let technologyLink = document.querySelector('.technology-link')
let button = document.getElementById('do-it');
let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownContent = document.querySelectorAll('.dropdown-content');
bar.addEventListener('click', showMenu);
learnMoreLink.addEventListener('click', showAbout);
educationLink.addEventListener('click', showEducation);
technologyLink.addEventListener('click', showTechnology);

document.addEventListener('scroll', scrollTest);
bar.addEventListener('click', showMenu);
function scrollTest(){
    if (scrollY > 0) {
        // alert('it\'s working!');
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
}

let x = window.matchMedia('(max-width: 500px)');

function removeHiddenClass() {
    dropdownMenu.classList.remove('hidden');
}
function addHiddenClass() {
    dropdownMenu.classList.add('hidden');
}

//hamburger bar event listeners

//
function showMenu(){
    bar.classList.add('change');
    dropdownMenu.classList.add('expand');
    for (let i = 0; i < dropdownContent.length; i++) {
    dropdownContent[i].classList.add('animated');
    }
    bar.removeEventListener('click', showMenu);
    bar.addEventListener('click', hideMenu);
    }
function showTechnology(){
    hideMenu();
    }
    function showEducation(){
    hideMenu();
    }
    function showAbout(){
    hideMenu();
    }

function hideMenu() {
    bar.classList.remove('change');
    dropdownMenu.classList.remove('expand');
    for (let i = 0; i < dropdownContent.length; i++) {
    dropdownContent[i].classList.remove('animated');
    }
    bar.removeEventListener('click', hideMenu);
    bar.addEventListener('click', showMenu);
    }
function myFunction(x) {
    if (x.matches) {
        addHiddenClass();
        console.log('hidden class added');
    } else {
        removeHiddenClass();
        console.log('hidden class removed');
    }}
myFunction(x);