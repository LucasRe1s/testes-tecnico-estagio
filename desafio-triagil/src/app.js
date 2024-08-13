const express = require('express');
const app = express();
const routes = require('./routes/routes')

const database = require('./infrastructures/database');
database.initDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3303;

try {
    app.listen(port, () => {
        console.log("server in port, " + port);
    });
    
} catch (error) {
    console.log(error);
}

module.exports = {
    app,
};