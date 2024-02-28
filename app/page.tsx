'use client'

import Title from '@/app/Title'
import PasswordBox from '@/app/PasswordBox'
import OptionsBox from '@/app/OptionsBox'
import { twMerge } from 'tailwind-merge'
import StrengthMeter from '@/app/StrengthMeter'
import Button from '@/app/Button'
import { usePassword } from '@/app/password'
import Container from '@/app/Container'
import { LengthSlider, LengthSliderRef } from '@/app/LengthSlider'
import { Checkboxes, CheckboxesRef } from '@/app/Checkboxes'
import { useRef, useState } from 'react'

export default function Home() {
  const { password, passwordStrength, generate, generating } = usePassword()
  const sliderRef = useRef<LengthSliderRef>(null)
  const optionsRef = useRef<CheckboxesRef>(null)
  const [noCategoriesSelected, setNoCategoriesSelected] = useState(false)

  function onClick() {
    const length = sliderRef.current?.getValue()
    const selectedCategories = optionsRef.current?.getSelectedCategories()
    if (length && selectedCategories) {
      return generate({ length, selectedCategories })
    }
  }

  function onCheckboxesChange() {
    const selectedCategories = optionsRef.current?.getSelectedCategories()
    if (selectedCategories?.length === 0) {
      setNoCategoriesSelected(true)
    } else {
      setNoCategoriesSelected(false)
    }
  }

  return (
    <Container className={`relative`}>
      <Title
        className={`mb-4 tablet:absolute tablet:left-1/2 tablet:-translate-x-1/2 tablet:-translate-y-full tablet:pb-8`}
      />
      <PasswordBox className={`mb-4 tablet:mb-6`} password={password} />
      <OptionsBox>
        <LengthSlider className={`mb-[42px]`} ref={sliderRef} />
        <Checkboxes
          className={`mb-8`}
          ref={optionsRef}
          onCheckedChange={onCheckboxesChange}
        />
        <StrengthMeter
          className={`mb-4 tablet:mb-8`}
          value={passwordStrength}
        />
        <Button
          className={twMerge(`w-full h-[56px] tablet:h-[65px] shrink-0`)}
          onClick={onClick}
          disabled={generating || noCategoriesSelected}
        />
      </OptionsBox>
    </Container>
  )
}
