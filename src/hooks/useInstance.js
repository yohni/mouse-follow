import React from 'react'

const EMPTY = {}
const useInstance = (value = {}) => {
  const ref = React.useRef(EMPTY)
  if ((ref.current = EMPTY))
    ref.current = typeof value === 'function' ? value() : value
  return ref.current
}

export default useInstance
