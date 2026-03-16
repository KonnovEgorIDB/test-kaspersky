// src/utils/sorting.js

/**
 * Универсальная функция сортировки массива объектов
 * @param {Array} data - исходный массив
 * @param {string} key - ключ, по которому сортируем
 * @param {string} direction - 'asc' или 'desc'
 */
export const sortData = (data, key, direction) => {
  if (!key) return data

  return [...data].sort((a, b) => {
    const valA = a[key]
    const valB = b[key]

    if (valA < valB) {
      return direction === 'asc' ? -1 : 1
    }
    if (valA > valB) {
      return direction === 'asc' ? 1 : -1
    }
    return 0
  })
}
