import { useState } from 'react'
import {
  categoryToCharlistMap,
  CharacterCategories,
  PasswordStrength,
} from '@/app/types'

function computeStrength(password: string): PasswordStrength {
  const hasUppercase = new RegExp(
    `[${categoryToCharlistMap.get('uppercase')!.join('')}]`
  ).test(password)
  const hasLowercase = new RegExp(
    `[${categoryToCharlistMap.get('lowercase')!.join('')}]`
  ).test(password)
  const hasNumbers = new RegExp(
    `[${categoryToCharlistMap.get('numbers')!.join('')}]`
  ).test(password)
  const hasSymbols = new RegExp(
    `[${categoryToCharlistMap.get('symbols')!.join('')}]`
  ).test(password)

  const numCategories = [
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSymbols,
  ].filter((x) => x).length

  if (password.length <= 4) {
    return 1
  } else if (password.length <= 6) {
    return Math.min(3, numCategories) as PasswordStrength
  } else if (password.length <= 8) {
    return (1 + Math.min(3, numCategories)) as PasswordStrength
  } else if (password.length <= 10) {
    return Math.min(4, 2 + Math.min(4, numCategories)) as PasswordStrength
  } else {
    return 4
  }
}

export function usePassword() {
  const [generating, setGenerating] = useState(false)
  const [password, setPassword] = useState('PTx1f5DaFX')
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(3)

  async function generatePassword({
    length,
    selectedCategories,
  }: {
    length: number
    selectedCategories: CharacterCategories[]
  }) {
    setGenerating(true)

    const validCharacters = new Map(
      [...categoryToCharlistMap].filter(([cat, _chars]) =>
        selectedCategories.includes(cat)
      )
    )
    const password = Array.from({ length })
      .map(() => {
        const randomIndex = Math.floor(Math.random() * validCharacters.size)
        const category = validCharacters.get(
          Array.from(validCharacters.keys())[randomIndex]
        )!
        return category[Math.floor(Math.random() * category.length)]
      })
      .join('')
    setPassword(password)
    setPasswordStrength(computeStrength(password))
    setGenerating(false)
  }

  return { password, passwordStrength, generate: generatePassword, generating }
}
