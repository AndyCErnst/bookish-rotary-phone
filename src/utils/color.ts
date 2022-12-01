const colors: Record<string, string> = {
  white: '#ffffff',
  yellowed: '#f8f8ea',
  rust: '#ac4807',
  slate: '#2d2d2d',
  oldpaper: '#e8ddc8',
  tan: '#dca76e',
  leather: '#ca7b1d',
  coffee: '#5e340c',
  blackish: '#1d0e00',
}
export type Color = keyof typeof colors
export const mapColor = (color: Color) => colors[color] || ''
