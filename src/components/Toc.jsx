import { useEffect, useState } from 'react'

// فهرست کناری با نشانه‌گذاری بخش فعال
export default function Toc({ sections }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!els.length || !('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-90px 0px -70% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sections])

  return (
    <aside className="toc" aria-label="فهرست این صفحه">
      <h2>در این صفحه</h2>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}
               className={active === s.id ? 'active' : ''}
               aria-current={active === s.id ? 'true' : undefined}>
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}
