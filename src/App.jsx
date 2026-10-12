import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'

// משתמש
const user = {
  name: 'שם מלא 1',
  role: 'תפקיד 1',
}

// סטייט התחלתי של המשימות
const initialTasks = [
  { id: 1, name: 'לסדר את החדר', status: 'הושלם' },
  { id: 2, name: 'להדיח כלים', status: 'בתהליך' },
  { id: 3, name: 'לכתוב דוא"ל', status: 'הושלם' },
  { id: 4, name: 'להכין פלטפורמה', status: 'חדש' },
  { id: 5, name: 'לערוך מסמכים', status: 'הושלם' },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [userName, setUserName] = useState('')
  const [newTaskName, setNewTaskName] = useState('')

  const addTask = () => {
    const name = newTaskName.trim()
    if (!name) return
    const nextId = Math.max(0, ...tasks.map((t) => t.id)) + 1
    setTasks((prev) => [...prev, { id: nextId, name, status: 'חדש' }])
    setNewTaskName('')
  }

  // מחליף סטטוס בין 'הושלם' ו-'חדש' בלחיצה
  const toggleTaskCompleted = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: t.status === 'הושלם' ? 'חדש' : 'הושלם' } : t
      )
    )
  }

  return (
    <div className="app" dir="rtl">
      <Header name={userName || user.name} role={user.role} />

      <div style={{ padding: '0 1rem' }}>
        <label htmlFor="nameInput">הכנס/י את שמך:</label>
        <input
          id="nameInput"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="הקלד/י שם"
          style={{ marginInlineStart: '0.5rem' }}
        />
      </div>

      <main className="content">
        <TaskSummary tasks={tasks} />

        <section className="add-task" style={{ display: 'flex', gap: 8 }}>
          <input
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="הכנס שם משימה חדשה"
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            style={{ flex: 1, padding: '8px 10px', borderRadius: 6, border: '1px solid #d6dce6' }}
          />
          <button onClick={addTask} style={{ padding: '8px 12px', borderRadius: 6 }}>הוספה</button>
        </section>

        <TaskList tasks={tasks} onToggle={toggleTaskCompleted} />
      </main>
    </div>
  )
}

export default App
