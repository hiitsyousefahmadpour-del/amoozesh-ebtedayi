import Card from './Card.jsx'
import FileLink from './FileLink.jsx'
import Reveal from './Reveal.jsx'

export default function Section({ section, filter }) {
  const { id, title, type } = section

  return (
    <section id={id} style={{ padding: '34px 0' }}>
      <Reveal as="h2">{title}</Reveal>

      {type === 'cards' && (
        <div className="grid g3">
          {section.items.map((it, i) => (
            <Card key={it.title} {...it} delay={i % 3} />
          ))}
        </div>
      )}

      {type === 'table' && (
        <Reveal className="table-wrap">
          <table>
            <thead>
              <tr>{section.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {section.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (j === 0
                    ? <th key={j} scope="row">{c}</th>
                    : <td key={j}>{c}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      )}

      {type === 'files' && (
        <div className="grid g2">
          {section.items
            .filter((it) => !filter || filter === 'all' || it.cat === filter)
            .map((it, i) => <FileLink key={it.name} {...it} delay={i % 3} />)}
        </div>
      )}

      {type === 'list' && (
        <Reveal as="ol">
          {section.items.map((t, i) => <li key={i}>{t}</li>)}
        </Reveal>
      )}
    </section>
  )
}
