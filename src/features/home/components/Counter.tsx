import { useState } from 'react'
import './Counter.css'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((c) => c + 1)}
    >
      Count is {count}
    </button>
  )
}
