<template>
  <div>
    <div class="mb-3">
      <label for="" class="from-label"> Page Title </label>
      <input type="text" class="form-control" v-model="searchTerm" />
    </div>

    <div class="container">
      <div class="row">
        <book-item
          v-for="(book, index) in books"
          :key="index"
          class="col-md-4"
          :book-id="book.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BookItem from '@/components/BookItem.vue'
import { BookStore } from '@/store/data'
import { inject, watch, ref } from 'vue'

const $books = inject('$books') as BookStore

let searchTerm = ref('')
let books = $books.getBooks()

watch(searchTerm, (newSearchTerm: string, _: string) => {
  console.log(newSearchTerm)
})
</script>
<style lang="css" scoped></style>
