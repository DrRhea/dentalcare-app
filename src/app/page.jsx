import Button from '@/components/Button'
import Card from '@/components/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[100vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image-si-bunda.jpg"
            alt="SI BUNDA GIGI - Sahabat Ibu Hamil"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 drop-shadow-lg">
              SAHABAT IBU HAMIL<br />INGAT PERIKSA GIGI
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto drop-shadow-md bg-white/80 px-6 py-4 rounded-lg">
              Platform edukasi kesehatan gigi untuk ibu hamil untuk meningkatkan kesadaran tentang pentingnya menjaga kesehatan gigi dan mulut selama kehamilan. Pelajari cara merawat gigi dengan benar dan cegah masalah kesehatan gigi sejak dini.
            </p>
            <Button href="/pretest" variant="primary">
              Mulai Pretest
            </Button>
          </div>
        </div>
      </section>

      {/* Apa itu Kesehatan Gigi - 3 Kolom Card */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Apa itu Kesehatan Gigi?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Kebersihan Gigi"
            description="Menjaga kebersihan gigi adalah langkah pertama untuk kesehatan mulut yang optimal. Sikat gigi minimal 2 kali sehari dengan teknik yang benar."
          />
          <Card
            title="Pencegahan Penyakit Gigi"
            description="Dengan menjaga kebersihan dan pola makan yang sehat, kita dapat mencegah berbagai penyakit gigi seperti karies, gingivitis, dan periodontitis."
          />
          <Card
            title="Pentingnya Pemeriksaan Rutin"
            description="Pemeriksaan rutin ke dokter gigi setiap 6 bulan sekali membantu mendeteksi masalah gigi sejak dini dan mencegah komplikasi yang lebih serius."
          />
        </div>
      </section>

      {/* Video Edukasi Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Video Edukasi
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BaUnfIaI1rE?rel=0&modestbranding=1"
              title="Video Edukasi Kesehatan Gigi"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button href="/edukasi" variant="outline">
            Lihat Semua Video
          </Button>
        </div>
      </section>
    </div>
  )
}

