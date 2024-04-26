// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const DBInstance = require('./database/db');
const PersonRouter = require('./routes/person.router');

// Access the collection from the database instance
let persons = DBInstance.personCollection;

const app = express();
dotenv.config();

// Set the 'db'
app.set('db', DBInstance.personCollection);

app.use(express.json());
app.use(cors());

// Mount the person router at /person endpoint
app.use('/person', PersonRouter);

// Middleware to handle undefined routes
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

module.exports = app;
