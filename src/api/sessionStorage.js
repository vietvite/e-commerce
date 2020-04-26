export const saveState = (name, state) => {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem(name, serializedState)
  } catch (err) {
    console.log('Failed to save state')
  }
}

export const loadState = (name) => {
  try {
    const serializedState = sessionStorage.getItem(name)
    return serializedState === null
      ? undefined
      : JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
