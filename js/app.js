const testMode = false;
let lives = 3;

document.querySelector("#livesLeft").innerHTML = "Lives: 3";
const clickme = document.querySelector('#clickme');
const elseConditions = () => { if (lives <= 1) {
    lives--;

    livesUpdate();
    alert('Game Over!');
    return

} else {
    lives--;
    livesUpdate();
    alert('Oops! Try again.');
}};
const position2 = document.querySelector('#position2');
const position3 = document.querySelector('#position3');
const position4 = document.querySelector('#position4');
const position5 = document.querySelector('#position5');
const position6 = document.querySelector('#position6');
const position7 = document.querySelector('#position7');
const position8 = document.querySelector('#position8');
const position9 = document.querySelector('#position9');

const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
const p5 = document.querySelector('#p5');
const p6 = document.querySelector('#p6');
const p7 = document.querySelector('#p7');
const p8 = document.querySelector('#p8');
const p9 = document.querySelector('#p9');

let livesUpdate = () => {
    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`
};
window.addEventListener('load', () => {
    //console.log("page is fully loaded. this will turn into a pop up later")
    alert('Orion needs help!  Solve the math problems to help him get back to his home planet.')
});

const handlePromptQuestion2 = (e) => {
    //console.log("position two works")
    let answer1 = prompt("4 * 4 =");
    if (testMode || answer1 == "16") {
        p2.style.opacity = 1;
        p1.style.opacity = 0;
        position3.append(clickme);
        position2.removeEventListener('click', handlePromptQuestion2);
        position3.addEventListener('click', handlePromptQuestion3);
        return
    } 
    elseConditions();
};


document.querySelector('#position2').addEventListener('click', handlePromptQuestion2);

const handlePromptQuestion3 = (e) => {

    let answer1 = prompt("5 * 9 =");
    if (testMode || answer1 == "45") {
        p3.style.opacity = 1;
        p2.style.opacity = 0;
        position4.append(clickme);
        position3.removeEventListener('click', handlePromptQuestion3);
        position4.addEventListener('click', handlePromptQuestion4);
        return
    } 
    elseConditions();
};

const handlePromptQuestion4 = (e) => {
    let answer1 = prompt("3 * 7 =");
    if (testMode || answer1 == "21") {
        p4.style.opacity = 1;
        p3.style.opacity = 0;
        position5.append(clickme);
        position4.removeEventListener('click', handlePromptQuestion4);
        position5.addEventListener('click', handlePromptQuestion5);
        return
    } 
    elseConditions();
};

const handlePromptQuestion5 = (e) => {

    let answer1 = prompt("6 * 8 =");
    if (testMode || answer1 == "48") {
        p5.style.opacity = 1;
        p4.style.opacity = 0;
        position6.append(clickme);
        position5.removeEventListener('click', handlePromptQuestion5);
        position6.addEventListener('click', handlePromptQuestion6);
        return
    } 
    elseConditions();
};
const handlePromptQuestion6 = (e) => {

    let answer1 = prompt("2 * 9 =");
    if (testMode || answer1 == "18") {
        p6.style.opacity = 1;
        p5.style.opacity = 0;
        position7.append(clickme);
        position6.removeEventListener('click', handlePromptQuestion6);
        position7.addEventListener('click', handlePromptQuestion7);
        return
    } 
    elseConditions();
};
const handlePromptQuestion7 = (e) => {

    let answer1 = prompt("4 * 7");
    if (testMode || answer1 == "28") {
        p7.style.opacity = 1;
        p6.style.opacity = 0;
        position8.append(clickme);
        position7.removeEventListener('click', handlePromptQuestion7);
        position8.addEventListener('click', handlePromptQuestion8);
        return
    } 
    elseConditions();
};
const handlePromptQuestion8 = (e) => {

    let answer1 = prompt(" 8 * 3");
    if (testMode || answer1 == "24") {
        p8.style.opacity = 1;
        p7.style.opacity = 0;
        position9.append(clickme);
        position8.removeEventListener('click', handlePromptQuestion8);
        position9.addEventListener('click', handlePromptQuestion9);
        return
    }
    elseConditions();
};
const handlePromptQuestion9 = (e) => {

    let answer1 = prompt("8 * 8");
    if (testMode || answer1 == "64") {
        p9.style.opacity = 1;
        p8.style.opacity = 0;
        clickme.style.opacity=0;
        position9.removeEventListener('click', handlePromptQuestion8);
        alert('Congratulations on getting Orion home and clearing level 1!');
        return
    } 
    elseConditions();
};






    // function for creating random addition problem
    // input check ---> if correct answer, prompt pop up 'correct!' and move orion to next position
    // input check --> if incorrect answer, take half a life heart and prompt second chance, third, etc.                                         
    // if all hearts exhausted, "Game over.  Would you like to try again?"
    // if yes, return to start position
    // continue until last position
    // at home planet, pop up "Thanks for getting me home!"
    // possibly next level?