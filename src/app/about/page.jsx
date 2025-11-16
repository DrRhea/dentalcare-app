import Card from '@/components/Card'

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Tentang Kami */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center text-secondary mb-8">
            Tentang Kami
          </h1>
          <div className="max-w-3xl mx-auto">
            <Card>
              <p className="text-secondary leading-relaxed">
                SI BUNDA GIGI merupakan platform edukasi kesehatan gigi yang dibuat untuk ibu hamil. Web ini bertujuan untuk meningkatkan pengetahuan ibu hamil tentang pentingnya menjaga kesehatan gigi selama kehamilan. Pelajari cara merawat gigi yang baik dan benar selama masa kehamilan melalui video interaktif, status kesehatan gigi ibu hamil dan konsultasi dengan dokter gigi.
              </p>
            </Card>
          </div>
        </section>

        {/* Manfaat Menjaga Kesehatan Gigi */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Manfaat Menjaga Kesehatan Gigi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="Mencegah Karies Gigi"
              description="Dengan menyikat gigi secara teratur dan benar, kita dapat mencegah terbentuknya plak yang menyebabkan karies gigi."
            />
            <Card
              title="Mencegah Bau Mulut"
              description="Kebersihan gigi yang terjaga membantu mencegah bau mulut yang tidak sedap dan meningkatkan kepercayaan diri."
            />
            <Card
              title="Mencegah Penyakit Gusi"
              description="Merawat gigi dengan baik dapat mencegah penyakit gusi seperti gingivitis dan periodontitis yang dapat menyebabkan gigi tanggal."
            />
            <Card
              title="Meningkatkan Kesehatan Umum"
              description="Kesehatan gigi yang baik berkaitan erat dengan kesehatan tubuh secara keseluruhan, termasuk kesehatan jantung dan diabetes."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card
              title="Seberapa sering saya harus menyikat gigi?"
              description="Disarankan untuk menyikat gigi minimal 2 kali sehari, yaitu setelah sarapan dan sebelum tidur. Gunakan pasta gigi berfluoride dan sikat gigi dengan bulu yang lembut."
            />
            <Card
              title="Kapan waktu yang tepat untuk periksa ke dokter gigi?"
              description="Disarankan untuk melakukan pemeriksaan rutin ke dokter gigi setiap 6 bulan sekali. Namun, jika ada keluhan atau masalah, segera konsultasikan ke dokter gigi."
            />
            <Card
              title="Apakah penting menggunakan benang gigi?"
              description="Ya, benang gigi (dental floss) sangat penting untuk membersihkan sela-sela gigi yang tidak dapat dijangkau oleh sikat gigi. Gunakan benang gigi minimal sekali sehari."
            />
            <Card
              title="Bagaimana cara mencegah gigi berlubang?"
              description="Cara mencegah gigi berlubang antara lain: menyikat gigi secara teratur, mengurangi konsumsi makanan manis, menggunakan pasta gigi berfluoride, dan melakukan pemeriksaan rutin ke dokter gigi."
            />
            <Card
              title="Apakah penting menggunakan obat kumur?"
              description="Obat kumur dapat membantu membersihkan mulut dan mengurangi bakteri, namun tidak menggantikan fungsi menyikat gigi. Gunakan sebagai pelengkap perawatan gigi."
            />
          </div>
        </section>
      </div>
    </div>
  )
}

