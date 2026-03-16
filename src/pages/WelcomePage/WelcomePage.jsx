import { Link } from 'react-router-dom'
import styles from './WelcomePage.module.css'

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Управление доступом пользователей</h1>
        <p className={styles.subtitle}>
          Централизованная консоль администратора. Здесь вы можете управлять учетными записями,
          назначать функциональные группы и отслеживать текущий статус пользователей в системе.
        </p>
        <div className={styles.actions}>
          <Link
            to='/users'
            className={styles.primaryButton}
          >
            Открыть реестр
          </Link>
          <Link
            to='/groups'
            className={styles.secondaryButton}
          >
            Справочник групп
          </Link>
        </div>
      </section>

      <div className={styles.features}>
        <article className={styles.featureCard}>
          <h3>Data Management</h3>
          <p>
            Интерфейс на базе React 18 с поддержкой мемоизации для работы с большими списками
            данных.
          </p>
        </article>
        <article className={styles.featureCard}>
          <h3>State Persistence</h3>
          <p>
            Синхронизация локального состояния с LocalStorage для сохранения данных между сессиями.
          </p>
        </article>
        <article className={styles.featureCard}>
          <h3>Modular Architecture</h3>
          <p>
            Разделение логики на атомарные компоненты, утилиты и глобальные контексты (Context API).
          </p>
        </article>
      </div>
    </div>
  )
}

export default WelcomePage
