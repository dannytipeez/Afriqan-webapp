import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '300', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Capture moments, Create memeries',
  description: 'this is a portfolio for afrikan images',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={poppins.className} suppressHydrationWarning={true}>{children}
      </body>
    </html>
  )
}
