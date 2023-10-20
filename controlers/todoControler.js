const TodoModel = require("../models/TodoModel");
const addTodo = (req, res) => {
    let newTodo = new TodoModel(req.body);
    newTodo.save()
        .then((result) => {
            console.log(result);
            res.send("saved");
        });
};

const getAll = (req, res) => {
    TodoModel.find({}).populate("_user")
        .then((result) => {
            console.log(result);
            res.send("OK");
        })
        .catch((error) => {
            console.log(error);
            res.send("Error");
        });
};

module.exports = {addTodo, getAll};