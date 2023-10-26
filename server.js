const express = require('express')

const app = express()

app.use(express.json())

const db = { tasks: [] }

//1

app.get('/tasks', (req, res) => {
  res.json(db.tasks)
})

//2

app.get('/tasks/:taskId', (req, res) => {
  db.tasks.forEach(task => {
    if (task.id === +req.params.taskId) {
      res.send(task)
    }
  })
})

//3

app.post('/tasks', (req, res) => {
  const taskId = Date.now()

  const obj = {
    id: taskId,
    body: req.body.body,
  }

  db.tasks.push(obj)

  res.send(db.tasks)
})

//4

app.put('/tasks/:taskId', (req, res) => {
  const taskId = +req.params.taskId
  const updatedBody = req.body.body

  db.tasks.forEach(task => {
    if (task.id === taskId) {
      task.body = updatedBody
      res.send(task)
    }
  })
})

//5

app.delete('/tasks/:taskId', (req, res) => {
  db.tasks.forEach(task => {
    if (task.id === +req.params.taskId) {
      const deletedTask = db.tasks.filter(
        task => task.id !== +req.params.taskId
      )
      console.log(deletedTask)
      db.tasks = deletedTask
      res.send(deletedTask)
    }
  })
})

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

app.get('*', (req, res) => {
  res.status(404).json({ message: 'NOT FOUND' })
})

app.listen(4001, () => console.log('Server on..'))
