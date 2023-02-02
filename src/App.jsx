import { useState } from "react"
import { AddTask, CompletedTasks, PendingTasks } from "./components/index"

const App = () => {
  const [data, setData] = useState()
  function onAddFunc(val) {
    /* console.log("-Abdul Waheed---", val.id)
    console.log("-Abdul Waheed---", val.taskTitle)
    console.log("-Abdul Waheed---", val.taskDay) */
    setData(val)
  }
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center py-5 mx-auto my-3">
        <h1>Task Treacker App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          possimus?
        </p>
        <AddTask onAdd={onAddFunc} />
        <div className="container container-box d-flex justify-content-center align-items-center">
          <section className="container-box">
            <h2>Pending Tasks</h2>
            <PendingTasks data={data} />
          </section>
          <section className="container-box">
            <h2>Completed Tasks</h2>
            <CompletedTasks />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
