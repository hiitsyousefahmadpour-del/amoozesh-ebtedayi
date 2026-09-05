import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420)
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      <a className="skip" href="#main">پرش به محتوای اصلی</a>
      <Header />
      <main id="main">{children}</main>
      <button className={`fab ${showTop ? 'is-visible' : ''}`} type="button"
              onClick={toTop} aria-label="بازگشت به بالای صفحه">
        <span className="material-symbols-outlined" aria-hidden="true">arrow_upward</span>
      </button>
      <Footer />
    </>
  )
}
