function TaskSummary({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.status === 'הושלם').length

  return (
    <section className="task-summary">
      <h2>סיכום</h2>
      <p>
        יש <strong>{total}</strong> משימות
      </p>
      <p>
        מתוכן <strong>{completed}</strong> הושלמו
      </p>
    </section>
  )
}

export default TaskSummary
