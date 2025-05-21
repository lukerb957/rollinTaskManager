// import jsonServer from 'json-server';
const jsonServer = require('json-server');
import path from 'path';
import { Request, Response } from 'express';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ Minimal POST /tasks added here
server.post('/tasks', (req: Request, res: Response) => {
  const db = router.db;
  const tasks = db.get('tasks');
  const id = Date.now();

  const newTask = {
    id,
    ...req.body
  };

  tasks.push(newTask).write();
  res.status(201).json(newTask);
});

// ✅ Existing PATCH /tasks/:id — untouched
server.patch('/tasks/:id', (req: Request, res: Response) => {
  const db = router.db;
  const id = parseInt(req.params.id, 10); // works if db.json IDs are numbers

  const task = db.get('tasks').find({ id }).value();

  if (task) {
    const updated = { ...task, ...req.body };
    db.get('tasks').find({ id }).assign(updated).write();
    res.status(200).json(updated);
  } else {
    res.status(404).send("Task not found");
  }
});


server.use(router);
server.listen(3001, () => {
  console.log('Mock API running at http://localhost:3001');
});
