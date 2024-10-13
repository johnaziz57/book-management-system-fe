<template>
  <form action="" class="m-5">
    <h1>Create a book</h1>

    <div class="inputWithLabel">
      <label for="" class="label">Title</label>
      <input type="text" class="form-control" v-model="title" />
    </div>
    <div class="inputWithLabel">
      <label for="" class="label">Author</label>
      <input type="text" class="form-control" v-model="author" />
    </div>
    <div class="inputWithLabel" >
      <label for="" class="label">ISBN</label>
      <input type="text" class="form-control" v-model="isbn" />
    </div>
    <div class="inputWithLabel">
      <label for="" class="label">Description</label>
      <textarea
        type="text"
        class="form-control"
        rows="5"
        v-model="description"
      ></textarea>
    </div>
    <div class="inputWithLabel">
      <label for="exampleFormControlFile1">Example file input</label>
      <drop-file></drop-file>
    </div>

    <div class="d-flex justify-content-center">
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
import { BookStore } from '@/store/data';
import { Book } from '@/models/Book';
import DropFile from '@/components/DropFile.vue';

const $books = inject('$books') as BookStore

let title = ref('')
let description = ref('')
let author = ref('')
let isbn = ref('')

function submitForm() {
  const book: Book = {
    id: undefined,
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
<style lang="css" scoped>
.inputWithLabel {
  margin-inline-start: 16vw;
  margin-inline-end: 16vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
}

.label {
  align-self: self-start;
}

.container {
  display: flex;
  align-content: center;
  flex-direction: row;
}

</style>
