import { Book } from '@/models/Book'
import { Token } from '@/models/Token'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    token: null as string | null,
  }),
  getters: {
    isLoggedIn(state){
      return (): boolean => !!state.token
    }
  },
  actions: {
    setToken(token: Token) {
      this.token = token
    }
  },
  persist: true
})

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [] as Book[]
  }),
  getters: {
    getBookById(state) {
      return (id: number): Book | undefined => state.books.find((book) => book.id == id)
    },
    getBookByTitle(state) {
      return (searchTerm: string): Book[] => state.books.filter((book) =>
        book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    }
  },
  actions: {
    createBook(book: Book): void {
      this.books.push(book);
    },
    fetchBooks() {
      const fetching = async () => {
        const res = await fetch('books.json')
        this.books = await res.json()
      }
      fetching().then(() => console.log("LOADED"))
    }
  }
})
