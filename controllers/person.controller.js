const DBInstance = require('../database/db');

exports.getAllPersons = (req, res, next) => {
    try {
        const persons = DBInstance.getAllPersons();

        return res.status(200).json(persons);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}

exports.addPerson = (req, res, next) => {
    try {
        const person = req.body;
        const addedPerson = DBInstance.addPerson(person);

        return res.status(200).json(addedPerson);
    } catch (err) {
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}

exports.getPerson = (req, res, next) => {
    try {
        const id = req.params.id;
        const person = DBInstance.getPerson(id);

        return res.status(200).json(person);
    } catch (err) {
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}
exports.updatePerson = (req, res, next) => {
    try {
        const id = req.params.id;
        const newPerson = req.body;
        const updatedPerson = DBInstance.updatePerson(id, newPerson);

        return res.status(200).json(updatedPerson);
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}
exports.deletePerson = (req, res, next) => {
    try {
        const id = req.params.id;
        DBInstance.deletePerson(id);

        return res.status(200).json({ message: 'Person deleted' });
    } catch (err) {
        return res.status(500).json({
            error: 'Server Error'
        })
    }
}