const menuBox = document.querySelector('.menu-box')
const whiteIcon = document.querySelector('.white-icon');
const blackIcon = document.querySelector('.black-icon');

blackIcon.addEventListener('click',()=>{
    if (menuBox.style.left == "0%" && blackIcon.style.opacity == "0" && whiteIcon.style.opacity == "1") {
        menuBox.style.left = "-100%";
        blackIcon.style.opacity = "1";
        whiteIcon.style.opacity = "0";
    } else {
        menuBox.style.left = "0%";
        blackIcon.style.opacity = "0";
        whiteIcon.style.opacity = "1";
    }
});

const skillbox1 = document.querySelector('.f-skill');
const skillbox2 = document.querySelector('.s-skill');
const skillbox3 = document.querySelector('.t-skill');
const skillbox4 = document.querySelector('.fo-skill');

const htmlImg = document.querySelector('.img__html');
const cssImg = document.querySelector('.img__css');
const jsImg = document.querySelector('.img__js');
const phpImg = document.querySelector('.img__php');
const animateImg = document.querySelector('.img__animate');
const blenderImg = document.querySelector('.img__blender');
const illustratorImg = document.querySelector('.img__illustrator');
const photoshopImg = document.querySelector('.img__photoshop');
const indesignImg = document.querySelector('.img__indesign');
const xdImg = document.querySelector('.img__xd');

skillbox1.addEventListener('mouseover', ()=>{
    htmlImg.style.top = "30%";
    htmlImg.style.left = "16%";
    cssImg.style.left = "27.5%";
    jsImg.style.left = "15%";
    phpImg.style.top = "23%";
});
skillbox1.addEventListener('mouseout', ()=>{
    htmlImg.style.top = "45%";
    htmlImg.style.left = "19%";
    cssImg.style.left = "23%";
    jsImg.style.left = "19%";
    phpImg.style.top = "50%";
});



skillbox2.addEventListener('mouseover', ()=>{
    animateImg.style.top = "28%";
    animateImg.style.left = "43%";
});
skillbox2.addEventListener('mouseout', ()=>{
    animateImg.style.top = "50%";
    animateImg.style.left = "40%";
});



skillbox3.addEventListener('mouseover', ()=>{
    blenderImg.style.left = "63%";
});
skillbox3.addEventListener('mouseout', ()=>{
    blenderImg.style.left = "58%";
});



skillbox4.addEventListener('mouseover', ()=>{
    illustratorImg.style.left = "80%";
    photoshopImg.style.left = "70%";
    photoshopImg.style.top = "30%";
    indesignImg.style.left = "68%";
    indesignImg.style.left = "68%";
    xdImg.style.top = "73%";
});
skillbox4.addEventListener('mouseout', ()=>{
    illustratorImg.style.left = "75%";
    photoshopImg.style.left = "72%";
    photoshopImg.style.top = "50%";
    indesignImg.style.left = "72%";
    xdImg.style.top = "58%";
});


const startLoading = document.querySelector('.loading-page>.loading-page__inner>a');
const loadingBar = document.querySelector('.loading-bar');
const loadingProg = document.querySelector('.loading-progress');
const loadingPage = document.querySelector('.loading-page');

startLoading.addEventListener('click', ()=>{
    loadingBar.style.opacity = '1';
    loadingProg.style.width = '100%';
    loadingPage.style.zIndex = '-1';
    loadingPage.style.opacity = '0';
});


// Mobile Javascript

const mobileBlackIcon = document.querySelector('.mobile-mockup>header>nav>.black-icon');
const mobileWhiteIcon = document.querySelector('.mobile-mockup>header>nav>.white-icon');
const mobileMenuBox = document.querySelector('.mobile-mockup>header>nav>.menu-box');

mobileBlackIcon.addEventListener('click', ()=>{
    if (mobileBlackIcon.style.opacity == '0' && mobileWhiteIcon.style.opacity == '1' && mobileMenuBox.style.left == '0%') {
        mobileBlackIcon.style.opacity = '1';
        mobileWhiteIcon.style.opacity = '0';
        mobileMenuBox.style.left = '-100%';
    } else {
        mobileBlackIcon.style.opacity = '0';
        mobileWhiteIcon.style.opacity = '1';
        mobileMenuBox.style.left = '0%';
    }
});


const revealBtn = document.querySelector('.mobile-mockup>.expertise>h2');
const prog1 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog1');
const prog2 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog2');
const prog3 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog3');
const prog4 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog4');
const prog5 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog5');
const prog6 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog6');
const prog7 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog7');
const prog8 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog8');
const prog9 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog9');
const prog10 = document.querySelector('.mobile-mockup>.expertise>ul>li>.prog-bar>.prog10');

revealBtn.addEventListener('click', ()=>{
    prog1.style.width = '95%';
    prog2.style.width = '75%';
    prog3.style.width = '60%';
    prog4.style.width = '30%';
    prog5.style.width = '70%';
    prog6.style.width = '80%';
    prog7.style.width = '70%';
    prog8.style.width = '85%';
    prog9.style.width = '95%';
    prog10.style.width = '70%';
});
