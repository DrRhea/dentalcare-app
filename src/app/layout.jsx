import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DentalCare - Edukasi Kesehatan Gigi',
  description: 'Platform edukasi kesehatan gigi untuk meningkatkan kesadaran masyarakat tentang pentingnya menjaga kesehatan gigi dan mulut',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

