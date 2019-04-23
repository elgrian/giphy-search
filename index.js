// index.js
applicationCache.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.render('greetings', {
        name
    });
})