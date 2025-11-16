import Button from '@/components/Button'
import Card from '@/components/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary to-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[100vh] w-full overflow-hidden">
        <Image
          src="/images/image-si-bunda.jpg"
          alt="SI BUNDA GIGI - Sahabat Ibu Hamil"
          fill
          className="object-cover object-center"
          priority
        />
      </section>

      {/* Apa itu Kesehatan Gigi - 3 Kolom Card */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
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
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Video Edukasi
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZPndF7FjMU8?rel=0&modestbranding=1"
                title="Video Edukasi Kesehatan Gigi untuk Ibu Hamil"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HZUsvK8bE2k?rel=0&modestbranding=1"
                title="Video Edukasi Kesehatan Gigi untuk Ibu Hamil"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button href="/edukasi" variant="outline">
            Lihat Semua Video
          </Button>
        </div>
      </section>

      {/* Logo Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo-1.png"
              alt="Rumah Sakit Gigi Mulut Bhakti Wiyata"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/logo-2.png"
              alt="PUSKESMAS MOJO"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

