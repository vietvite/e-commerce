import React from 'react'

const styles = { maxWidth: '1200px', margin: '0 auto' }
function Container({ children }) {
  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default Container