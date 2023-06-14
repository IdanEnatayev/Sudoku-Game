// Function that hide every div except the login div when the site onload

function deFault() {

    document.getElementById("chooseDiv").style.display = "none";
    document.getElementById("board").style.display = "none";

}


// The first Page


// Title

let element = document.createElement("h1");
element.innerHTML = "Sudoku Game";
element.setAttribute("id", "tItle");
element.classList.add("animate-charcter");
document.getElementById("login").appendChild(element);

// Space

let space = document.createElement("br");
document.getElementById("login").appendChild(space);

// Space

let space2 = document.createElement("br");
document.getElementById("login").appendChild(space2);

// Enter User Name

let element1 = document.createElement("input");
element1.setAttribute("type", "text");
element1.setAttribute("id", "userName");
element1.setAttribute("placeholder", "User Name");
document.getElementById("login").appendChild(element1);

// Space

let space3 = document.createElement("br");
document.getElementById("login").appendChild(space3);

// Enter Password

let element2 = document.createElement("input");
element2.setAttribute("type", "password");
element2.setAttribute("id", "passWord");
element2.setAttribute("placeholder", "Password");
document.getElementById("login").appendChild(element2);

// Error Message

let label = document.createElement("label");
label.innerHTML = "*Incorrect Username Or Password*";
label.setAttribute("id", "label1");
document.getElementById("login").appendChild(label);


// Login Button 

let element3 = document.createElement("button");
element3.setAttribute("id", "loginButtom");
element3.setAttribute("onclick", "nextDiv()");
element3.innerHTML = "Login";
document.getElementById("login").appendChild(element3);


/* Function that moving from the first page to second page,
   Verify the user,
   And open the user's name on the next page
*/

targetDiv = document.getElementById("login");
cd = document.getElementById("chooseDiv")
targetDiv2 = document.getElementById("board");
btn = document.getElementById("loginButtom");

function nextDiv() {

    let u = document.getElementById("userName").value;
    let p = document.getElementById("passWord").value;
    if (u == 'abcd' && p == '1234') {
        targetDiv.style.display = "none";
        targetDiv2.style.display = "none";
        cd.style.display = "block";
        document.getElementById("userRandom").innerHTML = document.getElementById("userName").value;
        const audioTrue = new Audio("sounds/Discord_Connect_Sound.mp3");
        audioTrue.play();
    }
    else {
        document.getElementById("label1").style.display = "inline";
        targetDiv.style.display = "block";
        const audioFalse = new Audio("sounds/Icq_old_sound.mp3");
        audioFalse.play();
    }
}


//The Second Page


// Title
let element4 = document.createElement("h1");
element4.innerHTML = "Welcome <span id=userRandom>----</span>";
element4.setAttribute("id", "tItle2");
document.getElementById("chooseDiv").appendChild(element4);

// Space
let space4 = document.createElement("br");
document.getElementById("chooseDiv").appendChild(space4);

// Second Title

let element5 = document.createElement("h2");
element5.innerHTML = "Choose Difficult";
element5.setAttribute("id", "aNODERTITLE");
document.getElementById("chooseDiv").appendChild(element5);

// Space

let space5 = document.createElement("br");
document.getElementById("chooseDiv").appendChild(space5);

// Div For Buttons

let button1 = document.createElement("div");
button1.innerHTML = "";
button1.setAttribute("id", "button3");
document.getElementById("chooseDiv").appendChild(button1);

// Difficulty Level Button - Easy

let element6 = document.createElement("button");
element6.setAttribute("id", "baby");
element6.addEventListener("click", () => { lvlel(2) })
document.getElementById("button3").appendChild(element6);

// Difficulty Level Button - Normal

let element7 = document.createElement("button");
element7.setAttribute("id", "adult");
element7.addEventListener("click", () => { lvlel(4) })
document.getElementById("button3").appendChild(element7);

// Difficulty Level Button - Hard

let element8 = document.createElement("button");
element8.setAttribute("id", "oldman");
element8.addEventListener("click", () => { lvlel(6) })
document.getElementById("button3").appendChild(element8);

// Div For Letters

let divDifficult = document.createElement("div");
divDifficult.setAttribute("id", "divDifficult");
document.getElementById("chooseDiv").appendChild(divDifficult);

// Difficulty Level Caption Under The Button - Easy

let easy = document.createElement("label");
easy.innerHTML = "Easy";
easy.setAttribute("id", "divDifficultEasy");
document.getElementById("divDifficult").appendChild(easy);
// Difficulty Level Caption Under The Button - Normal

let normal = document.createElement("label");
normal.innerHTML = "Normal";
normal.setAttribute("id", "divDifficultNormal");
document.getElementById("divDifficult").appendChild(normal);

// Difficulty Level Caption Under The Button - Hard

let hard = document.createElement("label");
hard.innerHTML = "Hard";
hard.setAttribute("id", "divDifficultHard");
document.getElementById("divDifficult").appendChild(hard);

// Space

let space6 = document.createElement("br");
document.getElementById("chooseDiv").appendChild(space6);

// Space

let space7 = document.createElement("br");
document.getElementById("chooseDiv").appendChild(space7);


//The Third Page


// Title

let element10 = document.createElement("h1");
element10.innerHTML = "Good Luck";
element10.setAttribute("id", "tItle3");
document.getElementById("board").appendChild(element10);

// Div For Sudoku Board

let sudokuDiv = document.createElement("div");
sudokuDiv.setAttribute("id", "sudokuDiv");
document.getElementById("board").appendChild(sudokuDiv);

let sudokuB = document.createElement("div");
sudokuB.setAttribute("id", "sudokuB");
document.getElementById("sudokuDiv").appendChild(sudokuB);


// The sudoku board data and the order of their display at random

let randomBorde = [...randomSud()]
function randomSud() {
    let num = Math.floor(Math.random() * 3);
    if (num == 1) {
        return [
            [9, 6, 4, 2, 5, 8, 3, 7, 1],
            [3, 7, 8, 1, 6, 9, 4, 5, 2],
            [2, 5, 1, 3, 7, 4, 8, 9, 6],
            [7, 9, 5, 4, 2, 6, 1, 3, 8],
            [8, 3, 2, 7, 9, 1, 6, 4, 5],
            [4, 1, 6, 8, 3, 5, 7, 2, 9],
            [1, 2, 3, 9, 8, 7, 5, 6, 4],
            [5, 4, 9, 6, 1, 3, 2, 8, 7],
            [6, 8, 7, 5, 4, 2, 9, 1, 3]
        ];
    }
    if (num == 2) {
        return [
            [4, 5, 7, 8, 6, 9, 1, 2, 3],
            [1, 3, 8, 2, 7, 4, 6, 5, 9],
            [9, 2, 6, 3, 5, 1, 8, 4, 7],
            [2, 9, 4, 6, 3, 7, 5, 1, 8],
            [6, 7, 3, 5, 1, 8, 4, 9, 2],
            [5, 8, 1, 4, 9, 2, 3, 7, 6],
            [7, 6, 9, 1, 4, 3, 2, 8, 5],
            [3, 4, 2, 9, 8, 5, 7, 6, 1],
            [8, 1, 5, 7, 2, 6, 9, 3, 4]
        ];
    }
    else {
        return [
            [8, 1, 2, 7, 5, 3, 6, 4, 9],
            [9, 4, 3, 6, 8, 2, 1, 7, 5],
            [6, 7, 5, 4, 9, 1, 2, 8, 3],
            [1, 5, 4, 2, 3, 7, 8, 9, 6],
            [3, 6, 9, 8, 4, 5, 7, 2, 1],
            [2, 8, 7, 1, 6, 9, 5, 3, 4],
            [5, 2, 1, 9, 7, 4, 3, 6, 8],
            [4, 3, 8, 5, 2, 6, 9, 1, 7],
            [7, 9, 6, 3, 1, 8, 4, 5, 2]
        ];
    }
}


// Creation Of The Sudoku Board

let borde = document.getElementById('sudokuDiv');
let table = document.createElement('table');

function showSUd() {
    borde.appendChild(table)
    for (let i = 0; i < 9; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr)
        for (let j = 0; j < 9; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            let inputElement = document.createElement('input');
            inputElement.setAttribute("type", "text")
            inputElement.setAttribute("ondrop", "return false")
            inputElement.setAttribute("onpaste", "return false")
            inputElement.setAttribute("onkeypress", "javascript:return isNumber(event)")

            td.appendChild(inputElement);
            inputElement.id = `in${[i]}${[j]}`;
            inputElement.min = '1'
            inputElement.max = '9'
            inputElement.classList.add("inputation");
            inputElement.maxLength = "1";

            if ((j % 9 == 2) || (j % 9 == 5)) {
                inputElement.style.borderRightWidth = '7px';
            }

            if ((i % 9 == 2) || (i % 9 == 5)) {
                inputElement.style.borderBottomWidth = '7px';
            }
        }
    }
}


// Function that creating The Random Numbers that disappear 

let borde1 = []
let matborde = []

function lvlel(lvl) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let randomNum = Math.floor((Math.random() * 9));
            let inputElement = document.getElementById(`in${[i]}${[j]}`);
            if ((randomNum <= lvl)) {
                inputElement.value = '';
                inputElement.classList.add("inputation");

            }
            else {
                inputElement.value = randomBorde[i][j]
                inputElement.disabled = true
                inputElement.style.background = '#d7e5ea'
            }
            borde1.push(inputElement.value)
            console.log(matborde)
        }
        matborde.push(borde1)
        borde1 = []
    }
    targetDiv2.style.display = 'block'
    targetDiv.style.display = 'none'
    cd.style.display = 'none'
    const audioClick = new Audio("sounds/Click_Sound_Effect_HD_.mp3");
    audioClick.play();
}

// Function that limit the input of the sudoku board to only numbers

function isNumber(event) {
    var charCode = event.which
    if (charCode > 32 && (charCode < 49 || charCode > 57))
        return false;
}

// Function that clear the data that the user has filled in

function clerBorde() {
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            let inputElement = document.getElementById(`in${[i]}${[j]}`)
            inputElement.value = matborde[i][j]
            
        }
    }
}

// Function that checking if the user's result is true or false

function checkMat() {
    for (row = 0; row < 9; row++) {
        for (col = 0; col < 9; col++) {
            if (document.getElementById(`in${[row]}${[col]}`).value != randomBorde[row][col]) {
                document.getElementById("label2").style.display = "inline";
                const audioFalse2 = new Audio("sounds/Oh_Shit_Sound_Effect.mp3");
                audioFalse2.play();
                label2.innerHTML = "* Incorrect Solution - Try Again *";
                label2.style.display = "inline"
                label2.style.color = "red"
                return false
            }
        }
    }
    label2.innerHTML = "* Good Job *";
    label2.style.display = "inline"
    label2.style.color = "greenyellow"
    const audioTrue2 = new Audio("sounds/PewDiePie Sound Effect - Wow .mp3");
    audioTrue2.play();
    return true
}


// / Space

let space9 = document.createElement("br");
document.getElementById("board").appendChild(space9);

// Div's error Message

let label2Div = document.createElement("label");
label2Div.setAttribute("id", "label2Div");
document.getElementById("board").appendChild(label2Div);

// Error Message

let label2 = document.createElement("label");
label2.setAttribute("id", "label2");
document.getElementById("label2Div").appendChild(label2);

// Div For Buttons

let button2 = document.createElement("div");
button2.setAttribute("id", "button2");
document.getElementById("board").appendChild(button2);

// Checking Button

let element12 = document.createElement("button");
element12.setAttribute("class", "button2");
element12.setAttribute("id", "finish");
element12.innerHTML = "Finish";
document.getElementById("button2").appendChild(element12);
const elementF = document.getElementById("finish");
elementF.addEventListener("click", () => { checkMat() });

// Clear Button 

let element13 = document.createElement("button");
element13.setAttribute("class", "button2");
element13.setAttribute("id", "again");
element13.innerHTML = "Again";
document.getElementById("button2").appendChild(element13);
const elementR = document.getElementById("again");
elementR.addEventListener("click", () => { clerBorde() });

// Space

let space11 = document.createElement("br");
document.getElementById("board").appendChild(space11);


// Functions that start running when the site onload

window.onload = function () {
    deFault()
    showSUd()
}
