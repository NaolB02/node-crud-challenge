const { v4: uuidv4 } = require("uuid");

class Database {
    constructor() {
        this.personCollection = [{
            id: '1',
            name: 'Sam',
            age: '26',
            hobbies: []
        }]
    }

    getAllPersons() {
        return this.personCollection;
    }

    addPerson(person) {
        const { name, age, hobbies } = person;
        const newPerson = {
            id: uuidv4(),
            name: name,
            age: age,
            hobbies: hobbies,
        };
        this.personCollection.push(newPerson);
        return newPerson;
    }

    getPerson(id) {
        return this.personCollection.find(person => person.id === id);
    }

    updatePerson(id, newPerson) {
        let person = this.personCollection.find(person => person.id === id);

        person.name = newPerson.name ? newPerson.name : person.name;
        person.age = newPerson.age ? newPerson.age : person.age;
        person.hobbies = newPerson.hobbies ? newPerson.hobbies : person.hobbies;

        return person;
    }

    deletePerson(id) {
        const index = this.personCollection.findIndex(person => person.id === id);
        if (index !== -1) {
            this.personCollection.splice(index, 1);
            return true; // Return true if deletion is successful
        }
        return false;
    }
}

const DBInstance = new Database();

module.exports = DBInstance;