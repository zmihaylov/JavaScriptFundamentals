//Task1

function getLastDigitName() {
    var number = parseInt(document.getElementById('lastDigitOfNumber').value),
        lastDigit = number % 10,
        lastDigitAsString = '';

    switch (lastDigit) {
        case 0: lastDigitAsString = 'zero'; break;
        case 1: lastDigitAsString = 'one'; break;
        case 2: lastDigitAsString = 'two'; break;
        case 3: lastDigitAsString = 'three'; break;
        case 4: lastDigitAsString = 'four'; break;
        case 5: lastDigitAsString = 'five'; break;
        case 6: lastDigitAsString = 'six'; break;
        case 7: lastDigitAsString = 'seven'; break;
        case 8: lastDigitAsString = 'eigth'; break;
        case 9: lastDigitAsString = 'nine'; break;
    }

    document.getElementById('lastDigit').innerHTML = lastDigitAsString;
}

//Task2

function reverseNumber() {
    var number = document.getElementById('originalNumber').value,
        reversedNumber = number.split('').reverse().join('');

    document.getElementById('reversedNumber').innerHTML = reversedNumber;
    
}

//Task3

function getWordCount() {
    var choice = document.querySelector('input[name= "choice"]:checked').value,
        sensitive = (choice === 'On' ? true : false),
        word = document.getElementById('word').value,
        text = document.getElementById('inputText').value,
        splittedText = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").split(' '), // clear all punctoation and split by space
        result = getCount(splittedText, word, sensitive);

    document.getElementById('resultCount').innerHTML = result;
}

function getCount(wordsArray, searchedWord, sens) {
    var count = 0;

    if (sens) {
        for (var i = 0; i < wordsArray.length; i++) {
            if (searchedWord === wordsArray[i]) {
                count++;
            }
        }
    }
    else {
        var low = searchedWord.toLowerCase();

        for (var i = 0; i < wordsArray.length; i++) {
            if (low === wordsArray[i].toLowerCase()) {
                count++;
            }
        }
    }

    return count;
}
// Task4

function countDivElements() {
    var divs = document.getElementsByTagName('div');
    document.getElementById('divElementsCount').innerHTML = divs.length;
}

function createNewDivElement() {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<h1> Here is your new div element! </h1>';
    document.getElementById('divContainer').appendChild(newDiv);
}

function deleteDivElement() {
    var parentDiv = document.getElementById('divContainer');

    if (parentDiv.getElementsByTagName('div').length > 0) {
        parentDiv.removeChild(parentDiv.firstChild);
    }
}

//Task5

function getNumberOccurrences() {
    var arrayOfNumbers = document.getElementById('arrayOfNumbers').value.split(/\s*,\s*/).map(parseInt),
        searchedNumber = parseInt(document.getElementById('enteredNumber').value),
        result = countOccurences(arrayOfNumbers, searchedNumber);

    document.getElementById('numberOccurences').innerHTML = result;
}

function countOccurences(array, number) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }

    return count;
}

function testGetNumOccurances() {
    var testArr = [4, 34, 43, 2, 9, 4, 9, -56, 4, 17, 34, 4, 2, 11, 9];

    if (countOccurences(testArr,4) === 4 &&
        countOccurences(testArr,9) === 3 &&
        countOccurences(testArr,-56) === 1 && 
        countOccurences(testArr,0) === 0) {
        document.getElementById('testResult').innerHTML = 'Correct!';
    }
    else {
        document.getElementById('testResult').innerHTML = 'Incorrect!';
    }
}

//Task6

function checkPositionNeighbours() {
    var array = document.getElementById('givenArray').value.split(/\s*,\s*/).map(parseInt),
        position = parseInt(document.getElementById('givenPosition').value);

    if (position <= 0 || position >= array.length - 1) {
        document.getElementById('biggerElement').innerHTML = 'Not a good position!';
    }
    else {
        if (array[position] > array[position - 1] && array[position] > array[position + 1]) {
            document.getElementById('biggerElement').innerHTML = 'Bigger!';
        }
        else {
            document.getElementById('biggerElement').innerHTML = 'Smaller!';
        }
    }
}

//Task7

function findFirstBiggerElement() {
    var array = document.getElementById('inputArray').value.split(/\s*,\s*/).map(parseInt);

    for (var i = 1; i < array.length - 1; i++) {
        var current = array[i];
        if (current > array[i - 1] && current > array[i + 1]) {
            document.getElementById('firstBiggerNumber').innerHTML = i;
            return;
        }
    }

    document.getElementById('firstBiggerNumber').innerHTML = 'No such element!';
}