const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello it is my first express application");
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});


// Exercise 2

app.get("/about", (req, res) => {
    res.send("This is a basic express application");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
    res.send(req.params);
});



// Exercise 3

const fs = require("fs");


app.get("/GetStudents", (req, res) => {
    fs.readFile(__dirname + "/Student.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json({
            status: true,
            statusCode: 200,
            requestedAt: new Date().toISOString(),
            requestUrl: req.url,
            method: req.method,
            studentData: JSON.parse(data),
        });
    });
});

//Finding student using student id as request param
app.get("/GetStudentid/:id", (req, res) => {
    fs.readFile(__dirname + "/Student.json", "utf8", (err, data) => {
        if (err) throw err;
        const students = JSON.parse(data);
        const student = students["Student" + req.params.id];
        if (student) {
            res.json(student);
        } else {
            res.json({
                status: false,
                message: "Student not found",
            });
        }
    });
});


// Exercise 4

app.get('/studentinfo', function (req, res) {
    res.sendFile('StudentInfo.html', { root: __dirname });
})

app.post('/submit-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName + ' ';
    var Age = req.body.myAge + ' Gender: ' + req.body.gender + '    ';
    Qual = ' Qualification' + req.body.Qual
    console.log(req.body.Qual)
    res.send({
        status: true,
        message: 'form Details', data: {
            name: name, age: Age, Qualification: Qual,
        }
    });
});