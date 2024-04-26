exports.checkEmptyBody = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Empty body' });
    }
    next();
}

exports.validatePersonSchema = (personSchema) => {
    return (req, res, next) => {
        const { error } = personSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
}

exports.checkPersonOfId = (req, res, next) => {
    const db = req.app.get('db');
    const id = req.params.id;
    const person = db.find(p => p.id === id);
    
    if (!person) {
        return res.status(404).json({ error: `Person with ${id} not found` });
    }

    next();
}