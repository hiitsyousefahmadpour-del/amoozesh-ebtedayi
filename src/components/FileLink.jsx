import Reveal from './Reveal.jsx'

const kindClass = { XLSX: 'xlsx', HTML: 'html', MD: 'md', A3: 'html' }

export default function FileLink({ kind, name, desc, href, delay }) {
  return (
    <Reveal delay={delay}>
      <a className="file" href={href} target="_blank" rel="noopener noreferrer">
        <span className={`ft ${kindClass[kind] || ''}`} aria-hidden="true">{kind}</span>
        <span>
          <b>{name}</b>
          <span>{desc}</span>
        </span>
      </a>
    </Reveal>
  )
}
