import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container" style={{ textAlign: 'center', padding: '90px 20px' }}>
      <h1 style={{ fontFamily: 'var(--display)', fontSize: '3rem' }}>۴۰۴</h1>
      <p className="lead">صفحه‌ای که دنبالش بودید پیدا نشد.</p>
      <Link className="btn btn-soft" to="/">بازگشت به خانه</Link>
    </section>
  )
}
