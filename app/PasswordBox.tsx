import { twMerge } from 'tailwind-merge'
import DivAsButton from '@/app/DivAsButton'

export default function PasswordBox({
  className,
  password,
}: {
  className?: string
  password: string
}) {
  return (
    <div
      className={twMerge(
        `flex flex-col justify-center h-16 tablet:h-20 bg-charcoal pl-8 pr-6 textStyle-heading-lg`,
        className
      )}
    >
      <div className={`flex flex-row justify-between items-center`}>
        <span>{password}</span>
        <button
          className={`w-[33.5px] tablet:w-[37px] fill-mintGreen hover:fill-lavenderGray active:opacity-50 transition-colors p-2`}
          aria-label={'Copy'}
          onClick={() => navigator.clipboard.writeText(password)}
        >
          <svg viewBox="0 0 21 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
