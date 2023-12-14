const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger-tags=['Users']
    console.log(mongodb);
    console.log("it worked");
    const result = await mongodb.getDatabase().db().collection('users').find();
    console.log(result);
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
}

const getSingle = async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {

        res.status(400).json('Must use a valid contact id to find a user.');
        return; // Add return statement to exit the function
    }

    //#swagger-tags=['Users']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};


const createUser = async (req, res) => {
    //#swagger-tags=['Users']
    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    // Use insertOne to create a new user
    if (response.insertedId) {
        res.status(204).json({ message: 'User created successfully' });
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the user');
    }
};


const updateUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to update a user.');
    }
    //#swagger-tags=['Users']
    const userId = new ObjectId(req.params.id);
    const user = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        ipaddress: req.body.ipaddress
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error ocurred while updating the user');
    }
};

const deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid contact id to delete a user.');
    }
    //#swagger-tags=['Users']
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('users').remove({ _id: userId }, true);
    if (response.deleteCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the user');
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};
