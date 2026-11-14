// template engine

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get("/profile", (_, resp) => {

    const user = [{
        name: 'rakesh',
        email: 'r@gmail.com',
        mob: 97686968
    },
    {
        name: 'suresh',
        email: 's@gmail.com',
        mob: 57575858
    },
    {
        name: 'sanket',
        email: 'sa@gmail.com',
        mob: 888779998
    }
    ]

    resp.render('profile', { user });

});


app.get("/home", (_, resp) => {
    const user=[{
        name:'rakesh',
        email:'r@gmail.com',
        mob:97686968
    },
    {
        name:'suresh',
        email:'s@gmail.com',
        mob:57575858
    },
    {
        name:'sanket',
        email:'sa@gmail.com',
        mob:888779998
    }
]
    resp.render('home',{user});
});

 module.exports = app;
