import { tickerItems } from '../data/site.js'

export default function Ticker() {
  // فهرست را دو بار می‌چینیم تا حرکت بی‌وقفه دیده شود
  const items = [...tickerItems, ...tickerItems]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i}>{t} ·</span>
        ))}
      </div>
    </div>
  )
}
