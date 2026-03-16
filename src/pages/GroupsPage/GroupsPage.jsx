import { useState, useEffect } from 'react'
import { fetchGroups } from '../../api/fakeApi'
import styles from './GroupsPage.module.css'

const GroupsPage = () => {
  const [groups, setGroups] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchGroups().then(data => {
      setGroups(data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) return <div className={styles['groups-page__loader']}>Загрузка групп...</div>

  return (
    <div className={styles['groups-page']}>
      <h1 className={styles['groups-page__title']}>Управление группами</h1>
      <div className={styles['groups-page__grid']}>
        {groups.map(group => (
          <div
            key={group.id}
            className={styles['groups-page__card']}
          >
            <h3 className={styles['groups-page__card-title']}>{group.name}</h3>
            <p className={styles['groups-page__card-desc']}>{group.description}</p>
            <div className={styles['groups-page__card-footer']}>
              <button className={styles['groups-page__edit-button']}>Изменить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupsPage
