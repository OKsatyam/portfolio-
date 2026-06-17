import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Satyam | AI × Web Engineer',
  description: 'Building intelligent, full-stack products end-to-end.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-base text-text-primary">{children}</body>
    </html>
  )
}
