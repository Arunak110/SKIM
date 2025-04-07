import React from 'react'
import books from '../../../../public/books.json'
import Link from 'next/link'

export default function SuccessPage({ params }: { params: { id: string } }) {
  const book = books.books.find((b) => b.id === params.id)

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for purchasing "{book.title}". Your eBook is ready to download.
          </p>
          
          <Link
            href={`/download/${book.id}`}
            className="btn-primary inline-block"
          >
            Download eBook
          </Link>
        </div>
      </div>
    </div>
  )
} 