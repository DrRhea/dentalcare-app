import VideoCard from '@/components/VideoCard'

const videos = [
  {
    id: 1,
    title: 'Video Edukasi Kesehatan Gigi untuk Ibu Hamil',
    videoId: 'ZPndF7FjMU8',
    embedUrl: 'https://www.youtube.com/embed/ZPndF7FjMU8'
  },
  {
    id: 2,
    title: 'Video Edukasi Kesehatan Gigi untuk Ibu Hamil',
    videoId: 'HZUsvK8bE2k',
    embedUrl: 'https://www.youtube.com/embed/HZUsvK8bE2k'
  }
]

export default function Edukasi() {
  return (
    <div className="bg-gradient-to-b from-primary to-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-accent mb-4">
          Video Kesehatan Gigi
        </h1>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Pelajari cara menjaga kesehatan gigi dan mulut melalui video edukasi berikut
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <div key={video.id} className="bg-primary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-primary/20">
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
                <h3 className="text-lg font-semibold text-accent">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-accent mb-4">Tips Menonton Video</h2>
            <ul className="list-disc list-inside text-secondary space-y-2">
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

