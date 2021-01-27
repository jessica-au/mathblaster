// game functions:
console.log("this works");
//start at first div
//pop up with instructions ("Help Orion get home by answering the questions along his path!")
window.addEventListener('load', () => {
console.log("page is fully loaded. this will turn into a pop up later")

//alert('Orion needs help!  Solve the math problems to help him get back to his home planet.')
});
//event listener for click on second div
document.querySelector('#position2').addEventListener('click', () => {
    console.log("position two works")
    prompt("4 * 4 =" );
    //create if statement for if info == 16 then change opacity of div1 to 0 and opacity of div 2 to 1
});
    
document.querySelector('#position3').addEventListener('click', () => {
    console.log("position three works")
    
});document.querySelector('#position4').addEventListener('click', () => {
    console.log("position four works")
    
});document.querySelector('#position5').addEventListener('click', () => {
    console.log("position five works")
    
});document.querySelector('#position6').addEventListener('click', () => {
    console.log("position six works")
    
});document.querySelector('#position7').addEventListener('click', () => {
    console.log("position seven works")
    
});document.querySelector('#position8').addEventListener('click', () => {
    console.log("position eight works")
    
});document.querySelector('#position9').addEventListener('click', () => {
    console.log("position nine works")
    
});

// function for creating random addition problem
// input check ---> if correct answer, prompt pop up 'correct!' and move orion to next position
// input check --> if incorrect answer, take half a life heart and prompt second chance, third, etc.                                         
    // if all hearts exhausted, "Game over.  Would you like to try again?"
    // if yes, return to start position
// continue until last position
// at home planet, pop up "Thanks for getting me home!"
// possibly next level?