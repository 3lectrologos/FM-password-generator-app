'use client'

import { twMerge } from 'tailwind-merge'
import { Ref, useImperativeHandle, useState } from 'react'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

export type LengthSliderRef = {
  getValue: () => number
}

const LengthSlider = React.forwardRef<
  LengthSliderRef,
  React.ComponentPropsWithoutRef<'div'>
>(({ className }, ref) => {
  const [length, setLength] = useState(10)

  useImperativeHandle(
    ref,
    () => ({
      getValue: () => length,
    }),
    [length]
  )

  return (
    <div
      className={twMerge(
        `flex flex-col gap-[23px] tablet:gap-[26px]`,
        className
      )}
    >
      <div className={`flex flex-row justify-between items-center`}>
        <label
          className={twMerge(`textStyle-body text-lavenderGray`)}
          id={`length-slider-label`}
        >
          Character Length
        </label>
        <span className={`textStyle-heading-lg text-mintGreen`}>{length}</span>
      </div>
      <Slider
        className={`w-full cursor-pointer`}
        name={'Password Length'}
        min={3}
        max={14}
        value={[length]}
        onValueChange={(value) => setLength(value[0])}
        aria-labelledby={`length-slider-label`}
      />
    </div>
  )
})
LengthSlider.displayName = 'LengthSlider'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={twMerge(
        'relative flex w-full touch-none select-none items-center group',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-deepSpace">
        <SliderPrimitive.Range className="absolute h-full bg-mintGreen" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        aria-labelledby={props['aria-labelledby']}
        className="block h-[28px] w-[28px] rounded-full border-2 bg-lavenderGray transition-colors focus-visible:outline-none focus-visible:border-mintGreen focus-visible:bg-deepSpace focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal focus-visible:ring-mintGreen/35 group-hover:bg-deepSpace group-hover:border-2 group-hover:border-mintGreen disabled:pointer-events-none disabled:opacity-50"
      />
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { LengthSlider }
