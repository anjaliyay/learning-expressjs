const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage }).single('myfile');

app.use(express.static('Public'));

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {

        if (err) {
            return res.send('Error ocurred during file upload.');
        }
        res.send('File uploaded successfully.');
    });
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3001`);
});

/*
const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('Public'));

app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}! Form Submitted successfully.`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
}
);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3001');
});
*/

