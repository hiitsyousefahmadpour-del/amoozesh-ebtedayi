import { Link } from 'react-router-dom'
import { nav, site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>{site.group}</h2>
          <p>مرجع اسناد، فرم‌ها و راهنماهای آموزگاران دوره‌ی ابتدایی شهرستان مبارکه.</p>
        </div>
        <nav aria-label="پیوندهای پانوشت">
          <h2>بخش‌ها</h2>
          <ul>
            {nav.slice(1).map((i) => (
              <li key={i.to}><Link to={i.to}>{i.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>تماس</h2>
          <ul>
            <li>{site.org}</li>
            <li>{site.unit}</li>
            <li>{site.author}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{site.org}</span>
        <span>{site.author}</span>
      </div>
    </footer>
  )
}
