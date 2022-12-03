export const colors: Record<string, string> = {
  white: '#ffffff',
  yellowed: '#fcf9f0',
  rust: '#ac4807',
  darkrust: '#8f3d06',
  slate: '#2d2d2d',
  oldpaper: '#e8ddc8',
  tan: '#dca76e',
  leather: '#cc964b',
  coffee: '#5e340c',
  blackish: '#1d0e00',
}
export type Color = keyof typeof colors
export const mapColor = (color: Color) => colors[color] || ''
