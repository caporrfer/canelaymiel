import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Canela y Miel | Desayunos en La Monacilla',
  description: 'Café, desayunos y churros con chocolate en La Monacilla, Huelva.',
  metadataBase: new URL('https://canelaymiel.lamonacilla'),
  openGraph: { title: 'Canela y Miel La Monacilla', description: 'Desayunos para disfrutar sin prisa.', type: 'website' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>
}
