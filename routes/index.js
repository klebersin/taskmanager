var express = require('express');
var router = express.Router();
var Task = require('../models/task');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', async (req, res, next) => {

  const tasks = await Task.find();
  res.render('index', { title: 'Task manager', tasks });
});

router.get('/addTask',  (req, res, next) => {
  res.render('addTask', { title: 'Task manager' });
});

router.post('/addTask', async (req, res, next) =>  {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/');
});

router.post('/deleteTask', async (req, res, next)=> {
  await Task.findByIdAndDelete(req.body.taskId);
  res.redirect('/');
})

router.post('/changeCompleted', async (req, res, next)=> {
  const { id } = req.body;
  const  task = await Task.findById(id);
  task.taskCompleted = !task.taskCompleted;
  task.save();
})

module.exports = router;
