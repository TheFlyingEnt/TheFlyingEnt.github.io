window.onload = function () {
    document.getElementById("buttonOne").onclick = inputOne;
    document.getElementById("buttonMinus").onclick = inputMinus;
    document.getElementById("buttonTwo").onclick = inputTwo;
    document.getElementById("buttonThree").onclick = inputThree;
    document.getElementById("buttonFour").onclick = inputFour;
    document.getElementById("buttonFive").onclick = inputFive;
    document.getElementById("buttonSix").onclick = inputSix;
    document.getElementById("buttonSeven").onclick = inputSeven;
    document.getElementById("buttonEight").onclick = inputEight;
    document.getElementById("buttonNine").onclick = inputNine;
    document.getElementById("buttonZero").onclick = inputZero;
    document.getElementById("buttonDot").onclick = inputDot;
    document.getElementById("buttonPlus").onclick = inputPlus;
    document.getElementById("buttonMinus").onclick = inputMinus;
    document.getElementById("buttonMulti").onclick = inputMulti;
    document.getElementById("buttonDiv").onclick = inputDiv;
    document.getElementById("buttonMod").onclick = inputMod;
    document.getElementById("buttonClearEvery").onclick = inputCE;
    document.getElementById("buttonClear").onclick = inputClear;
    document.getElementById("buttonEquals").onclick = inputEqual;

}


let currentValue = "";
let previousValue = "";
let stringCompute = "";

function txtViewer(current, previous) {
    document.getElementById('lblCalPrevious').innerHTML = previous//currentValue.toString();
    console.log("Updated previousValue = " + previous);//currentValue.toString());

    document.getElementById('lblCalCurrent').innerHTML = current;//currentValue.toString();
    console.log("Updated currentValue = " + current);//currentValue.toString());
    console.log("----------------------");
}

function compute(action) {
    var resultValue;
    var tempPre = "";
    let tempCur = "";
    switch (action) {
        case " +":
            previousValue  = parseFloat(previousValue) + parseFloat(currentValue);
            //tempPre = parseFloat(previousValue) + 100000000;
            //tempCur = parseFloat(currentValue) + 100000000;
            //previousValue = (tempPre + tempCur) / 100000000;
            break
        case " -":
            previousValue = parseFloat(previousValue) - parseFloat(currentValue);
            //tempPre = parseFloat(previousValue) * 100000000;
            //tempCur = parseFloat(currentValue) * 100000000;
            //previousValue = (tempPre - tempCur) / 100000000;
            break
        case " *":
            previousValue = parseFloat(previousValue) * parseFloat(currentValue);
            //tempPre = parseFloat(previousValue) * 100000000;
            //tempCur = parseFloat(currentValue) * 100000000;
            //previousValue = (tempPre * tempCur) / 100000000;
            break
        case " /":
            //tempPre = parseFloat(previousValue) * 100000000;
            //tempCur = parseFloat(currentValue) * 100000000;
            previousValue = parseFloat(previousValue) / parseFloat(currentValue);
            break
        case " %":
            previousValue = parseFloat(previousValue) % parseFloat(currentValue);
            break
        default:
            return;
    }
    return;
}



function inputNumber(number) {
    switch (number) {
        case 1:
            currentValue = currentValue + "1";
            txtViewer(currentValue);
            break;
        case 2:
            currentValue = currentValue + "2";
            txtViewer(currentValue);
            break;
        case 3:
            currentValue = currentValue + "3";
            txtViewer(currentValue);
            break;
        case 4:
            currentValue = currentValue + "4";
            txtViewer(currentValue);
            break;
        case 5:
            currentValue = currentValue + "5";
            txtViewer(currentValue);
            break;
        case 6:
            currentValue = currentValue + "6";
            txtViewer(currentValue);
            break;
        case 7:
            currentValue = currentValue + "7";
            txtViewer(currentValue);
            break;
        case 8:
            currentValue = currentValue + "8";
            txtViewer(currentValue);
            break;
        case 9:
            currentValue = currentValue + "9";
            txtViewer(currentValue);
            break;
        case 0:
            currentValue = currentValue + "0";
            txtViewer(currentValue);
            break;
        default:
            console.log("Error on inputNumber");
    }

}



function inputOne() {
    currentValue = currentValue + "1";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputTwo() {
    currentValue = currentValue + "2";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputThree() {
    currentValue = currentValue + "3";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputFour() {
    currentValue = currentValue + "4";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputFive() {
    currentValue = currentValue + "5";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputSix() {
    currentValue = currentValue + "6";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputSeven() {
    currentValue = currentValue + "7";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputEight() {
    currentValue = currentValue + "8";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputNine() {
    currentValue = currentValue + "9";
    txtViewer(currentValue, previousValue + stringCompute);
}

function inputZero() {
    currentValue = currentValue + "0";
    txtViewer(currentValue, previousValue + stringCompute);
}


function inputPlus() {
    if (previousValue == "")
    {
        previousValue =  currentValue;
    }
    else
    {
        //previousValue = previousValue + currentValue; //parseFloat()
        compute(stringCompute);
    }
    currentValue = "";
    console.log("inputPlus Ran!");
    stringCompute = " +"
    txtViewer(currentValue, previousValue + " + ");
}

function inputMinus() {
    if (previousValue == "")
    {
        previousValue =  currentValue;
    }
    else
    {
        //previousValue = previousValue - currentValue;
        compute(stringCompute);
    }
    currentValue = "";
    stringCompute = " -"
    console.log("inputMinus Ran!");
    txtViewer(currentValue, previousValue + " - ");
}

function inputMulti() {
    if (previousValue == "")
    {
        previousValue =  currentValue;
    }
    else
    {
        //previousValue = previousValue * currentValue;
        compute(stringCompute);
    }
    currentValue = "";
    stringCompute = " *"
    console.log("inputMulti Ran!");
    txtViewer(currentValue, previousValue + " * ");
}

function inputDiv() {
    if (previousValue == "")
    {
        previousValue =  currentValue;
    }
    else
    {
        //previousValue = previousValue / currentValue;
        compute(stringCompute);
    }
    currentValue = "";
    stringCompute = " /"
    console.log("inputDiv Ran!");
    txtViewer(currentValue, previousValue + " / ");
}

function inputMod() {
    if (previousValue == "")
    {
        previousValue =  currentValue;
    }
    else
    {
        //previousValue = previousValue % currentValue;
        compute(stringCompute);
    }
    currentValue = "";
    stringCompute = " %"
    console.log("inputMod Ran!");
    txtViewer(currentValue, previousValue + " % ");
}

function inputDot(){
    if (currentValue.indexOf('.') > -1)
    {
        alert("Error: Already '.' exist");
    }
    else
    {
        currentValue = currentValue + ".";
        txtViewer(currentValue, previousValue + stringCompute);
    }
}

function inputClear() {
    currentValue = "";
    txtViewer(currentValue, previousValue);

}

function inputEqual() {
    compute(stringCompute);
    //          Current         Prev
    txtViewer(previousValue, " ");
    previousValue = "";

}

function inputCE() {
    currentValue = "";
    previousValue = "";
    stringCompute = ""
    txtViewer(currentValue, previousValue);

}