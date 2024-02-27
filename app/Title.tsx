import { twMerge } from 'tailwind-merge'

export default function Title({ className }: Readonly<{ className?: string }>) {
  return (
    <h1
      className={twMerge(
        `textStyle-heading-md text-softPurple text-center`,
        className
      )}
    >
      Password Generator
    </h1>
  )
}
