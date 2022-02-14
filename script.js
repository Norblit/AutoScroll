const mainTitle = document.querySelector('.mainTitle')

// main section
const mainSection = document.querySelector('.main-section')
const formControl = document.querySelector('.form-control');
const formatBtn = document.querySelector('.textFormat')
const input = document.querySelector('.inputText')

// control panel
const controlPnl = document.querySelector('.control-panel')
const fsBtn = document.querySelector('.fsBtn')
const speedBtn = document.querySelector('.speedBtn')
const startBtn = document.querySelector('.startBtn')
const resetBtn = document.querySelector('.resetBtn')
const clearBtn = document.querySelector('.clearBtn')
const read = document.querySelector('.read')
resetBtn.disabled = true

// dark mode elements
const darkSwitch = document.querySelector('#darkSwitch')
const body = document.querySelector('body')

//  COOKIE VALIDATION
if(Cookies.get('darkMode')){ // if the cookie exists
    var isDarkCookie = Cookies.get('darkMode')  // then put it in a variable
    darkMode(Cookies.get('darkMode') == 'true')  // pass the value into darkMode
    // converting string to boolean
    let isOn = isDarkCookie === 'true'
    darkSwitch.checked = isOn
}
// DARK MODE SWITCH
darkSwitch.addEventListener('click',()=>{
    darkMode(darkSwitch.checked == true)
})
// INPUT SUBMIT BUTTON
formatBtn.addEventListener('click',(e)=>{
    // clear text-section
    read.innerHTML = '';
    // create/insert text into text section
    let text = formControl.value;
    read.innerHTML =`<p>${text}</p>`
    // clear input
    formControl.value = '';
})

// CONTROL PANEL > FONT SIZE BUTTON
let fontSize = 1;
let x = 1;
let speedCounter = 1;
let scrollingSpeed = 100;
fsBtn.addEventListener('click',(e)=>{
    let x = fontSize
    read.style.fontSize = `${fontSize += .5}em`;
    fsBtn.innerHTML = `Font Size: ${x += .5}x`
    if(fontSize >= 2.5){
        fontSize = .5;
    }
})
// CONTROL PANEL > SCROLL SPEED BUTTON
speedBtn.addEventListener('click', (e)=>{
    speedBtn.innerHTML = `Speed: ${++speedCounter}x`
    console.log(speedCounter)
    switch (speedCounter) {
        case 1:
            scrollingSpeed = 100;
            return scrollingSpeed;
        case 2:
            scrollingSpeed = 50;
            return scrollingSpeed;
        case 3:
            scrollingSpeed = 25;
            return scrollingSpeed;
        case 4:
            scrollingSpeed = 125;
        speedBtn.innerHTML = `Speed: 0.5x`
            speedCounter = 0
        default:
            break;
    }
})
// CONTROL PANEL > START BUTTON
let isStarted = false;
startBtn.addEventListener('click',(e)=>{
    if(read.textContent){
        pageScroll();
        console.log('Scroll speed (start):', scrollingSpeed);
        startBtn.disabled = true
        isStarted = true
        resetBtn.disabled = false;
    }else{
        console.log('no text')
    }
    // turns into pause button
})
// CONTROL PANEL > RESET BUTTON 
resetBtn.addEventListener('click',()=>{
    startBtn.disabled = false
    clearTimeout(scrolldelay);
    read.scrollTo(1, 1);
})
// CONTROL PANEL > CLEAR BUTTON 
clearBtn.addEventListener('click',()=>{
    startBtn.disabled = false
    clearTimeout(scrolldelay);
    read.scrollTo(1, 1);
    read.innerHTML = "";
})

function pageScroll() {
        read.scrollBy(0,1);
        console.log('Scroll Speed (fn)', scrollingSpeed)
        scrolldelay = setTimeout(pageScroll, scrollingSpeed);
}
function darkMode(option){
    if(option){
        // DARK MODE: ON
        Cookies.set('darkMode','true', { expires: 30 })
        // input form
        input.classList.replace('inputText', 'inputText2')
        // main panel
        mainSection.classList.replace('main-section','main-section2')
        // control panel
        controlPnl.classList.replace('control-panel','control-panel2')
        // read section
        read.classList.replace('read', 'read2')

        body.style.backgroundColor = '#323232'
        body.style.color = 'white'
    }else{
        // DARK MODE: OFF
        Cookies.set('darkMode','false', { expires: 30 })
        // input form
        input.classList.replace('inputText2', 'inputText')
        // main panel
        mainSection.classList.replace('main-section2','main-section')
        // control panel
        controlPnl.classList.replace('control-panel2','control-panel')
        // read section
        read.classList.replace('read2', 'read')

        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
}
