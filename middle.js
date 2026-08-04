const express = require('express');

const app = express();

const app1 = express();

const reqFilter = (req, resp, next) => {

    if (!req.query.age) {

        resp.send("Please provide your age")

    }
    else if (req.query.age < 18) {

        resp.send("You are under aged")

    }
    else {

        next();

    }
}

app1.use(reqFilter);

app.get('/', (res, resp) => {

    resp.send('Welcome to Home page')

});

app.get('/Home', (res, resp) => {

    resp.send('Welcome to Home page')

});

app1.get('/', (res, resp) => {

    resp.send('Welcome to Home page')

});

app.get('/users', (res, resp) => {

    resp.send('Welcome to Users page')

});

app.listen(3001);

app1.listen(4000);
