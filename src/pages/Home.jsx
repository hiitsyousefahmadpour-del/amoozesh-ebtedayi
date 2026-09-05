import { Link } from 'react-router-dom'
import { paths, stats } from '../data/site.js'
import Card from '../components/Card.jsx'
import Counter from '../components/Counter.jsx'
import Ticker from '../components/Ticker.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <>
      <section className="hero board">
        <div className="container hero-inner">
          <p className="eyebrow">مدیریت آموزش و پرورش مبارکه · معاونت آموزش ابتدایی</p>
          <h1>
            هرچه آموزگار ابتدایی لازم دارد،{' '}
            <span className="mark">
              یک‌جا
              <svg viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 12 C 60 4, 120 16, 180 8 S 270 6, 296 11" />
              </svg>
            </span>
          </h1>
          <p>
            راهنمای ارزشیابی توصیفی، بسته‌ی استقبال آموزگار تازه‌کار، نمونه طرح درس،
            فرم‌های آماده و راهنمای جلسه‌ی اولیا — بازنویسی‌شده و آماده‌ی چاپ.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/avalin-zang">شروع کنید: بسته‌ی «اولین زنگ»</Link>
            <Link className="btn btn-ghost" to="/arzeshyabi">راهنمای ارزشیابی</Link>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <Counter to={s.n} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ticker />

      <section>
        <div className="container">
          <Reveal className="section-head">
            <p className="kicker">مسیرها</p>
            <h2>امروز دنبال <span className="u">چه هستید؟</span></h2>
            <p className="lead">چهار مسیر، بسته به کاری که همین امروز روی میزتان است.</p>
          </Reveal>
          <div className="grid g4">
            {paths.map((p, i) => <Card key={p.to} {...p} delay={i} />)}
          </div>
        </div>
      </section>
    </>
  )
}
