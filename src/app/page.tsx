import React from 'react'
import books from '../../public/books.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Featured Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id} className="block">
            <div className="card h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <p className="text-primary font-bold">${book.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 