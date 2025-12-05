import fs from 'node:fs/promises'
import path from 'node:path'
import { colord } from 'colord'
import { createPorcelainTheme } from './helpers.mjs'

function desaturate(color: string) {
  const hsl = colord(color).toHsl()
  return colord({ h: hsl.h, s: hsl.s * 2 / 3, l: hsl.l }).toHex()
}

const lightTheme = createPorcelainTheme({
  type: 'light',
  name: 'Porcelain Light',
}, {
  text: {
    default: '#314158',
    muted: '#62748e',
    dimmed: '#90a1b9',
  },
  bg: {
    default: '#ffffff',
    elevated: '#f7f9fc',
  },
  border: {
    default: '#e2e8f0',
    stroked: '#cad5e2',
  },
  red: desaturate('#d20f39'),
  scarlet: desaturate('#e64553'),
  orange: desaturate('#fe640b'),
  yellow: desaturate('#df8e1d'),
  green: desaturate('#40a02b'),
  cyan: desaturate('#209fb5'),
  blue: desaturate('#1e66f5'),
  magenta: desaturate('#8839ef'),
})

const darkTheme = createPorcelainTheme({
  type: 'dark',
  name: 'Porcelain Dark',
}, {
  text: {
    default: '#e2e8f0',
    muted: '#90a1b9',
    dimmed: '#62748e',
  },
  bg: {
    default: '#0f172b',
    elevated: '#151f33',
  },
  border: {
    default: '#1d293d',
    stroked: '#314158',
  },
  red: '#f38ba8',
  scarlet: '#eba0ac',
  orange: '#fab387',
  yellow: '#f9e2af',
  green: '#a6e3a1',
  cyan: '#74c7ec',
  blue: '#89b4fa',
  magenta: '#cba6f7',
})

await fs.mkdir(
  path.resolve(import.meta.dirname, '../themes'),
  { recursive: true },
)
await Promise.all([
  fs.writeFile(
    path.resolve(import.meta.dirname, '../themes/porcelain-light-color-theme.json'),
    JSON.stringify(lightTheme, null, 2) + '\n',
  ),
  fs.writeFile(
    path.resolve(import.meta.dirname, '../themes/porcelain-dark-color-theme.json'),
    JSON.stringify(darkTheme, null, 2) + '\n',
  ),
])
