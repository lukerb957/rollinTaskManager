Rollin Mini Task Manager

This is a mini task management web application built as part of the Rollin coding assignment.

---

Features

View a list of all tasks
Add a new task
Mark a task as complete
Delete a task
Filter tasks by created date (date range)
Paginate results when the task list exceeds 20 items
Unit tests for each functional requirement

---

Tech Stack

React
TypeScript
Jest + React 

Testing

Each core feature is covered by a corresponding unit test using React Testing Library.

Test Files:

- `TaskList.test.tsx`: View, complete, and delete tasks
- `AddTaskForm.test.tsx`: Add a new task
- `FilterBar.test.tsx`: Filter tasks by date
- `App.test.tsx`: Pagination logic

To run tests:
```bash
npm test
```

---

Getting Started

Clone the repo and install frontend dependencies

```bash
git clone <your-repo-url>](https://github.com/lukerb957/rollinTaskManager
cd rollin-task-manager
npm install
```

1. Set up the mock API

Navigate to the provided backend folder (e.g. `task-api`) and install dependencies:

```bash
cd ../task-api
npm install
```

Start the API:

```bash
npx ts-node server.ts
```

2. The API will be available at: `http://localhost:3001/tasks`

> ⚠️ Make sure port 3001 is free. If it’s in use, run `lsof -i :3001` and kill the process using `kill -9 <PID>`.

3. Start the frontend

In a new terminal tab or window:

```bash
cd rollin-task-manager
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---


Luke's Notes

API Modifications !!

I worked with the provided task-api backend. I made minimal and necessary changes to support the required frontend features, while preserving the original structure and logic.

1. POST /tasks Route Added
The original API did not include a POST /tasks endpoint, without it i was unable to complete task creation in the frontend.

To address this, I added a route to server.ts that:

Accepts a task object via JSON
Assigns a unique number ID using Date.now()
Persists the task to db.json using lowdb
This change was intentionally isolated and did not modify or interfere with existing functionality.

2. PATCH /tasks/:id Route Adjusted
The original route parsed the task ID with parseInt(), which caused issues when matching against string-based or large number IDs from db.json.

To resolve this:

I ensured all IDs in db.json are stored as numbered values.
I kept the existing parseInt() in server.ts to match number id fields in db.json.

3. db.json ID Format Standardized
To align with the backend's use of parseInt, I converted all id fields in db.json to numbers.

This resolved all errors when attempting to update tasks.
Summary

All backend modifications are:

Minimal
inline with the required frontend functionality
kept the functionallity and structure of the original API
