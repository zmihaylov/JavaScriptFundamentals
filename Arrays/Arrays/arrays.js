function printArray(array, element) {
    console.log(array.join(', '));
    document.getElementById(element).innerHTML = array.join(', ');
}

// Task1
function getArray() {
    var array = [];

    for (var i = 0; i < 20; i++) {
        array[i] = i * 5;
    }

    printArray(array, 'multiplyIndexBy5');
}

// Task2

function compareLexicog() {
    var arrayOne = document.getElementById('arrayOne').value.split(/\s*,\s*/),
        arrayTwo = document.getElementById('arrayTwo').value.split(/\s*,\s*/),
        result = '',
        maxLength = arrayOne.length;

    if (maxLength < arrayTwo.length) {
        maxLength = arrayTwo.length;
    }

    for (var i = 0; i < maxLength; i++) {
        result += arrayOne[i];

        if (arrayOne[i] < arrayTwo[i]) {
            result += ' > '
        }
        else if (arrayOne[i] > arrayTwo[i]) {
            result += ' < '
        }
        else {
            result += ' = '
        }

        result += arrayTwo[i] + '; ';
    }

    document.getElementById('compareResult').innerHTML = result;
}

//Task 3
function findLongestSequence() {
    var array = document.getElementById('enteredArray').value.split(/\s*,\s*/).map(Number),
        maxSeq = 1,
        seqNumber = 0,
        tempCount = 1,
        previous = array[0];


    for (var i = 1; i < array.length; i++) {

        if (previous === array[i]) {
            tempCount++;
        }

        if (tempCount > maxSeq) {
            maxSeq = tempCount;
            seqNumber = previous;
            tempCount = 1;
        }

        previous = array[i];
    }

    for (var i = 0; i < maxSeq; i++) {
        document.getElementById('longestSequence').innerHTML += seqNumber + ' ';
    }
}

//Task 4
function findMaxIncreasingSeq() {
    var array = document.getElementById('enterToFind').value.split(/\s*,\s*/).map(Number),
        previous = array[0],
        max = [],
        current = [];

    current.push(previous)

    for (var i = 1; i < array.length; i++) {

        if (previous < array[i]) {
            current.push(array[i]);
        }
        else {
            current = [];
            current.push(array[i]);
        }

        if (current.length > max.length) {
            max = current;
        }

        previous = array[i];
    }

    printArray(max, 'printLongestIncreasing');
}

// Task 5

function sortArray() {
    var array = document.getElementById('enterToUseSelectionSort').value.split(/\s*,\s*/).map(Number),
        sorted = selectionSort(array)
    printArray(sorted, 'sortedArray');
}

function selectionSort(unsortedArray) {
    var arrayToBeSort = [],
        minIndex,
        index;

    while (unsortedArray.length) {

        index = 1;
        minIndex = 0;

        while (index < unsortedArray.length) {

            if (unsortedArray[minIndex] > unsortedArray[index]) {
                minIndex = index;
            }
            index++;
        }

        arrayToBeSort.push(unsortedArray[minIndex]);
        unsortedArray.splice(minIndex, 1);
    }

    return arrayToBeSort;
}

// Task 6

function findMostFrequent() {
    var array = document.getElementById('frequent').value.split(/\s*,\s*/).map(Number),
        maxCount = 0,
        tempCount = 0,
        number;

    for (var i = 0; i < array.length; i++) {
        tempCount = 0;

        for (var j = 0; j < array.length; j++) {

            if (array[i] === array[j]) {
                tempCount++;
            }
        }

        if (tempCount > maxCount) {
            maxCount = tempCount;
            number = array[i];
        }
    }

    document.getElementById('printMostFrequent').innerHTML = number + ' (' + maxCount + ' times)';
}

// Task 7

function findElement() {
    var array = document.getElementById('arrayToPerformBinary').value.split(/\s*,\s*/).map(Number);
    var sortedArray = selectionSort(array);
    var searchedElement = parseInt(document.getElementById('searchedValue').value);
    console.log(sortedArray.join(', '));

    document.getElementById('foundElement').innerHTML = 'The index of the searched value is ' + binarySearch(array, searchedElement, 0, sortedArray.length - 1);
}

function binarySearch(array, target, left, right) {

    if (left > right) {
        return -1;
    }

    var middle = Math.floor((left + right) / 2);

    if (target < array[middle]) {
        binarySearch(array, target, left, middle - 1);
    }
    else if (target > array[middle]) {
        binarySearch(array, target, middle + 1, right);
    }

    return middle;
}