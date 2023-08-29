/*
    Project Requirements:
        Change the background color by the random generating rgb color by clicking a button
*/
// Steps to follow 
// Step-1: create onload handler
window.onload = () => {
    main();
}
function main(){
    // get the div container 
    const mainDiv = document.getElementById('div-id');
    //get the button
    const btn = document.getElementById('change-btn');
    //add event to btn
    btn.addEventListener('click',function(){
        const bgColor = generateRgbColor();
        //set the new color to the div
        mainDiv.style.backgroundColor = bgColor;
    })
}
// Step-2: create random color generated function 
function generateRgbColor(){
    //rgb(0,0,0) to rgb(255,255,255)
    //Math.random() gives the value from 0 to 1 in fraction mode
    //to get integer we can use floor()
    // 1. generate random color for red
    const red = Math.floor(Math.random()*255)
    // 2. generate random color for green
    const green = Math.floor(Math.random()*255)
    // 2. generate random color for blue
    const blue = Math.floor(Math.random()*255)

    // Make rgb string with template string
    return `rgb(${red},${green},${blue})`;
}
// Step-3: Collect all necessary Element by selector in main function

// Setp-4: Handle event 
