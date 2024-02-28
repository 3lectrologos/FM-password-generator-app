export const passwordStrengthList = [1, 2, 3, 4] as const
export type PasswordStrength = (typeof passwordStrengthList)[number]

export const passwordStrengthNames = {
  1: 'too weak!',
  2: 'weak',
  3: 'medium',
  4: 'strong',
} as const

export const passwordStrengthBgColors = {
  1: 'bg-salmonRed',
  2: 'bg-coral',
  3: 'bg-mustardYellow',
  4: 'bg-mintGreen',
} as const

export const characterCategories = [
  'uppercase',
  'lowercase',
  'numbers',
  'symbols',
] as const

export type CharacterCategories = (typeof characterCategories)[number]

export const categoryToCharlistMap: Map<CharacterCategories, string[]> =
  new Map([
    ['uppercase', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')],
    ['lowercase', 'abcdefghijklmnopqrstuvwxyz'.split('')],
    ['numbers', '0123456789'.split('')],
    ['symbols', '!@#$%^&*()_+{}:"<>?'.split('')],
  ])
