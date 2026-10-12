function Header({ name, role }) {
  return (
    <header className="header">
      <h1>מערכת ניהול משימות</h1>
      <p className="header-user">
        {name} · {role}
      </p>
    </header>
  )
}

export default Header
