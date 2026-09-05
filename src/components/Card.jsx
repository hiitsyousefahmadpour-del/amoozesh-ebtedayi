import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function Card({
  to,
  href,
  num,
  tab,
  title,
  text,
  more,
  accent,
  delay
}) {
  const inner = (
    <>
      {num && <span className="ghost" aria-hidden="true">{num}</span>}
      {tab && <span className="tab">{tab}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
      {more && <span className="more">{more}</span>}
    </>
  )

  const cls = `card ${accent ? 'accent-' + accent : ''}`.trim()

  // لینک خارجی مثل Gmail
  if (href) {
    return (
      <Reveal delay={delay} className="card-wrap">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {inner}
        </a>
      </Reveal>
    )
  }

  // کارت بدون لینک
  if (!to) {
    return (
      <Reveal as="article" delay={delay} className={cls}>
        {inner}
      </Reveal>
    )
  }

  // لینک داخلی سایت
  return (
    <Reveal delay={delay} className="card-wrap">
      <Link to={to} className={cls}>
        {inner}
      </Link>
    </Reveal>
  )
}