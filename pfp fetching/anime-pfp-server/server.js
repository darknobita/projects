const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const pfpFolder = path.join(__dirname, 'animepfp');

app.get('/random', (req, res) => {
    fs.readdir(pfpFolder, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading the directory');
        }

        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];

        res.sendFile(path.join(pfpFolder, randomImage));
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
