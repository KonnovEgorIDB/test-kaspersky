import { useState, useEffect } from 'react'
import { UserContext } from './UserContext'
import { fetchUsers, fetchGroups } from '../api/fakeApi'

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [groups, setGroups] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initData = async () => {
      setIsLoading(true)

      const savedUsers = localStorage.getItem('app_users')

      try {
        if (savedUsers) {
          setUsers(JSON.parse(savedUsers))
          const g = await fetchGroups()
          setGroups(g)
        } else {
          const [u, g] = await Promise.all([fetchUsers(), fetchGroups()])
          setUsers(u)
          setGroups(g)
        }
      } catch (error) {
        console.error('Ошибка загрузки данных:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initData()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('app_users', JSON.stringify(users))
    }
  }, [users, isLoading])

  const addUser = newUser => setUsers(prev => [newUser, ...prev])

  const deleteUser = id => setUsers(prev => prev.filter(u => u.id !== id))

  return (
    <UserContext.Provider value={{ users, groups, isLoading, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  )
}
