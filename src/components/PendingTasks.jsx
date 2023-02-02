import { useState } from "react"

export default function PendingTasks({ data }) {
  // console.log("----data-dsfads---", data)
  const [pendingTasks, setPendingTasks] = useState([])
  return (
    <>
      <p>Lorem ipsum dolor sit amet. {data?.id}</p>
      <p>Lorem ipsum dolor sit amet. {data?.taskTitle}</p>
      <p>Lorem ipsum dolor sit amet. {data?.taskDay}</p>
    </>
  )
}
