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

  if (isLoading) return <div className={styles.loader}>Загрузка групп...</div>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление группами</h1>
      <div className={styles.grid}>
        {groups.map(group => (
          <div
            key={group.id}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{group.name}</h3>
            <p className={styles.cardDesc}>{group.description}</p>
            <div className={styles.cardFooter}>
              <button className={styles.editButton}>Изменить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupsPage
