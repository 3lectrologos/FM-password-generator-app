import { twMerge } from 'tailwind-merge'

export default function Tooltip({
  className,
  text,
  children,
}: {
  className?: string
  text: string
  children: React.ReactNode
}) {
  return (
    <div className={twMerge(`relative group`, className)}>
      <div
        className={twMerge(
          `flex flex-row items-center justify-center absolute top-0 right-2 -translate-y-1/3 w-[160px] bg-deepSpace text-lavenderGray text-[11px] leading-[160%] px-5 py-3 z-10 shadow-md select-none`,
          `invisible opacity-0 group-hover:visible group-hover:opacity-90 transition-all duration-500`
        )}
      >
        <span className={``}>{text}</span>
      </div>
      {children}
    </div>
  )
}
