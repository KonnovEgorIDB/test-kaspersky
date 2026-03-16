import { NavLink, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.sidebar}>
        <h2 className={styles.logo}>Kaspersky Панель</h2>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          end
        >
          Главная
        </NavLink>

        <NavLink
          to='/users'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
        >
          Пользователи
        </NavLink>

        <NavLink
          to='/groups'
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
        >
          Группы
        </NavLink>
      </nav>

      <main className={styles.content}>
        <Suspense fallback={<div className={styles.loader}>Загрузка страницы...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Layout
