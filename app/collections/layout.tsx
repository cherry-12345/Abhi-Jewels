import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections - AJ Abhi Jewels',
  description: 'Browse our exquisite collections of jewelry including bracelets, bridal, earrings, necklaces, and rings.',
}

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
