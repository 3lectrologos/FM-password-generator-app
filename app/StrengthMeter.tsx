import {
  PasswordStrength,
  passwordStrengthBgColors,
  passwordStrengthList,
  passwordStrengthNames,
} from '@/app/types'
import { twMerge } from 'tailwind-merge'

export default function StrengthMeter({
  value,
  className,
}: {
  value: PasswordStrength
  className?: string
}) {
  return (
    <div
      className={twMerge(
        `flex flex-row justify-between items-center h-[56px] tablet:h-[72px] px-4 tablet:px-8 bg-deepSpace`,
        className
      )}
    >
      <span className={`textStyle-body uppercase text-softPurple`}>
        strength
      </span>
      <div
        className={`flex flex-row gap-x-4 textStyle-strength uppercase text-lavenderGray items-center`}
      >
        <span>{passwordStrengthNames[value]}</span>
        <StrengthBars value={value} />
      </div>
    </div>
  )
}

function StrengthBars({
  value,
  className,
}: {
  value: PasswordStrength
  className?: string
}) {
  const bgColor = passwordStrengthBgColors[value]

  return (
    <div className={`flex flex-row gap-x-2`}>
      {passwordStrengthList.map((strength, index) => (
        <div
          key={strength}
          className={twMerge(
            `w-[10px] h-[28px] transition-colors`,
            value > index ? bgColor : `border-2 border-lavenderGray`
          )}
        />
      ))}
    </div>
  )
}
