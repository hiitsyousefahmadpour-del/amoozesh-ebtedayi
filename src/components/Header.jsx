import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import useTheme from '../hooks/useTheme.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // نوار بالای صفحه با اسکرول سایه بگیرد
  useEffect(() => {
    const el = document.querySelector('.site-header')
    const onScroll = () => el && el.classList.toggle('is-scrolled', window.scrollY > 8)
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <span className="material-symbols-outlined">school</span>
            </span>
            <span className="brand-txt">
              {site.group}
              <span>{site.org}</span>
            </span>
          </NavLink>

          <nav className="nav" id="site-nav" aria-label="فهرست اصلی" data-open={open}>
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" type="button" onClick={toggle}
                    aria-pressed={theme === 'dark'}
                    aria-label={theme === 'dark' ? 'تغییر به حالت روشن' : 'تغییر به حالت تاریک'}>
              <span className="material-symbols-outlined" aria-hidden="true">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button className="icon-btn nav-toggle" type="button"
                    onClick={() => setOpen((o) => !o)}
                    aria-expanded={open} aria-controls="site-nav"
                    aria-label="باز و بسته کردن فهرست">
              <span className="material-symbols-outlined" aria-hidden="true">
                {open ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="scrim" data-open={open} onClick={() => setOpen(false)} aria-hidden="true" />
    </>
  )
}
