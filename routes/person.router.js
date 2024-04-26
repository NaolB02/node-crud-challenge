const express = require('express');
const router = express.Router();

const { CreatePersonSchema, UpdatePersonSchema } = require('../schema/person.schema');
const { checkEmptyBody,validatePersonSchema, checkPersonOfId } = require('../middlewares/validator');
const { getAllPersons, addPerson, getPerson, updatePerson, deletePerson } = require('../controllers/person.controller');

router
    .route('/')
    .get(getAllPersons)
    .post(checkEmptyBody, validatePersonSchema(CreatePersonSchema), addPerson);

router
    .route('/:id')
    .all(checkPersonOfId)
    .get(getPerson)
    .put(checkEmptyBody, validatePersonSchema(UpdatePersonSchema), updatePerson)
    .delete(deletePerson);

router.route('*').all((req, res) => {
    res.status(404).json({ error: 'Route not found' });
})

module.exports = router