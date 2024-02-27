import { useState } from 'react'
import { PasswordStrength } from '@/app/types'

export function usePassword() {
  const [generating, setGenerating] = useState(false)
  const [password, setPassword] = useState('PTx1f5DaFX')
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(3)

  const mockPasswords = ['alkis', 'sarah', 'foobar42', 'PTx1f5DaFX']
  const mockStrengths: PasswordStrength[] = [1, 4, 2, 3]

  async function generatePassword() {
    setGenerating(true)
    const randomIndex = Math.floor(Math.random() * mockPasswords.length)
    const randomPassword = mockPasswords[randomIndex]
    const randomStrength = mockStrengths[randomIndex]
    setPassword(randomPassword)
    setPasswordStrength(randomStrength)
    setGenerating(false)
  }

  return { password, passwordStrength, generate: generatePassword, generating }
}
