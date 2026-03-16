import { Link } from 'react-router-dom'
import styles from './WelcomePage.module.css'

const WelcomePage = () => {
  return (
    <div className={styles['welcome-page']}>
      <section className={styles['welcome-page__hero']}>
        <h1 className={styles['welcome-page__title']}>Управление доступом пользователей</h1>
        <p className={styles['welcome-page__subtitle']}>
          Централизованная консоль администратора. Здесь вы можете управлять учетными записями,
          назначать функциональные группы и отслеживать текущий статус пользователей в системе.
        </p>
        <div className={styles['welcome-page__actions']}>
          <Link
            to='/users'
            className={styles['welcome-page__button--primary']}
          >
            Открыть реестр
          </Link>
          <Link
            to='/groups'
            className={styles['welcome-page__button--secondary']}
          >
            Справочник групп
          </Link>
        </div>
      </section>

      <div className={styles['welcome-page__features']}>
        <article className={styles['welcome-page__feature-card']}>
          <h3 className={styles['welcome-page__feature-title']}>Data Management</h3>
          <p className={styles['welcome-page__feature-desc']}>
            Интерфейс на базе React 18 с поддержкой мемоизации для работы с большими списками
            данных.
          </p>
        </article>
        <article className={styles['welcome-page__feature-card']}>
          <h3 className={styles['welcome-page__feature-title']}>State Persistence</h3>
          <p className={styles['welcome-page__feature-desc']}>
            Синхронизация локального состояния с LocalStorage для сохранения данных между сессиями.
          </p>
        </article>
        <article className={styles['welcome-page__feature-card']}>
          <h3 className={styles['welcome-page__feature-title']}>Modular Architecture</h3>
          <p className={styles['welcome-page__feature-desc']}>
            Разделение логики на атомарные компоненты, утилиты и глобальные контексты (Context API).
          </p>
        </article>
      </div>
    </div>
  )
}

export default WelcomePage
