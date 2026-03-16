import { NavLink, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.app__container}>
      <nav className={styles.app__sidebar}>
        <h2 className={styles.app__logo}>Kaspersky Панель</h2>

        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? `${styles.app__link} ${styles['app__link--active']}` : styles.app__link
          }
          end
        >
          Главная
        </NavLink>

        <NavLink
          to='/users'
          className={({ isActive }) =>
            isActive ? `${styles.app__link} ${styles['app__link--active']}` : styles.app__link
          }
        >
          Пользователи
        </NavLink>

        <NavLink
          to='/groups'
          className={({ isActive }) =>
            isActive ? `${styles.app__link} ${styles['app__link--active']}` : styles.app__link
          }
        >
          Группы
        </NavLink>
      </nav>

      <main className={styles.app__content}>
        <Suspense fallback={<div className={styles.app__loader}>Загрузка страницы...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Layout
