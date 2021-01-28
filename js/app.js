let lives= 3;

document.querySelector("#livesLeft").innerHTML = "Lives: 3";
const position2 = document.querySelector('#position2')
document.querySelector('#position2').addEventListener('click', handlePromptQuestion2);

// game functions:
console.log("this works");
//start at first div
//pop up with instructions ("Help Orion get home by answering the questions along his path!")
window.addEventListener('load', () => {
console.log("page is fully loaded. this will turn into a pop up later")

//alert('Orion needs help!  Solve the math problems to help him get back to his home planet.')
});
// function changeOpacity = () -> {
// let startLocation = document.querySelector('position1')
//  if (startLocation.style.opacity === 1) {
//      startLocation.style.opacity = 0
//  }
// }
//let lives = document.querySelector('#livesAnchor').innerHTML 
const handlePromptQuestion2 =  (e) => {
    console.log("position two works")
    let answer1 = prompt("4 * 4 =" );

    //console.log(answer1);
//  for let(i=0; i<3; i++) {
        if (answer1 == "16") { 
        document.querySelector('#position2').style.opacity = 1;
        document.querySelector('#position1').style.opacity = 0;
        document.querySelector('#position2').removeEventListener('click', handlePromptQuestion2);
        document.querySelector('#position3').addEventListener('click', handlePromptQuestion3);
        return
        } else if (lives <= 1){
            lives--;

    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
            alert('Game Over!');
            return
            
    } else  { 
        lives--;

        document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
        alert('Oops! Try again.');
    }
};
const handlePromptQuestion3 =  (e) => {
    
    let answer1 = prompt("5 * 9 =");
        if (answer1 == "45") { 
        document.querySelector('#position3').style.opacity = 1;
        document.querySelector('#position2').style.opacity = 0;
        document.querySelector('#position3').removeEventListener('click', handlePromptQuestion3);
        document.querySelector('#position4').addEventListener('click', handlePromptQuestion4);
        return
        } else if (lives <= 1){
            lives--;
    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
            alert('Game Over!');
            return
    } else  { 
        lives--;
        document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
        alert('Oops! Try again.');
    }
};

const handlePromptQuestion4 =  (e) => {
    let answer1 = prompt("3 * 7 =");
        if (answer1 == "21") { 
        document.querySelector('#position4').style.opacity = 1;
        document.querySelector('#position3').style.opacity = 0;
        document.querySelector('#position4').removeEventListener('click', handlePromptQuestion4);
        document.querySelector('#position5').addEventListener('click', handlePromptQuestion5);
        return
        } else if (lives <= 1){
            lives--;
    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
            alert('Game Over!');
            return
    } else  { 
        lives--;
        document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
        alert('Oops! Try again.');
    }
};

const handlePromptQuestion5 =  (e) => {
    
    let answer1 = prompt("6 * 8 =");
        if (answer1 == "48") { 
        document.querySelector('#position6').style.opacity = 1;
        document.querySelector('#position5').style.opacity = 0;
        document.querySelector('#position5').removeEventListener('click', handlePromptQuestion5);
        document.querySelector('#position6').addEventListener('click', handlePromptQuestion6);
        return
        } else if (lives <= 1){
            lives--;
    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
            alert('Game Over!');
            return
    } else  { 
        lives--;
        document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
        alert('Oops! Try again.');
    }
};
const handlePromptQuestion6 =  (e) => {
    
    let answer1 = prompt("2 * 9 =");
        if (answer1 == "45") { 
        document.querySelector('#position7').style.opacity = 1;
        document.querySelector('#position6').style.opacity = 0;
        document.querySelector('#position6').removeEventListener('click', handlePromptQuestion6);
        document.querySelector('#position7').addEventListener('click', handlePromptQuestion7);
        return
        } else if (lives <= 1){
            lives--;
    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
            alert('Game Over!');
            return
    } else  { 
        lives--;
        document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
        alert('Oops! Try again.');
    }
};
const handlePromptQuestion7 =  (e) => {
    
    let answer1 = prompt("4 * 7");
        if (answer1 == "28") { 
        document.querySelector('#position8').style.opacity = 1;
        document.querySelector('#position7').style.opacity = 0;
        document.querySelector('#position7').removeEventListener('click', handlePromptQuestion7);
        document.querySelector('#position8').addEventListener('click', handlePromptQuestion8);
        return
        } else if (lives <= 1){
            lives--;
    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
            alert('Game Over!');
            return
    } else  { 
        lives--;
        document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
        alert('Oops! Try again.');
    }
};
const handlePromptQuestion8 =  (e) => {
    
    let answer1 = prompt(" 8 * 3");
        if (answer1 == "24") { 
        document.querySelector('#position9').style.opacity = 1;
        document.querySelector('#position8').style.opacity = 0;
        document.querySelector('#position8').removeEventListener('click', handlePromptQuestion8);
        return
        } else if (lives <= 1){
            lives--;
    document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
            alert('Game Over!');
            return
    } else  { 
        lives--;
        document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
        alert('Oops! Try again.');
    }
};
// const handlePromptQuestion9 =  (e) => {
    
//     let answer1 = prompt(" 3 * 6");
//         if (answer1 == "18") { 
//         document.querySelector('#position9').style.opacity = 1;
//         document.querySelector('#position8').style.opacity = 0;
//         return
//         } else if (lives <= 1){
//             lives--;
//     document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
//             alert('Game Over!');
//             return
//     } else  { 
    //         lives--;
    //         document.querySelector('#livesLeft').innerHTML = `Lives: ${lives}`;
    //         alert('Oops! Try again.');
    //     }
    // };
    
    
    
    // function for creating random addition problem
    // input check ---> if correct answer, prompt pop up 'correct!' and move orion to next position
    // input check --> if incorrect answer, take half a life heart and prompt second chance, third, etc.                                         
    // if all hearts exhausted, "Game over.  Would you like to try again?"
    // if yes, return to start position
    // continue until last position
    // at home planet, pop up "Thanks for getting me home!"
    // possibly next level?