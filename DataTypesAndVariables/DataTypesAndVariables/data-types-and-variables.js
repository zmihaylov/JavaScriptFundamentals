// Assign all the possible JavaScript literals to different variables.

var intVariable = 5;
var floatVariable = 5.01;
var stringVariable = 'Golem sum tarikat s tiq stringove';
var boolenVariable = true;
var array = [1, 2, 3, 4, 5];
var obj = { course: 'JS', part: 1 };
var func = function () { return; };
var nullVariable = null;
var undefinedVariable = undefined;

// Create a string variable with quoted text in it. For example: 'How you doin'?', Joey said.

var joeyString = "'How you doin'?', Joey said.";
console.log(joeyString);

var joeyStringTwo = '\'How you doin\'?\', Joey said.';
console.log(joeyStringTwo);

// Try typeof on all variables you created.

var variables = [intVariable, floatVariable, stringVariable, boolenVariable, array, obj, func, nullVariable, undefinedVariable];

for (index in variables) {
    console.log(getTypeOfVar(variables[index]));
}

function getTypeOfVar(variable) {
    var result = variable;
    result += ' is ' + typeof variable;
    return result;
}