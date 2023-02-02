import { useState } from "react"

export default function AddTask({ onAdd }) {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDay, setTaskDay] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    console.log(taskTitle)
    console.log(taskDay)
    const id = Math.floor(Math.random() * 100) + 1
    // console.log(onAdd({ id, taskTitle, taskDay }))
    onAdd({ id, taskTitle, taskDay })
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Add New Task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Due Date"
          value={taskDay}
          onChange={(e) => setTaskDay(e.target.value)}
        />
        <input
          type="submit"
          value="Add Task"
          className="btn btn-block btn-secondary"
        />
      </form>
    </>
  )
}
