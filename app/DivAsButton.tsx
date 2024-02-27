export default function DivAsButton({
  onClick = () => {},
  disabled = false,
  className = '',
  label,
  children,
}: {
  onClick?: () => void
  disabled?: boolean
  className?: string
  label: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={className}
      role={`button`}
      aria-label={label}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      }}
      aria-disabled={disabled}
    >
      {children}
    </div>
  )
}
