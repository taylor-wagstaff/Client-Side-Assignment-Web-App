import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import Footer from '../../components/footer'

export const metadata = {
  title: 'Time Mates',
  description: 'See your friends TimeZones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <div className="main">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
