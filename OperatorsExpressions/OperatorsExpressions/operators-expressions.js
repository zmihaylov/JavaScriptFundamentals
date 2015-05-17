function isNumberOddOrEven() {
    var inputNumber = document.getElementById('oddOrEvenInteger').value;

    if (inputNumber % 2 === 1) {
        document.getElementById('oddOrEvenResult').innerHTML = 'Number is odd!';
    }
    else {
        document.getElementById('oddOrEvenResult').innerHTML = 'Number is even!';
    }
}

function isDivisibleBy5And7() {
    var inputNumber = document.getElementById('divisibleBy5And7').value;

    if (inputNumber % 35 === 0) {
        document.getElementById('divisibleResult').innerHTML = 'Number is divisible by 5 and 7 at the same time!';
    }
    else {
        document.getElementById('divisibleResult').innerHTML = 'It is not!!!';
    }
}


function calculateRectangleArea() {
    var width = document.getElementById('rectangleWidth').value,
        height = document.getElementById('rectangleHeight').value,
        area = width * height;

    document.getElementById('rectangleArea').innerHTML = 'The rectangle are is ' + area;
}

function checkThirdDigit() {
    var inputNumber = document.getElementById('thirdDigitCheck').value;

    if (inputNumber < -100 || inputNumber > 100) {
        if (inputNumber < 0) {
            inputNumber *= -1;
        }

        var result = Math.floor((inputNumber / 100) % 10) === 7;

        document.getElementById('thirdDigitResult').innerHTML = 'Third digit is 7 ---> ' + result;
    }
    else {
        document.getElementById('thirdDigitResult').innerHTML = 'Input number has less than three digits!';
    }
}

function checkThirdBit() {
    var inputNumber = document.getElementById('thirdBit').value,
        mask = 1,
        bitPosition = 3,
        result = (inputNumber >> bitPosition) & mask;

    document.getElementById('resultBit').innerHTML = 'Bit at 3rd position is ' + result;
}

function checkIfPointIsWithinCicle() {
    var pointX = document.getElementById('pointX').value,
        pointY = document.getElementById('pointY').value,
        radius = 5,
        result = Math.sqrt(pointX * pointX + pointY * pointY) <= 5;

    document.getElementById('resultPointWithinCircle').innerHTML = 'Point is within circle ---> ' + result;
}

function checkPrimeNumber() {
    var inputNumber = document.getElementById('primeNumber').value;

    for (var i = 2; i < Math.sqrt(inputNumber); i++) {
        
        if (inputNumber % i === 0) {
            document.getElementById('resultPrimeNumber').innerHTML = 'Number is not prime!';
            return;
        }

        document.getElementById('resultPrimeNumber').innerHTML = 'Number is prime!';
    }
}

function calculateTrapArea() {
    var sideA = document.getElementById('sideA').value,
        sideB = document.getElementById('sideB').value,
        height = document.getElementById('trapHeight').value,
        area = (sideA + sideB) * height / 2;

    document.getElementById("trapArea").innerHTML = "Trapezoid area is " + area;
}

function calculatePiontPosition() {
    var x = document.getElementById('anotherX').value,
        y = document.getElementById('anotherY').value,
        withinCircle,
        withinRect;

    withinCircle = Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= 3;
    withinRect = (x >= -1 && x <= 5) && (y >= -1 && y <= 1);
    console.log(withinCircle);
    console.log(withinRect);

    if (withinCircle && !withinRect) {
        document.getElementById('pointPosition').innerHTML = 'The condition is met!';
    }
    else {
        document.getElementById('pointPosition').innerHTML = 'The condition is not met!';
    }
}