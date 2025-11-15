import VideoCard from '@/components/VideoCard'

const videos = [
  {
    id: 1,
    title: 'Cara Sikat Gigi yang Benar',
    videoId: 'BaUnfIaI1rE',
    embedUrl: 'https://www.youtube.com/embed/BaUnfIaI1rE'
  },
  {
    id: 2,
    title: 'Penyebab Gigi Berlubang',
    videoId: 'BaUnfIaI1rE',
    embedUrl: 'https://www.youtube.com/embed/BaUnfIaI1rE'
  },
  {
    id: 3,
    title: 'Bahaya Tidak Menjaga Kebersihan Mulut',
    videoId: 'BaUnfIaI1rE',
    embedUrl: 'https://www.youtube.com/embed/BaUnfIaI1rE'
  },
  {
    id: 4,
    title: 'Tips Menghindari Bau Mulut',
    videoId: 'BaUnfIaI1rE',
    embedUrl: 'https://www.youtube.com/embed/BaUnfIaI1rE'
  },
  {
    id: 5,
    title: 'Cara Menggunakan Benang Gigi',
    videoId: 'BaUnfIaI1rE',
    embedUrl: 'https://www.youtube.com/embed/BaUnfIaI1rE'
  },
  {
    id: 6,
    title: 'Pentingnya Pemeriksaan Rutin ke Dokter Gigi',
    videoId: 'BaUnfIaI1rE',
    embedUrl: 'https://www.youtube.com/embed/BaUnfIaI1rE'
  }
]

export default function Edukasi() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Video Kesehatan Gigi
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Pelajari cara menjaga kesehatan gigi dan mulut melalui video edukasi berikut
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${video.embedUrl}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tips Menonton Video</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Simak dengan baik setiap langkah yang dijelaskan dalam video</li>
              <li>Praktikkan teknik yang diajarkan dalam kehidupan sehari-hari</li>
              <li>Jika ada pertanyaan, jangan ragu untuk konsultasi ke dokter gigi</li>
              <li>Bagikan video ini kepada keluarga dan teman untuk meningkatkan kesadaran kesehatan gigi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

