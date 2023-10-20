const {Schema, model} = require("mongoose");

const ImportantSchema = new Schema({
    level: String
}, {_id: false});

const TodoSchema = new Schema({
    task: {type: String, required: [true, "Task is required!"]},
    done: {type: Boolean, default: false},
    _user: {type: Schema.Types.ObjectId, required: [true, "User is required"], ref: "users"},
    important: {type: ImportantSchema}
});

const TodoModel = model("todos", TodoSchema);

module.exports = TodoModel;