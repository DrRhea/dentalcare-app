import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'SI BUNDA GIGI - SAHABAT IBU HAMIL-INGAT PERIKSA GIGI',
  description: 'Platform edukasi kesehatan gigi untuk ibu hamil untuk meningkatkan kesadaran tentang pentingnya menjaga kesehatan gigi dan mulut selama kehamilan',
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
        <FloatingWhatsApp />
      </body>
    </html>
  )
}

