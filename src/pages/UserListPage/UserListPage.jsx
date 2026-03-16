import { useState, useMemo } from 'react'
import { useUsers } from '../../context/UserContext'
import { sortData } from '../../utils/sorting'

import UserTable from '../../components/UserTable/UserTable'
import UserToolbar from '../../components/UserToolbar/UserToolbar'
import UserModal from '../../components/UserModal/UserModal'
import styles from './UserListPage.module.css'

const UserListPage = () => {
  const { users, groups, isLoading, addUser, deleteUser } = useUsers()

  const [searchQuery, setSearchQuery] = useState('')
  const [sortConfig, setSortConfig] = useState({ key: 'fullName', direction: 'asc' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const processedUsers = useMemo(() => {
    const filtered = users.filter(user =>
      Object.values(user).some(val => String(val).toLowerCase().includes(searchQuery.toLowerCase()))
    )
    return sortData(filtered, sortConfig.key, sortConfig.direction)
  }, [users, searchQuery, sortConfig])

  const handleSort = key => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc'
    setSortConfig({ key, direction })
  }

  if (isLoading)
    return <div className={styles['user-list-page__loader']}>Синхронизация данных...</div>

  return (
    <div className={styles['user-list-page']}>
      <h2 className={styles['user-list-page__title']}>Список пользователей</h2>

      <UserToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddClick={() => setIsModalOpen(true)}
      />

      <UserTable
        users={processedUsers}
        sortConfig={sortConfig}
        onSort={handleSort}
        onDelete={deleteUser}
      />

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={addUser}
        groups={groups}
      />
    </div>
  )
}

export default UserListPage
