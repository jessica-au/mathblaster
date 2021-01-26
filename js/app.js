// game functions:
console.log("this works");
//start at first div
//pop up with instructions ("Help Orion get home by answering the questions along his path!")
window.addEventListener('load', () => {
console.log("page is fully loaded. this will turn into a pop up later")
//alert('Orion needs help!  Solve the math problems to help him get back to his home planet.')
});
//event listener for click on second div
document.querySelector("#position2").addEventListener('click', () => {
    console.log("position two works")
});
// function for creating random addition problem
// input check ---> if correct answer, prompt pop up 'correct!' and move orion to next position
// input check --> if incorrect answer, take half a life heart and prompt second chance, third, etc.                                         
    // if all hearts exhausted, "Game over.  Would you like to try again?"
    // if yes, return to start position
// continue until last position
// at home planet, pop up "Thanks for getting me home!"
// possibly next level?