<template>
  <div>
    <div class="mb-3">
      <label for="" class="from-label"> Page Title </label>
      <input type="text" class="form-control" v-model="searchTerm" />
    </div>

    <div class="container">
      <div class="row">
        <book-item
          v-for="(book, _) in books"
          :key="book.id"
          class="col-md-4"
          :book-id="book.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BookItem from '@/components/BookItem.vue'
import { Book } from '@/models/Book';
import { useBookStore } from '@/store/data'
import { watch, ref } from 'vue'

const bookStore = useBookStore()
bookStore.fetchBooks()

let searchTerm = ref('')
let books = ref<Book[]>([])

bookStore.$subscribe((mutations, state) => {
  books.value= state.books
})



watch(searchTerm, (newSearchTerm: string, _: string) => {
  if (newSearchTerm) {
    const response = bookStore.getBookByTitle(newSearchTerm)
    console.log(JSON.stringify(response))
    books.value = response
  } else {
    books.value = bookStore.books
  }
})
</script>
<style lang="css" scoped></style>
