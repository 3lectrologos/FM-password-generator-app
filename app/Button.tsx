import { twMerge } from 'tailwind-merge'

export default function Button({
  onClick,
  disabled,
  className,
}: {
  onClick: () => void
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      className={twMerge(
        `flex flex-col items-center justify-center opacity-100`,
        `bg-mintGreen text-charcoal fill-charcoal border-2 border-mintGreen`,
        `transition-colors transition-scale`,
        `hover:bg-charcoal hover:text-mintGreen hover:fill-mintGreen`,
        `active:scale-[98%]`,
        disabled && `pointer-events-none opacity-50`,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={'Generate password'}
    >
      <span
        className={`flex flex-row items-center justify-center gap-x-4 tablet:gap-x-6`}
      >
        <span className={`textStyle-body uppercase`}>generate</span>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg>
      </span>
    </button>
  )
}
