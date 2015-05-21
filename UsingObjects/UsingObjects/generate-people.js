function generatePeople() {
    function Person(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    var firstNames = ['Ivan', 'Petur', 'Boril', 'Kiril'];
    var lastNames = ['Petrov', 'Georgiev', 'Dimitrov', 'Manchev'];

    var people = [];

    var count = Math.floor(Math.random() * 100);

    for (var i = 0; i < count; i++) {
        people.push(new Person(firstNames[Math.floor((Math.random() * 4))],
                        lastNames[Math.floor((Math.random() * 4))],
                        Math.floor((Math.random() * 10) + (Math.random() * 100))));
    }

    return people;
}