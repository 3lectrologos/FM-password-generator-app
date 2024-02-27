import { twMerge } from 'tailwind-merge'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main
      className={twMerge(
        `flex flex-col min-h-dvh bg-deepSpace text-lavenderGray justify-center items-center px-4 py-16`,
        className
      )}
    >
      <div className={`flex flex-col w-full tablet:w-[540px]`}>{children}</div>
    </main>
  )
}
