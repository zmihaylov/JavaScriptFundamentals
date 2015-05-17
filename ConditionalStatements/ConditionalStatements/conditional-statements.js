function compareNumbers() {
    var first = document.getElementById('firstNumber').value,
    second = document.getElementById('secondNumber').value,
    temp;

    if (first > second) {
        temp = second;
        second = first;
        first = temp;
        console.log('Value exchanged');
    }

    console.log("First number --> " + first);
    console.log("Second number --> " + second);
    document.getElementById("compareResult").innerHTML = "First number --> " + first + "<br />" + "Second number --> " + second;
}

function findSign() {
    var first = Number(document.getElementById('firstSign').value),
        second = Number(document.getElementById('secondSign').value),
        third = Number(document.getElementById('thirdSign').value),
        numbers = [first, second, third],
        negativeCount = 0;

    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i]) {
            if (numbers[i] < 0) {
                negativeCount++;
            }
        }
        else {
            document.getElementById('signResult').innerHTML = 'ZERO';
            return;
        }

    }

    if (negativeCount % 2 === 0) {
        document.getElementById('signResult').innerHTML = 'The sign is +';
    }
    else {
        document.getElementById('signResult').innerHTML = 'The sign is -';
    }
}

function findBiggest() {
    var first = document.getElementById('one').value,
        second = document.getElementById('two').value,
        third = document.getElementById('three').value,
        max = first;

    if (first > second) {
        if (first > third) {
            max = first;
        }
        else {
            max = third;
        }
    }
    else {
        if (second > third) {
            max = second;
        }
        else {
            max = third;
        }
    }

    document.getElementById('biggestResult').innerHTML = 'The biggest is ' + max;
}

function sortNumbers() {
    var first = document.getElementById('firstToSort').value,
        second = document.getElementById('secondToSort').value,
        third = document.getElementById('thirdToSort').value;

    if (first > second) {
        if (first > third) {
            if (second > third) {
                printOntoTheDocument(first, second, third);
            }
            else {
                printOntoTheDocument(first, third, second);
            }
        }
        else {
            printOntoTheDocument(third, first, second);
        }
    }
    else {
        if (first > third) {
            printOntoTheDocument(second, first, third);
        }
        else {
            if (second > third) {
                printOntoTheDocument(second, third, first);
            }
            else {
                printOntoTheDocument(third, second, first);
            }
        }
    }

    function printOntoTheDocument(one, two, three) {
        document.getElementById('sortedNumbers').innerHTML = one + ' ' + two + ' ' + three;
    }
}

function digitName() {
    var digit = Number(document.getElementById('digit').value),
        result;

    switch (digit) {
        case 0: result = 'Zero'; break;
        case 1: result = 'One'; break;
        case 2: result = 'Two'; break;
        case 3: result = 'Three'; break;
        case 4: result = 'Four'; break;
        case 5: result = 'Five'; break;
        case 6: result = 'Six'; break;
        case 7: result = 'Seven'; break;
        case 8: result = 'Eight'; break;
        case 9: result = 'Nine'; break;
        default:
            result = 'not a digit';
    }

    document.getElementById('digitname').innerHTML = result;
}

function findRoots() {
    var a = parseFloat(document.getElementById('coeffA').value),
        b = parseFloat(document.getElementById('coeffB').value),
        c = parseFloat(document.getElementById('coeffC').value),
        x1 = 0,
        x2 = 0,
        disc = 0;

    if (a === 0) {
        x1 = x2 = -c / b;
    }
    else {
        disc = (b * b) - (4 * a * c);

        if (disc === 0) {
            x1 = x2 = (-b / (2 * a));
        }
        else if (disc > 0) {
            x1 = (-b + Math.sqrt(disc)) / (2 * a);
            x2 = (-b - Math.sqrt(disc)) / (2 * a);
        }
        else {
            document.getElementById('roots').innerHTML = 'No real roots!';
            return;
        }
    }

    document.getElementById('roots').innerHTML = 'x1 = ' + x1 + ' x2 = ' + x2;
}

function findGreates() {
    var one = parseFloat(document.getElementById("varOne").value),
        two = parseFloat(document.getElementById("varTwo").value),
        three = parseFloat(document.getElementById("varThree").value),
        four = parseFloat(document.getElementById("varFour").value),
        five = parseFloat(document.getElementById("varFive").value),
        max = one;

    //Kakto e po uslovie. Golqma zakachka si e ama e kakto po uslovieto, ako imam komentar ot tipa 'mogul si da izpolzvash edikakvo si za po lesno'
    //da izsuhnesh dano :D :D :D :D :D :D :D : 

    if (one > two) {
        
        if (one > three) {

            if (one > four) {

                if (one > five) {
                    max = one;
                }
                else {
                    max = five;
                }
            }
            else {
                
                if (four > five) {
                    max = four;
                }
                else {
                    max = five;
                }
            }
        }
        else {

            if (three > four) {
                
                if (three > five) {
                    max = three;
                }
                else {
                    max = five;
                }
            }
            else {
                if (four > five) {
                    max = four;
                }
                else {
                    max = five;
                }
            }
        }
    }
    else {
        if (two > three) {
            
            if (two > four) {

                if (two > five) {
                    max = two;
                }
                else {
                    max = five;
                }
            }
            else {
                
                if (four > five) {
                    max = four;
                }
                else {
                    max = five;
                }
            }
        }
        else {
            if (three > four) {
                
                if (three > five) {
                    max = three;
                }
                else {
                    max = five;
                }
            }
            else {
                if (four > five) {
                    max = four;
                }
                else {
                    max = five;
                }
            }
        }
    }

    document.getElementById('greatestResult').innerHTML = 'The biggest is ' + max;
}

function convertNumber() {
    var specials = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
        "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    var tens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    var numberToConvert = Number(document.getElementById('numberToConvert').value);

    if (numberToConvert < 0 || numberToConvert > 999) {
        console.log("No way man");
        document.getElementById("convertedNumber").innerHTML = "No way to pronounce! Use google";
        return;
    }

    var converted;

    if (numberToConvert < 20) {
        converted = specials[numberToConvert];
    }
    else if (numberToConvert > 19 && numberToConvert < 100) {
        var firstDigit = numberToConvert % 10;
        var secondDigit = Math.floor(numberToConvert / 10);

        if (firstDigit === 0) {
            converted = tens[secondDigit - 2];
        }
        else {
            converted = tens[secondDigit - 2] + ' ' + specials[firstDigit];
        }
    }
    else {
        var firstDigit = numberToConvert % 10;
        var secondDigit = Math.floor(numberToConvert / 10) % 10;
        var thirdDigit = Math.floor(numberToConvert / 100);

        if (firstDigit === 0 && secondDigit === 0) {
            converted = specials[thirdDigit] + ' hundred';
        }
        else if (secondDigit === 0 && firstDigit != 0) {
            converted = specials[thirdDigit] + ' hundred and ' + specials[firstDigit];
        }
        else if (secondDigit === 1) {
            converted = specials[thirdDigit] + ' hundred and ' + specials[secondDigit * 10 + firstDigit];
        }
        else {
            converted = specials[thirdDigit] + ' hundred and ' + tens[secondDigit - 2] + ' ' + specials[firstDigit];
        }
    }

    document.getElementById("convertedNumber").innerHTML = converted;
}