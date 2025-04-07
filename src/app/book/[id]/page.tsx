import React from 'react'
import books from '../../../../public/books.json'
import Image from 'next/image'
import Link from 'next/link'

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.books.find((b) => b.id === params.id)

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
            <p className="text-gray-700 mb-6">{book.description}</p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">${book.price}</span>
            </div>
            <Link href={`/checkout/${book.id}`} className="btn-primary inline-block">
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 