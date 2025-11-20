import Card from '@/components/Card'

export default function About() {
  return (
    <div className="bg-gradient-to-b from-primary to-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Tentang Kami */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center text-accent mb-8">
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

        {/* Manfaat Menjaga Kesehatan Gigi Ibu Hamil */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-accent mb-12">
            Manfaat Menjaga Kesehatan Gigi Ibu Hamil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              title="1. Mencegah Peradangan Gusi (Gingivitis Kehamilan)"
              description="Perubahan hormon selama kehamilan membuat gusi lebih sensitif. Perawatan yang baik mencegah gusi bengkak, merah, dan mudah berdarah."
            />
            <Card
              title="2. Mengurangi Risiko Infeksi yang Dapat Mempengaruhi Janin"
              description="Infeksi gigi atau gusi dapat memicu respon peradangan yang berhubungan dengan kelahiran prematur dan bayi lahir dengan berat badan rendah. Menjaga kesehatan gigi berarti menjaga kesehatan bayi."
            />
            <Card
              title="3. Mencegah Karies dan Sakit Gigi"
              description="Gigi berlubang cenderung memburuk selama hamil akibat perubahan pola makan, muntah, dan malas menyikat gigi. Merawat gigi membantu mencegah rasa sakit dan komplikasi."
            />
            <Card
              title="4. Membantu Ibu Makan Lebih Nyaman"
              description="Rasa sakit gigi dapat mengganggu pola makan. Gigi dan gusi yang sehat membantu ibu makan dengan baik untuk mendukung nutrisi janin."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-accent mb-12">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card
              title="1. Apakah aman periksa gigi saat hamil?"
              description="Ya, aman. Pemeriksaan rutin dan perawatan dasar justru dianjurkan, terutama pada trimester kedua."
            />
            <Card
              title="2. Bisakah ibu hamil melakukan tambal gigi?"
              description="Bisa. Bahan tambal aman dan tidak membahayakan janin. Waktu terbaik adalah trimester kedua."
            />
            <Card
              title="3. Apakah obat sakit gigi aman untuk ibu hamil?"
              description="Hanya obat tertentu yang aman. Sebaiknya konsultasi dulu dengan dokter atau bidan sebelum minum obat apa pun."
            />
            <Card
              title="4. Bagaimana jika mual saat menyikat gigi?"
              description="Gunakan sikat kecil, pasta gigi dengan aroma ringan dan menyikat pada waktu ketika mual berkurang."
            />
            <Card
              title="5. Haruskah periksa gigi sebelum hamil?"
              description="Sangat dianjurkan untuk mencegah masalah selama kehamilan, karena beberapa perawatan lebih sulit dilakukan saat hamil."
            />
          </div>
        </section>
      </div>
    </div>
  )
}

