import React from 'react'
import books from '../../../../public/books.json'
import Link from 'next/link'

export default function CheckoutPage({ params }: { params: { id: string } }) {
  const book = books.books.find((b) => b.id === params.id)

  if (!book) {
    return <div>Book not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">{book.title}</span>
            <span className="font-semibold">${book.price}</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold text-primary">${book.price}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <Link
            href={`/success/${book.id}`}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Pay with UPI
          </Link>
        </div>
      </div>
    </div>
  )
} 