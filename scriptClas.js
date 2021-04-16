class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  };

var worker = new Person('Иван', 'Иванов')
console.log(worker.name);
console.log(worker.surname);