import express from 'express';
import Task from '../models/task.js';
import auth from '../middleware/auth.js';

const taskRouter = new express.Router();

// set up endpoint for new tasks
taskRouter.post('/tasks', auth, async (req, res) => {
  const task = new Task({ ...req.body, owner: req.user._id });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// set up endpoint for multiple tasks
taskRouter.get('/tasks', auth, async (req, res) => {
  const match = {};
  if (req.query.isCompleted) {
    match.isCompleted = req.query.isCompleted === 'true';
  }
  const sort = {};
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split('_');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user.populate({
      path: 'tasks',
      match,
      options: {
        limit: parseInt(req.query.limit),
        skip: parseInt(req.query.skip),
        sort,
      },
    });
    res.send(req.user.tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// set up endpoint for single task
taskRouter.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOne({ _id, owner: req.user._id });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

// set up endpoint for updating a task
taskRouter.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const validUpdates = ['isCompleted'];
  const isValidOperation = updates.every((update) => validUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid update' });
  }
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
    if (!task) {
      return res.status(404).send();
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

// set up endpoint for deleting a task
taskRouter.delete('/tasks/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

export default taskRouter;
