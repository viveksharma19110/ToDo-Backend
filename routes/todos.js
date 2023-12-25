const express = require("express");
const router = express.Router();
// const router = express()

//import controller
const {createTodo} = require("../controllers/CreateToDo.js");
const { getTodos,getTodoById } = require("../controllers/getToDo.js");
const { updateTodo} = require("../controllers/updateToDo.js");
const { deleteTodo} = require("../controllers/deleteToDo");

// console.log(getToDo)

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getToDo", getTodos);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);





module.exports = router;