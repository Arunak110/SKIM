import React from 'react'
import books from '../../../../public/books.json'
import Link from 'next/link'

export default function DownloadPage({ params }: { params: { id: string } }) {
  const book = books.books.find((b) => b.id === params.id)

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Download Your eBook</h1>
          <p className="text-gray-600 mb-8">
            Your copy of "{book.title}" is ready to download. Click the button below to start your download.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => alert('Download started! (This is a mock download)')}
              className="btn-primary w-full"
            >
              Download PDF
            </button>
            
            <Link
              href="/"
              className="block text-center text-primary hover:text-secondary"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 