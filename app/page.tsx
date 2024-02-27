'use client'

import Title from '@/app/Title'
import PasswordBox from '@/app/PasswordBox'
import OptionsBox from '@/app/OptionsBox'
import { twMerge } from 'tailwind-merge'
import StrengthMeter from '@/app/StrengthMeter'
import Button from '@/app/Button'
import { usePassword } from '@/app/password'
import Container from '@/app/Container'
import LengthSlider from '@/app/LengthSlider'
import Checkboxes from '@/app/Checkboxes'

export default function Home() {
  const { password, passwordStrength, generate, generating } = usePassword()

  return (
    <Container className={`relative`}>
      <Title
        className={`mb-4 tablet:absolute tablet:left-1/2 tablet:-translate-x-1/2 tablet:-translate-y-full tablet:pb-8`}
      />
      <PasswordBox className={`mb-4 tablet:mb-6`} password={password} />
      <OptionsBox>
        <LengthSlider className={`mb-[42px]`} />
        <Checkboxes className={`mb-8`} />
        <StrengthMeter
          className={`mb-4 tablet:mb-8`}
          value={passwordStrength}
        />
        <Button
          className={twMerge(`w-full h-[56px] tablet:h-[65px] shrink-0`)}
          onClick={generate}
          disabled={generating}
        />
      </OptionsBox>
    </Container>
  )
}
