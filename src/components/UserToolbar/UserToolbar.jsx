import styles from './UserToolbar.module.css'

const UserToolbar = ({ searchQuery, onSearchChange, onAddClick }) => {
  return (
    <div className={styles.toolbar}>
      <input
        type='text'
        className={styles.searchInput}
        placeholder='Поиск по всем полям...'
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
      />
      <button
        className={styles.addButton}
        onClick={onAddClick}
      >
        Добавить пользователя
      </button>
    </div>
  )
}

export default UserToolbar
