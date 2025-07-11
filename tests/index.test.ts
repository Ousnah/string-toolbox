import { describe, it, expect } from 'vitest'
import { capitalize, slugify, truncate, isPalindrome } from '../src/index'

describe('capitalize', () => {
  it('met en majuscule la première lettre', () => {
    expect(capitalize('chat')).toBe('Chat')
  })
})

describe('slugify', () => {
  it('convertit une phrase en slug', () => {
    expect(slugify('Salut le monde !')).toBe('salut-le-monde')
  })
})

describe('truncate', () => {
  it('tronque si trop long', () => {
    expect(truncate('Bonjour tout le monde', 7)).toBe('Bonjour...')
  })
  it('ne tronque pas si assez court', () => {
    expect(truncate('Hello', 10)).toBe('Hello')
  })
})

describe('isPalindrome', () => {
  it('"radar" est un palindrome', () => {
    expect(isPalindrome('radar')).toBe(true)
  })
  it('"Chat" n\'est pas un palindrome', () => {
    expect(isPalindrome('Chat')).toBe(false)
  })
  it('"Ésope reste ici et se repose" est un palindrome', () => {
    expect(isPalindrome('Ésope reste ici et se repose')).toBe(true)
  })
})
