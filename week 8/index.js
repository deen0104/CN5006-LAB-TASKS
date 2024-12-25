const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/Week8';

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (err) => console.log("Error occurred during connection: " + err));
db.once('connected', () => console.log(`Connected to ${MONGO_URI}`));


//Task 1

const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    salary: Number
});

const personModel = mongoose.model('Person', PersonSchema, 'personCollection');
const doc1 = new personModel({ name: 'Jacky', age: 36, gender: 'Male', salary: 3456 });

// doc1.save()
//     .then((doc1) => console.log("New document added:", doc1))
//     .catch((err) => console.error(err));


//Task 2

const manyPersons = [
    { name: 'Simon', age: 42, gender: 'Male', salary: 3456 },
    { name: 'Neesha', age: 23, gender: 'Female', salary: 1000 },
    { name: 'Mary', age: 27, gender: 'Female', salary: 5402 },
    { name: 'Mike', age: 40, gender: 'Male', salary: 4519 }
];

// personModel.insertMany(manyPersons)
//     .then(() => console.log("Data inserted"))
//     .catch((error) => console.log(error));

//Task 3

// personModel.find().limit(5)
//     .then((docs) => console.log("Documents retrieved:", docs))
//     .catch((err) => console.error(err));


// personModel.find({ gender: 'Female', age: { $gt: 25 } })
//     .then((docs) => console.log("Filtered documents:", docs))
//     .catch((err) => console.error(err));


//Task 4

// personModel.countDocuments()
//     .then((count) => console.log("Total documents count:", count))
//     .catch((err) => console.error(err));


//Task 5

// personModel.deleteMany({ age: { $gte: 25 } })
//     .then((docs) => console.log('Deleted documents:', docs))
//     .catch((error) => console.log(error));


// Task 6

// personModel.updateMany({ gender: 'Female' }, { $set: { salary: 5555 } })
//     .then((docs) => console.log("Updated documents:", docs))
//     .catch((error) => console.log(error));
