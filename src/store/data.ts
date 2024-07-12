import { Book } from '@/models/Book'

export interface BookStore {
  getBooks(): Book[]

  getBookById(id: number): Book | undefined

  getBookByTitle(searchTerm: string): Book[]
}

const getBooks = async (): Promise<Book[]> => {
  const res = await fetch('books.json')
  return await res.json()
}

const bookStore = await getBooks()
console.log(bookStore)

export default {
  getBooks(): Book[] {
    return bookStore
  },
  getBookById(id: number): Book | undefined {
    return bookStore.find((book) => book.id == id)
  },
  getBookByTitle(searchTerm: string): Book[] {
    return bookStore.filter((book) =>
      book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
  },
} as BookStore
