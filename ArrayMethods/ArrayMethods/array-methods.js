// Task 1

function generatePeople() {
    function Person(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    var maleFirstNames = ['Pehso', 'Gosho', 'Kiro', 'Miro', 'Leo'];
    var maleLastNames = ['Krika', 'Skalata', 'Vinkela', 'Golemeca', 'Shtureca'];
    var femaleFirstNames = ['Mariq', 'Dimirtrinka', 'Kichka', 'Eli', 'Sasha'];
    var femaleLastNames = ['Kuchkuva', 'Grey', 'Belova', 'Gultova', 'Plueva'];
    var count = 10;
    var people = [];
    var i;

    for (i = 0; i < count; i++) {

        if (Math.random() < 0.5) {
            people.push(new Person(maleFirstNames[Math.floor((Math.random() * 5))],
                                   maleLastNames[Math.floor((Math.random() * 5))],
                                   Math.floor((Math.random() * 10) + (Math.random() * 50)),
                                   false));
        }
        else {
            people.push(new Person(femaleFirstNames[Math.floor((Math.random() * 5))],
                                   femaleLastNames[Math.floor((Math.random() * 5))],
                                   Math.floor((Math.random() * 10) + (Math.random() * 50)),
                                   true));
        }
    }

    return people;
}

console.log(generatePeople());
console.log('-----------------------------');
// task 2

function checkForAdults(people) {
    return people.every(function (person) {
        person.age >= 18;
    });
}

console.log(checkForAdults(generatePeople()));
console.log('-----------------------------');

// task 3

function printAllMinors(people) {
    people.filter(function (person) {
        return person.age < 18;
    })
      .forEach(function (person) {
          console.log(person);
    });
}

printAllMinors(generatePeople());
console.log('-----------------------------');

// Task 4

function averageAgeOfFemales(people) {
    var countOfFemales = 0;
    var average = people.filter(function (person) {
        return person.gender;
        })
        .reduce(function (average, person) {
            countOfFemales += 1;
            return average + person.age;
    }, 0);

    return average / countOfFemales;
}

console.log(averageAgeOfFemales(generatePeople()));
console.log('-----------------------------');

//task 5

if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i,
			len;

        for (i = 0, len = this.length; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }

        return undefined;
    };
}

function youngestMalePerson(people) {
    var youngestMale = people
      .filter(function (person) {
          return !person.gender;
      })
      .sort(function (x, y) {
          return x.age > y.age;
      })
      .find(function (person) {
          return person !== undefined;
      });

    return youngestMale;
}
console.log(youngestMalePerson(generatePeople()));
console.log('-----------------------------');

//task 6

function groupByFirstLetter(people) {
    var grouped = people.reduce(function (group, person) {
        if (group[person.firstName[0]]) {
            group[person.firstName[0]].push(person);
        }
        else {
            group[person.firstName[0]] = [person];
        }

        return group;
    }, {});

    return grouped;
}

console.log(groupByFirstLetter(generatePeople()));
