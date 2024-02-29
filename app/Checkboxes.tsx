'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { twMerge } from 'tailwind-merge'
import { forwardRef, useImperativeHandle } from 'react'
import { CharacterCategories } from '@/app/types'

const labels = [
  'Include Uppercase Letters',
  'Include Lowercase Letters',
  'Include Numbers',
  'Include Symbols',
]

export type CheckboxesRef = {
  getSelectedCategories: () => CharacterCategories[]
}

const Checkboxes = forwardRef<
  CheckboxesRef,
  { onCheckedChange: () => void; className?: string }
>(({ onCheckedChange, className = '' }, ref) => {
  const uppercaseRef =
    React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null)
  const lowercaseRef =
    React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null)
  const numbersRef =
    React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null)
  const symbolsRef =
    React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null)

  useImperativeHandle(ref, () => ({
    getSelectedCategories: () => {
      const selectedCategories: CharacterCategories[] = []
      if (uppercaseRef.current?.dataset.state! === 'checked') {
        selectedCategories.push('uppercase')
      }
      if (lowercaseRef.current?.dataset.state! === 'checked') {
        selectedCategories.push('lowercase')
      }
      if (numbersRef.current?.dataset.state! === 'checked') {
        selectedCategories.push('numbers')
      }
      if (symbolsRef.current?.dataset.state! === 'checked') {
        selectedCategories.push('symbols')
      }
      return selectedCategories
    },
  }))

  return (
    <div className={twMerge(`flex flex-col gap-y-4 tablet:gap-y-5`, className)}>
      <CheckboxWithLabel
        id={'uppercase'}
        label={labels[0]}
        checkboxRef={uppercaseRef}
        onCheckedChange={onCheckedChange}
        defaultChecked={true}
      />
      <CheckboxWithLabel
        id={'lowercase'}
        label={labels[1]}
        checkboxRef={lowercaseRef}
        onCheckedChange={onCheckedChange}
        defaultChecked={true}
      />
      <CheckboxWithLabel
        id={'numbers'}
        label={labels[2]}
        checkboxRef={numbersRef}
        onCheckedChange={onCheckedChange}
        defaultChecked={true}
      />
      <CheckboxWithLabel
        id={'symbols'}
        label={labels[3]}
        checkboxRef={symbolsRef}
        onCheckedChange={onCheckedChange}
        defaultChecked={false}
      />
    </div>
  )
})
Checkboxes.displayName = 'Checkboxes'

function CheckboxWithLabel({
  id,
  label,
  className = '',
  checkboxRef,
  onCheckedChange,
  defaultChecked,
}: {
  id: string
  label: string
  className?: string
  checkboxRef?: React.RefObject<React.ElementRef<typeof CheckboxPrimitive.Root>>
  onCheckedChange?: () => void
  defaultChecked?: boolean
}) {
  return (
    <div
      className={twMerge(`flex items-center gap-x-5 tablet:gap-x-6`, className)}
    >
      <Checkbox
        id={id}
        name={label}
        aria-labelledby={`${id}-label`}
        ref={checkboxRef}
        onCheckedChange={onCheckedChange}
        defaultChecked={defaultChecked}
      />
      <label
        className={`textStyle-body leading-none text-lavenderGray`}
        id={`${id}-label`}
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

export { Checkboxes }
