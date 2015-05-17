function printNumbers() {
    var n = document.getElementById('endNumber').value;

    for (var i = 1; i <= n; i++) {
        document.getElementById('printedNumbers').innerHTML += i + ' ';
    }
}

function printNumbersNotDivisible() {
    var n = document.getElementById('againEnterEnd').value;

    for (var i = 1; i < n; i++) {
        
        if (i % 21 !== 0) {
            document.getElementById('notDivisible').innerHTML += i + ' ';
        }
    }
}

function findMinAndMax() {
    var numbers = document.getElementById('numbers').value
        .split(',')
        .map(Number);

    document.getElementById('minAndMaxNumber').innerHTML = 'Max: ' + findMax(numbers) + ' / Min: ' + findMin(numbers);
}

function findMax(array) {
    var max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

function findMin(array) {
    var min = array[0];

    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }

    return min;
}

function findProperties() {
    var choice = document.querySelector('input[name= "choose"]:checked').value;
    var typeOfChoice = document;

    if (choice === 'window') {
        typeOfChoice = window;
    }

    if (choice === 'navigator') {
        typeOfChoice = navigator;
    }

    var properties = [];
    for (var prop in typeOfChoice) {
        properties.push(prop);
    }
    document.getElementById('properties').innerHTML = 'Max: ' + findMax(properties) + ' / Min: ' + findMin(properties);

}