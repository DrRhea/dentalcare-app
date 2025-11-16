'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

const questions = [
  {
    id: 1,
    question: 'Berapa kali dalam sehari sebaiknya kita menyikat gigi?',
    options: ['1 kali', '2 kali', '3 kali', '4 kali'],
    correct: 1
  },
  {
    id: 2,
    question: 'Kapan waktu yang tepat untuk menyikat gigi?',
    options: ['Setelah makan', 'Sebelum tidur', 'Setelah sarapan dan sebelum tidur', 'Kapan saja'],
    correct: 2
  },
  {
    id: 3,
    question: 'Berapa lama sebaiknya kita menyikat gigi?',
    options: ['30 detik', '1 menit', '2 menit', '5 menit'],
    correct: 2
  },
  {
    id: 4,
    question: 'Seberapa sering kita harus periksa ke dokter gigi?',
    options: ['Setiap bulan', 'Setiap 3 bulan', 'Setiap 6 bulan', 'Setiap tahun'],
    correct: 2
  },
  {
    id: 5,
    question: 'Apa fungsi utama pasta gigi berfluoride?',
    options: ['Memutihkan gigi', 'Mencegah karies gigi', 'Menghilangkan bau mulut', 'Memperkuat email gigi'],
    correct: 1
  },
  {
    id: 6,
    question: 'Apakah benang gigi (dental floss) penting digunakan?',
    options: ['Tidak penting', 'Kadang-kadang', 'Ya, sangat penting', 'Hanya untuk orang dewasa'],
    correct: 2
  },
  {
    id: 7,
    question: 'Makanan apa yang paling berbahaya untuk kesehatan gigi?',
    options: ['Buah-buahan', 'Sayuran', 'Makanan manis dan lengket', 'Daging'],
    correct: 2
  },
  {
    id: 8,
    question: 'Apa yang terjadi jika kita tidak menjaga kebersihan gigi?',
    options: ['Tidak ada masalah', 'Bisa menyebabkan karies dan penyakit gusi', 'Gigi akan lebih putih', 'Mulut akan lebih segar'],
    correct: 1
  }
]

export default function Pretest() {
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }))
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correct++
      }
    })
    return correct
  }

  if (showResult) {
    const score = calculateScore()
    const total = questions.length
    const percentage = Math.round((score / total) * 100)

    return (
      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <h1 className="text-3xl font-bold text-center text-secondary mb-8">
              Hasil Pretest
            </h1>
            
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-secondary mb-4">
                {score}/{total}
              </div>
              <p className="text-2xl text-secondary mb-2">
                Anda menjawab {score} dari {total} soal dengan benar
              </p>
              <p className="text-xl text-secondary">
                Skor: {percentage}%
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {questions.map((q) => {
                const userAnswer = answers[q.id]
                const isCorrect = userAnswer === q.correct
                
                return (
                  <div key={q.id} className={`p-4 rounded-lg border-2 ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                    <p className="font-semibold text-secondary mb-2">{q.question}</p>
                    <p className="text-sm text-secondary">
                      Jawaban Anda: <span className="font-semibold">{q.options[userAnswer] || 'Tidak dijawab'}</span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-700 mt-1">
                        Jawaban benar: <span className="font-semibold">{q.options[q.correct]}</span>
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => {
                  setShowResult(false)
                  setAnswers({})
                }}
                variant="primary"
              >
                Ulangi Pretest
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
        <h1 className="text-4xl font-bold text-center text-secondary mb-4">
          Kuis Pretest
        </h1>
        <p className="text-center text-secondary mb-12">
          Uji pengetahuan Anda tentang kesehatan gigi dengan menjawab pertanyaan berikut
        </p>

        <div className="space-y-8 mb-8">
          {questions.map((q) => (
            <Card key={q.id}>
              <h3 className="text-lg font-semibold text-secondary mb-4">
                {q.id}. {q.question}
              </h3>
              <div className="space-y-2">
                {q.options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition ${
                      answers[q.id] === index
                        ? 'border-secondary bg-primary'
                        : 'border-gray-200 hover:border-secondary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={index}
                      checked={answers[q.id] === index}
                      onChange={() => handleAnswer(q.id, index)}
                      className="mr-3 w-4 h-4 text-secondary"
                    />
                    <span className="text-secondary">{option}</span>
                  </label>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleSubmit}
            variant="primary"
            className="px-8 py-3 text-lg"
          >
            Lihat Hasil
          </Button>
        </div>
      </div>
    </div>
  )
}

