// מיפוי הסטטוס לזיהוי באנגלית — שם תקין למחלקת CSS,
// בלי תלות בתווים בעברית או ברווחים בשם הסטטוס
const statusClass = {
  'הושלם': 'done',
  'בתהליך': 'in-progress',
  'חדש': 'new',
}

function TaskList({ tasks, onToggle }) {
  return (
    <section className="task-list">
      <h2>רשימת המשימות</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task task--${statusClass[task.status] ?? 'new'}`}
            onClick={() => onToggle?.(task.id)}
            style={{ cursor: 'pointer' }}
          >
            <span className="task-name">{task.name}</span>
            <span className="task-status">{task.status}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TaskList
