export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem('state', serializedState)
  } catch (err) {
    console.log('Failed to save state')
  }
}

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state')
    return serializedState === null
      ? undefined
      : JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
