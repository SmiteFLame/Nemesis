export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

// Default 는 1개
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
