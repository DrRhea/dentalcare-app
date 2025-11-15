import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Edukasi Kesehatan Gigi
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Platform edukasi kesehatan gigi untuk meningkatkan kesadaran masyarakat tentang pentingnya menjaga kesehatan gigi dan mulut. Pelajari cara merawat gigi dengan benar dan cegah masalah kesehatan gigi sejak dini.
        </p>
        <Button href="/pretest" variant="primary">
          Mulai Pretest
        </Button>
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
              src="https://www.youtube.com/embed/9iEPzbG-xLE?rel=0&modestbranding=1"
              title="Cara Merawat Kesehatan Gigi dan Mulut"
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

