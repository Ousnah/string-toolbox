export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  export function slugify(str: string): string {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/[^a-z0-9 ]/g, "")
      .trim()
      .replace(/\s+/g, "-")
  }
  
  export function truncate(str: string, max: number): string {
    return str.length > max ? str.slice(0, max) + "..." : str
  }
  
  export function isPalindrome(str: string): boolean {
    const cleaned = str
      .toLowerCase()
      .normalize("NFD") // décompose les accents
      .replace(/[\u0300-\u036f]/g, "") // supprime les accents
      .replace(/[^a-z0-9]/g, "") // supprime les caractères non alphanumériques
    return cleaned === cleaned.split("").reverse().join("")
  }
  export function reverse(str: string): string {
    return str.split('').reverse().join('');
  }
  
  export function kebabCase(str: string): string {
    return str
      .replace(/\s+/g, '-')
      .replace(/[A-Z]/g, letter => '-' + letter.toLowerCase())
      .replace(/^-/, '')
      .toLowerCase();
  }
  
  export function camelCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
  }
  