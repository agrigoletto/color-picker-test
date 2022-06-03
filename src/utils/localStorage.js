const APP_KEY = 'COLOR_PICKER'

export function getStorageItem(key) {
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)

  return JSON.parse(data)
}

export function setStorageItem(key, value) {
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
