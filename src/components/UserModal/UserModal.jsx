import { useState, useEffect } from 'react'
import styles from './UserModal.module.css'

const emptyForm = {
  fullName: '',
  account: '',
  email: '',
  group: '',
  phone: ''
}

const UserModal = ({ isOpen, onClose, onAddUser, groups }) => {
  const [formData, setFormData] = useState(emptyForm)

  useEffect(() => {
    if (!isOpen) return

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData({
      fullName: '',
      account: '',
      email: '',
      group: '',
      phone: ''
    })
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!formData.fullName || !formData.email) {
      alert('Пожалуйста, заполните обязательные поля (Имя и Email)')
      return
    }

    const newUser = {
      ...formData,
      id: Date.now()
    }

    onAddUser(newUser)
    onClose()
  }

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Добавить пользователя</h2>
          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <label>Полное имя *</label>
            <input
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              placeholder='Иван Иванов'
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Учетная запись</label>
            <input
              type='text'
              name='account'
              value={formData.account}
              onChange={handleChange}
              placeholder='domain/i.ivanov'
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email *</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='ivanov@example.com'
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Группа</label>
            <select
              name='group'
              value={formData.group}
              onChange={handleChange}
            >
              <option value=''>Выберите группу...</option>
              {groups.map(group => (
                <option
                  key={group.id}
                  value={group.name}
                >
                  {group.name}
                </option>
              ))}
              <option value='Unmanaged'>Без группы (Unmanaged)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Телефон</label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='+7 (999) 000-00-00'
            />
          </div>

          <div className={styles.footer}>
            <button
              type='button'
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Отмена
            </button>
            <button
              type='submit'
              className={styles.submitBtn}
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModal
