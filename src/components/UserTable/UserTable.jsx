import styles from './UserTable.module.css'

const UserTable = ({ users, sortConfig, onSort, onDelete }) => {
  const getSortIcon = key => {
    if (sortConfig.key !== key) return '↕'
    return sortConfig.direction === 'asc' ? '↑' : '↓'
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => onSort('fullName')}>Полное имя {getSortIcon('fullName')}</th>
            <th onClick={() => onSort('account')}>Учетная запись {getSortIcon('account')}</th>
            <th onClick={() => onSort('email')}>Email {getSortIcon('email')}</th>
            <th onClick={() => onSort('group')}>Группа {getSortIcon('group')}</th>
            <th>Телефон</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.fullName}</td>
              <td>{user.account}</td>
              <td>{user.email}</td>
              <td>
                <span className={styles.groupBadge}>{user.group || 'Unmanaged'}</span>
              </td>
              <td>{user.phone}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => onDelete(user.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td
                colSpan='6'
                className={styles.noData}
              >
                Пользователи не найдены
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
