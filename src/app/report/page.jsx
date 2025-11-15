'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Report() {
  const [formData, setFormData] = useState({
    nama: '',
    umur: '',
    kebersihan: '',
    keluhan: '',
    bagianGigi: []
  })
  const [showResult, setShowResult] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      bagianGigi: checked
        ? [...prev.bagianGigi, value]
        : prev.bagianGigi.filter(item => item !== value)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowResult(true)
  }

  if (showResult) {
    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Laporan Pemeriksaan Digital
            </h1>
            
            <div className="space-y-4 mb-8">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Informasi Pasien</h3>
                <p className="text-gray-600"><strong>Nama:</strong> {formData.nama || 'Tidak diisi'}</p>
                <p className="text-gray-600"><strong>Umur:</strong> {formData.umur || 'Tidak diisi'} tahun</p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Tingkat Kebersihan Gigi</h3>
                <p className="text-gray-600">{formData.kebersihan || 'Tidak diisi'}</p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Keluhan</h3>
                <p className="text-gray-600 whitespace-pre-wrap">{formData.keluhan || 'Tidak ada keluhan'}</p>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Bagian Gigi yang Bermasalah</h3>
                <p className="text-gray-600">
                  {formData.bagianGigi.length > 0 ? formData.bagianGigi.join(', ') : 'Tidak ada'}
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Rekomendasi</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                  <li>Lakukan pemeriksaan rutin ke dokter gigi setiap 6 bulan sekali</li>
                  <li>Sikat gigi minimal 2 kali sehari dengan teknik yang benar</li>
                  <li>Gunakan benang gigi untuk membersihkan sela-sela gigi</li>
                  <li>Kurangi konsumsi makanan dan minuman manis</li>
                  <li>Gunakan pasta gigi berfluoride</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => {
                  setShowResult(false)
                  setFormData({
                    nama: '',
                    umur: '',
                    kebersihan: '',
                    keluhan: '',
                    bagianGigi: []
                  })
                }}
                variant="primary"
              >
                Isi Form Baru
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Layanan Pemeriksaan / Raport Digital
        </h1>
        
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label htmlFor="umur" className="block text-gray-700 font-semibold mb-2">
                Umur
              </label>
              <input
                type="number"
                id="umur"
                name="umur"
                value={formData.umur}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan umur Anda"
                min="1"
                max="120"
              />
            </div>

            <div>
              <label htmlFor="kebersihan" className="block text-gray-700 font-semibold mb-2">
                Tingkat Kebersihan Gigi
              </label>
              <select
                id="kebersihan"
                name="kebersihan"
                value={formData.kebersihan}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih tingkat kebersihan</option>
                <option value="Sangat Baik">Sangat Baik</option>
                <option value="Baik">Baik</option>
                <option value="Cukup">Cukup</option>
                <option value="Kurang">Kurang</option>
              </select>
            </div>

            <div>
              <label htmlFor="keluhan" className="block text-gray-700 font-semibold mb-2">
                Keluhan
              </label>
              <textarea
                id="keluhan"
                name="keluhan"
                value={formData.keluhan}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Jelaskan keluhan Anda terkait kesehatan gigi"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Bagian Gigi yang Bermasalah
              </label>
              <div className="space-y-2">
                {['Gigi Depan Atas', 'Gigi Depan Bawah', 'Gigi Geraham Atas', 'Gigi Geraham Bawah', 'Gigi Taring', 'Gusi', 'Lidah'].map((bagian) => (
                  <label key={bagian} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={bagian}
                      checked={formData.bagianGigi.includes(bagian)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{bagian}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full">
                Lihat Hasil Laporan
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

