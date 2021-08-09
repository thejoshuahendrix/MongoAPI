const express = require('express');
const router = express.Router();

const Todo = require("../models/Todo");


router.get('/', (req,res) =>{
    Todo.find()
        .sort({date: -1})
        .then((todos) => res.json(todos));
});

router.post("/", (req, res) => {
    const newTodo = new Todo({
      name: req.body.name,
      todo: req.body.todo,
      completed: req.body.completed
    });
  
    newTodo.save().then((todo) => res.json(todo));
  });
  
router.delete("/:id", async (req, res, next) => {
    try {
      await Todo.findByIdAndRemove(req.params.id, {useFindAndModify:false})
      
    } catch (err) {
      next({ status: 400, message: "failed to delete todo" })
    }
  })
module.exports = router;