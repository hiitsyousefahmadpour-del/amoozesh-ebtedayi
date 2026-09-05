import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal.js'

const fa = (n) => String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])

export default function Counter({ to }) {
  const [ref, shown] = useReveal()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!shown) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(to); return }
    let i = 0
    const step = Math.max(1, Math.ceil(to / 22))
    const id = setInterval(() => {
      i += step
      if (i >= to) { i = to; clearInterval(id) }
      setN(i)
    }, 45)
    return () => clearInterval(id)
  }, [shown, to])

  return <b ref={ref}>{fa(n)}</b>
}
