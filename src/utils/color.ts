export const colors: Record<string, string> = {
  white: '#ffffff',
  yellowed: '#fcf9f0',
  oldpaper: '#e8ddc8',
  tan: '#dca76e',
  leather: '#cc964b',
  rust: '#ac4807',
  darkrust: '#8f3d06',
  coco: '#895F19',
  coffee: '#5e340c',
  slate: '#2d2d2d',
  blackish: '#1d0e00',
}
export type Color = keyof typeof colors
export const mapColor = (color: Color) => colors[color] || ''

export const fonts = {
  title: 'Rye, cursive',
  heading: 'Vollkorn SC, cursive',
  body: 'Vesper Libre, Helvetica N,eue, serif',
}
