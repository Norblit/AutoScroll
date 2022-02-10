const formControl = document.querySelector('.form-control');
const formatBtn = document.querySelector('.textFormat')
const read = document.querySelector('.read')
const startBtn = document.querySelector('.startBtn')
const fsBtn = document.querySelector('.fsBtn')
const speedBtn = document.querySelector('.speedBtn')
const fsSlider = document.querySelector('.font-size-slider')
const input = document.querySelector('.inputText')



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
    let el = document.createElement('p');
    el.append(text);
    read.append(el);
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
// Button to initiate scrolling process
startBtn.addEventListener('click',(e)=>{
    pageScroll();
    console.log('Scroll speed (start):', scrollingSpeed);
})
function pageScroll() {
    read.scrollBy(0,1);
    console.log('Scroll Speed (fn)', scrollingSpeed)
    scrolldelay = setTimeout(pageScroll, scrollingSpeed);
    // console.log(read.scroll.)
}





// Font Size Slider
// fsSlider.addEventListener('mouseup', (e)=>{
//     if(fsSlider.value == 0){
//         read.style.fontSize = '.7em'
//     }else if(fsSlider.value == 1){
//         read.style.fontSize = '1em'
//     }else if(fsSlider.value == 2){
//         read.style.fontSize = '1.5em'
//     }else if(fsSlider.value == 3){
//         read.style.fontSize = '2em'
//     }else if(fsSlider.value == 4){
//         read.style.fontSize = '2.5em'
//     }else if(fsSlider.value == 5){
//         read.style.fontSize = '3em'
//     }else if(fsSlider.value == 6){
//         read.style.fontSize = '3.5em'
//     }
// })