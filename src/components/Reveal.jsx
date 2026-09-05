import useReveal from '../hooks/useReveal.js'

// هر چیزی داخل این کامپوننت، با اسکرول ظاهر می‌شود
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag
      ref={ref}
      data-delay={delay || undefined}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
