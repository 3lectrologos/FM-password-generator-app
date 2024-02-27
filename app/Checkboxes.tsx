'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { twMerge } from 'tailwind-merge'

const labels = [
  'Include Uppercase Letters',
  'Include Lowercase Letters',
  'Include Numbers',
  'Include Symbols',
]

export default function Checkboxes({ className = '' }: { className?: string }) {
  return (
    <div className={twMerge(`flex flex-col gap-y-4 tablet:gap-y-5`, className)}>
      {labels.map((label) => (
        <CheckboxWithLabel key={label} label={label} />
      ))}
    </div>
  )
}

function CheckboxWithLabel({
  label,
  className = '',
}: {
  label: string
  className?: string
}) {
  return (
    <div
      className={twMerge(`flex items-center gap-x-5 tablet:gap-x-6`, className)}
    >
      <Checkbox id={label} name={label} />
      <label
        className={`textStyle-body leading-none text-lavenderGray`}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  )
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={twMerge(
      'peer h-5 w-5 shrink-0 border-2 border-lavenderGray ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mintGreen/35 focus-visible:ring-offset-charcoal focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-mintGreen data-[state=checked]:border-none',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={twMerge('flex items-center justify-center')}
    >
      <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="#18171F"
          strokeWidth="3"
          fill="none"
          d="M1 5.607 4.393 9l8-8"
        />
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName
