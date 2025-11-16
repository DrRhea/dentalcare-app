'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Status() {
  const [formData, setFormData] = useState({
    // Data Identitas
    nama: '',
    usia: '',
    usiaKehamilan: '',
    nomorWA: '',
    
    // Skrining Kesehatan Gigi
    sakitGigi: '',
    gusiBerdarah: '',
    gigiBerlubang: '',
    pembengkakanGusi: '',
    sulitMengunyah: '',
    mualMuntah: '',
    terakhirPeriksa: '',
    makananManis: '',
    
    // Kebiasaan Kebersihan Gigi
    frekuensiSikat: '',
    pastaGigiFluoride: '',
    benangGigi: '',
    kumurSetelahMuntah: ''
  })
  
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [riskLevel, setRiskLevel] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const calculateScore = () => {
    let totalScore = 0
    
    // Skrining Kesehatan Gigi (Ya = 1 poin)
    const screeningQuestions = [
      'sakitGigi',
      'gusiBerdarah',
      'gigiBerlubang',
      'pembengkakanGusi',
      'sulitMengunyah',
      'mualMuntah'
    ]
    
    screeningQuestions.forEach(q => {
      if (formData[q] === 'Ya') {
        totalScore += 1
      }
    })
    
    // Kapan terakhir periksa gigi (Lebih dari 6 bulan = 1 poin)
    if (formData.terakhirPeriksa === 'Lebih dari 6 bulan' || formData.terakhirPeriksa === 'Tidak pernah') {
      totalScore += 1
    }
    
    // Makanan manis setiap hari (Ya = 1 poin)
    if (formData.makananManis === 'Ya') {
      totalScore += 1
    }
    
    // Kebiasaan Kebersihan Gigi
    if (formData.frekuensiSikat === '1×' || formData.frekuensiSikat === 'Tidak pernah') {
      totalScore += 1
    }
    
    if (formData.pastaGigiFluoride === 'Tidak') {
      totalScore += 1
    }
    
    if (formData.benangGigi === 'Tidak') {
      totalScore += 1
    }
    
    if (formData.kumurSetelahMuntah === 'Tidak') {
      totalScore += 1
    }
    
    return totalScore
  }

  const getRiskLevel = (score) => {
    if (score >= 8) {
      return {
        level: 'Tinggi',
        message: 'Ibu mengalami beberapa keluhan. Disarankan periksa gigi ke Puskesmas dalam 1 minggu',
        color: 'bg-red-50 border-red-300 text-red-800'
      }
    } else if (score >= 4) {
      return {
        level: 'Sedang',
        message: 'Ada sedikit masalah. Lakukan edukasi mandiri dan kontrol dalam 1 bulan',
        color: 'bg-yellow-50 border-yellow-300 text-yellow-800'
      }
    } else {
      return {
        level: 'Rendah',
        message: 'Kondisi baik. Pertahankan kebersihan gigi, periksa rutin tiap trimester',
        color: 'bg-green-50 border-green-300 text-green-800'
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const calculatedScore = calculateScore()
    const risk = getRiskLevel(calculatedScore)
    setScore(calculatedScore)
    setRiskLevel(risk)
    setShowResult(true)
  }

  if (showResult) {
    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Hasil Skrining Kesehatan Gigi
            </h1>
            
            <div className="mb-8">
              <div className={`p-6 rounded-lg border-2 ${riskLevel.color} mb-6`}>
                <h2 className="text-2xl font-bold mb-2">Skor: {score} poin</h2>
                <h3 className="text-xl font-semibold mb-2">Risiko {riskLevel.level}</h3>
                <p className="text-lg">{riskLevel.message}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Data Identitas</h3>
                  <p className="text-gray-600"><strong>Nama:</strong> {formData.nama || 'Tidak diisi'}</p>
                  <p className="text-gray-600"><strong>Usia:</strong> {formData.usia || 'Tidak diisi'} tahun</p>
                  <p className="text-gray-600"><strong>Usia Kehamilan:</strong> {formData.usiaKehamilan || 'Tidak diisi'}</p>
                  <p className="text-gray-600"><strong>Nomor WA:</strong> {formData.nomorWA || 'Tidak diisi'}</p>
                </div>
              </div>
            </div>

            <div className="text-center space-x-4">
              <Button 
                onClick={() => {
                  setShowResult(false)
                  setFormData({
                    nama: '',
                    usia: '',
                    usiaKehamilan: '',
                    nomorWA: '',
                    sakitGigi: '',
                    gusiBerdarah: '',
                    gigiBerlubang: '',
                    pembengkakanGusi: '',
                    sulitMengunyah: '',
                    mualMuntah: '',
                    terakhirPeriksa: '',
                    makananManis: '',
                    frekuensiSikat: '',
                    pastaGigiFluoride: '',
                    benangGigi: '',
                    kumurSetelahMuntah: ''
                  })
                }}
                variant="primary"
              >
                Isi Form Baru
              </Button>
              <Button 
                href="/konsultasi"
                variant="outline"
              >
                Konsultasi Dokter
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Status Kesehatan Gigi
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Isi form di bawah ini untuk mengetahui status kesehatan gigi Anda
        </p>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Data Identitas Singkat */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Identitas Singkat</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2">
                    Nama *
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="usia" className="block text-gray-700 font-semibold mb-2">
                    Usia *
                  </label>
                  <input
                    type="number"
                    id="usia"
                    name="usia"
                    value={formData.usia}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Masukkan usia"
                    min="1"
                    max="50"
                  />
                </div>
                <div>
                  <label htmlFor="usiaKehamilan" className="block text-gray-700 font-semibold mb-2">
                    Usia Kehamilan *
                  </label>
                  <select
                    id="usiaKehamilan"
                    name="usiaKehamilan"
                    value={formData.usiaKehamilan}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Pilih usia kehamilan</option>
                    <option value="Trimester 1">Trimester 1</option>
                    <option value="Trimester 2">Trimester 2</option>
                    <option value="Trimester 3">Trimester 3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nomorWA" className="block text-gray-700 font-semibold mb-2">
                    Nomor WA *
                  </label>
                  <input
                    type="tel"
                    id="nomorWA"
                    name="nomorWA"
                    value={formData.nomorWA}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>
            </div>

            {/* Skrining Kesehatan Gigi */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Skrining Kesehatan Gigi</h2>
              <div className="space-y-4">
                {[
                  { name: 'sakitGigi', label: 'Apakah ibu sering mengalami sakit gigi?' },
                  { name: 'gusiBerdarah', label: 'Apakah gusi ibu mudah berdarah saat menyikat gigi?' },
                  { name: 'gigiBerlubang', label: 'Apakah terdapat gigi berlubang?' },
                  { name: 'pembengkakanGusi', label: 'Apakah ibu pernah mengalami pembengkakan gusi?' },
                  { name: 'sulitMengunyah', label: 'Apakah ibu kesulitan mengunyah karena gigi sakit?' },
                  { name: 'mualMuntah', label: 'Apakah ibu mengalami mual muntah berlebih?' }
                ].map((q) => (
                  <div key={q.name} className="border-b pb-4">
                    <label className="block text-gray-700 font-semibold mb-2">{q.label}</label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={q.name}
                          value="Ya"
                          checked={formData[q.name] === 'Ya'}
                          onChange={handleChange}
                          className="mr-2 w-4 h-4 text-pink-600"
                        />
                        <span className="text-gray-700">Ya</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name={q.name}
                          value="Tidak"
                          checked={formData[q.name] === 'Tidak'}
                          onChange={handleChange}
                          className="mr-2 w-4 h-4 text-pink-600"
                        />
                        <span className="text-gray-700">Tidak</span>
                      </label>
                    </div>
                  </div>
                ))}
                
                <div className="border-b pb-4">
                  <label htmlFor="terakhirPeriksa" className="block text-gray-700 font-semibold mb-2">
                    Kapan terakhir kali ibu periksa gigi?
                  </label>
                  <select
                    id="terakhirPeriksa"
                    name="terakhirPeriksa"
                    value={formData.terakhirPeriksa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Pilih waktu terakhir periksa</option>
                    <option value="Kurang dari 3 bulan">Kurang dari 3 bulan</option>
                    <option value="3-6 bulan lalu">3-6 bulan lalu</option>
                    <option value="Lebih dari 6 bulan">Lebih dari 6 bulan</option>
                    <option value="Tidak pernah">Tidak pernah</option>
                  </select>
                </div>
                
                <div className="border-b pb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Apakah ibu mengonsumsi makanan manis setiap hari?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="makananManis"
                        value="Ya"
                        checked={formData.makananManis === 'Ya'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Ya</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="makananManis"
                        value="Tidak"
                        checked={formData.makananManis === 'Tidak'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Tidak</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Kebiasaan Kebersihan Gigi */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Kebiasaan Kebersihan Gigi</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="frekuensiSikat" className="block text-gray-700 font-semibold mb-2">
                    Frekuensi menyikat gigi setiap hari *
                  </label>
                  <select
                    id="frekuensiSikat"
                    name="frekuensiSikat"
                    value={formData.frekuensiSikat}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Pilih frekuensi</option>
                    <option value="1×">1×</option>
                    <option value="2×">2×</option>
                    <option value="lebih">Lebih dari 2×</option>
                    <option value="Tidak pernah">Tidak pernah</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Apakah ibu sudah menggunakan pasta gigi berfluoride? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pastaGigiFluoride"
                        value="Ya"
                        checked={formData.pastaGigiFluoride === 'Ya'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Ya</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="pastaGigiFluoride"
                        value="Tidak"
                        checked={formData.pastaGigiFluoride === 'Tidak'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Tidak</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Apakah ibu menggunakan benang gigi? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="benangGigi"
                        value="Ya"
                        checked={formData.benangGigi === 'Ya'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Ya</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="benangGigi"
                        value="Tidak"
                        checked={formData.benangGigi === 'Tidak'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Tidak</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Apakah ibu berkumur setelah muntah? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="kumurSetelahMuntah"
                        value="Ya"
                        checked={formData.kumurSetelahMuntah === 'Ya'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Ya</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="kumurSetelahMuntah"
                        value="Tidak"
                        checked={formData.kumurSetelahMuntah === 'Tidak'}
                        onChange={handleChange}
                        required
                        className="mr-2 w-4 h-4 text-pink-600"
                      />
                      <span className="text-gray-700">Tidak</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full">
                Lihat Hasil Skrining
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

