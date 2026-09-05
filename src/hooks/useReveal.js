import { useEffect, useRef, useState } from 'react'

// عنصر وقتی وارد دید شد، یک بار is-in می‌گیرد
export default function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) { setShown(true); return }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setShown(true); io.unobserve(e.target) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, shown]
}
