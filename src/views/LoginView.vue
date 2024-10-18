<template>
  <!-- <div class="modal-backdrop"> -->
  <div
    class="modal"
    id="loginModal"
    style="display: flex; background-color: #2125297b"
    tabindex="-1"
    aria-labelledby="modalLabel"
    @click.self.prevent="closeModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Simple Modal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click.prevent="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <p>This is a simple modal built with Bootstrap and Vue 3.</p>
          <div class="inputWithLabel">
            <label for="" class="label">Title</label>
            <input type="text" class="form-control" v-model="title" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click.prevent="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
import { defineProps } from 'vue'

const { onClose } = defineProps({ onClose: Function })

const closeModal = () => {
  console.log('closeModal')

  onClose()
}

</script>
<style>
.modal-content {
  border-radius: 8px;
}
</style>
