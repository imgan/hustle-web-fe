const express = require('express');
const path = require('path');
const fs = require("fs"); 
const { getPostById } = require('./post');
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.get('/', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // get post info
        const postId = req.query.id;
        const post = getPostById(postId);
        if(!post) return res.status(404).send("Post not found");

        // inject meta tags
        htmlData = htmlData.replace(
            "<title>Hustle House</title>",
            `<title>${post.title}</title>`
        )
        .replace('Hustle House', post.title)
        .replace('Hustle is Jakarta’s premier athletic-based boutique fitness studio established in 2018.', post.description)
        .replace('Hustle is Jakarta’s premier athletic-based boutique fitness studio established in 2018.', post.description)
        return res.send(htmlData);
    });
});


app.get('/*', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const postId = req.query.id;
        const post = getPostById(postId);
        if(!post) return res.status(404).send("Post not found");

        // inject meta tags
        htmlData = htmlData.replace(
            "<title>Hustle House</title>",
            `<title>${post.title}</title>`
        )
        .replace('Hustle House', post.title)
        .replace('Hustle is Jakarta’s premier athletic-based boutique fitness studio established in 2018.', post.description)
        .replace('Hustle is Jakarta’s premier athletic-based boutique fitness studio established in 2018.', post.description)
        return res.send(htmlData);
    });
});


// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});