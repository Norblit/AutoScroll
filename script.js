const formControl = document.querySelector('.form-control');
const formatBtn = document.querySelector('.textFormat')
const read = document.querySelector('.read')
const input = document.querySelector('.inputText')

// control panel
const fsBtn = document.querySelector('.fsBtn')
const speedBtn = document.querySelector('.speedBtn')
const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
stopBtn.disabled = true

// dark mode elements
const darkTgl = document.querySelector('.darkMode')
const moonImg = document.querySelector('.moonImg')
const body = document.querySelector('body')

let isWhiteMode = true; //it is white

darkTgl.addEventListener('click',()=>{
    if(isWhiteMode){
        // Background is black
        input.classList.remove('inputText')
        input.classList.add('inputText2')

        body.style.backgroundColor = '#323232'
        body.style.color = 'white'

        darkTgl.style.backgroundColor = 'lightgrey'
        darkTgl.style.color = 'black'

        read.classList.remove('read')
        read.classList.add('read2')

        moonImg.classList.remove('moonImg')
        moonImg.classList.add('moonImg2')

        isWhiteMode = false;
    }else{
        // Background is white
        input.classList.remove('inputText2')
        input.classList.add('inputText')

        body.style.backgroundColor = 'white'
        body.style.color = 'black'

        darkTgl.style.backgroundColor = 'black'
        darkTgl.style.color = 'white'

        read.classList.remove('read2')
        read.classList.add('read')

        moonImg.classList.remove('moonImg2')
        moonImg.classList.add('moonImg')
        isWhiteMode = true;
    }
})

let fontSize = 1;
let x = 1;
let speedCounter = 1;
let scrollingSpeed = 100;

// Button to paste text into the read class within the text-section; removed the text within the input; 
formatBtn.addEventListener('click',(e)=>{
    // clear text-section
    read.innerHTML = '';
    // create/insert text into text section
    let text = formControl.value;
    sessionStorage.setItem('inputContent', text)
    read.innerHTML =`<p>${text}</p>`
    // clear input
    formControl.value = '';
    input.style.height = '100px'
})

// Button to adjust font-size by one em
fsBtn.addEventListener('click',(e)=>{
    let x = fontSize
    read.style.fontSize = `${fontSize += .5}em`;
    fsBtn.innerHTML = `Font Size: ${x += .5}x`
    if(fontSize >= 2.5){
        fontSize = .5;
    }
})
// Button to adjust scrolling speed
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

let isStarted = false;

// Button to initiate scrolling process
startBtn.addEventListener('click',(e)=>{
    if(read.textContent){
        pageScroll();
        console.log('Scroll speed (start):', scrollingSpeed);
        startBtn.disabled = true
        isStarted = true
        stopBtn.disabled = false;

    }else{
        console.log('no text')
    }
    // turns into pause button
})
stopBtn.addEventListener('click',()=>{
    startBtn.disabled = false
    // read.innerHTML = `<p>${sessionStorage.getItem('inputContent')}</p>`
    clearTimeout(scrolldelay);
    read.scrollTo(1, 1);
})
function pageScroll() {
        read.scrollBy(0,1);
        console.log('Scroll Speed (fn)', scrollingSpeed)
        scrolldelay = setTimeout(pageScroll, scrollingSpeed);
}
