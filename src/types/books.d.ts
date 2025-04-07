interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  category: string;
}

interface BooksData {
  books: Book[];
}

declare module "*.json" {
  const value: BooksData;
  export default value;
} 