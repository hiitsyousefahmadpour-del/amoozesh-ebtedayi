import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import Toc from '../components/Toc.jsx'

const filters = [
  { key: 'all', label: 'همه' },
  { key: 'plan', label: 'برنامه‌ریزی' },
  { key: 'assess', label: 'ارزشیابی' },
  { key: 'parent', label: 'خانواده' },
]

export default function ContentPage({ page }) {
  const [filter, setFilter] = useState('all')

  // با تغییر صفحه، عنوان مرورگر به‌روز و صفحه به بالا برود
  useEffect(() => {
    document.title = `${page.title} | کارگروه کیفیت‌بخشی آموزش ابتدایی مبارکه`
    window.scrollTo(0, 0)
  }, [page])

  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="crumbs"><Link to="/">خانه</Link> ‹ {page.title}</p>
          <h1>{page.title}</h1>
          <p>{page.lead}</p>
        </div>
      </header>

      <div className="container layout" style={{ paddingBlock: '40px' }}>
        <div>
          {page.filterable && (
            <>
              <div className="chips" role="group" aria-label="فیلتر دسته‌بندی">
                {filters.map((f) => (
                  <button key={f.key} type="button" className="chip"
                          aria-pressed={filter === f.key}
                          onClick={() => setFilter(f.key)}>
                    {f.label}
                  </button>
                ))}
              </div>
              <p className="sr-only" role="status" aria-live="polite">
                فیلتر: {filters.find((f) => f.key === filter).label}
              </p>
            </>
          )}

          {page.sections.map((s) => (
            <Section key={s.id} section={s} filter={filter} />
          ))}
        </div>

        <Toc sections={page.sections} />
      </div>
    </>
  )
}
