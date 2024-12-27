import { Inter, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export const helvetica = localFont({
  src: './Helvetica.ttf',
  display: 'swap',
})

export const helveticaLight = localFont({
  src: './Helvetica-Thin.ttf',
  display: 'swap',
})


export const helveticabold = localFont({
  src: './Helvetica-Bold.ttf',
  weight: '700',
  display: 'swap',
})