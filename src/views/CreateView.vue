<template lang="">
  <form action="" class="container mb3">
    <h1>Create a book</h1>

    <div class="col-md-8">
      <div class="mb-3">
        <label for="" class="from-label">Title</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Author</label>
        <input type="text" class="form-control" v-model="author" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">ISBN</label>
        <input type="text" class="form-control" v-model="isbn" />
      </div>
      <div class="mb-3">
        <label for="" class="from-label">Description</label>
        <textarea
          type="text"
          class="form-control"
          rows="5"
          v-model="description"
        ></textarea>
      </div>
    </div>
    <div class="col"></div>
    <div class="mb-3">
      <button
        class="btn btn-primary"
        @click.prevent="submitForm"
        :disabled="isFormInvalid"
      >
        Create
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref, inject, computed } from 'vue'

const $books = inject('$books') as BookStore

let title = ref('')
let description = ref('')
let author = ref('')
let isbn = ref('')

function submitForm() {
  const book: Book = {
    title: title.value,
    authors: [author.value],
    isbn: isbn.value,
    coverUrl: '',
  }
  console.log(book)
  //$books.createBook(book)
}

const isFormInvalid = computed(() => {
  return !title.value || !author.value || !isbn.value
})
</script>
<style lang=""></style>
