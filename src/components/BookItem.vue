<template lang="html">
  <div v-if="book">
    <img
      :src="book.coverUrl ?? require('@/assets/book-placeholder.png')"
      @error="setPlaceholder"
      :alt="book.title"
      width="200"
    />
    <h3>{{ book.title }}</h3>
    <h4>{{ book.isbn }}</h4>
  </div>
</template>
<script setup>
import { inject } from 'vue'

const books = inject('$books')

const { bookId } = defineProps(['book-id'])
const book = books.getBookById(bookId)

function setPlaceholder(event) {
  event.target.src = require('@/assets/book-placeholder.png')
}
</script>
<style lang="css"></style>
