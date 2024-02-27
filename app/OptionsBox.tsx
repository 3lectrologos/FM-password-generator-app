import { twMerge } from 'tailwind-merge'

export default function OptionsBox({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={twMerge(`flex flex-col bg-charcoal p-4 tablet:p-8`, className)}
    >
      {children}
    </div>
  )
}
