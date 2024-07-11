<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="mb-3">
      <label for="" class="from-label"> Page Title </label>
      <input type="text" class="form-control" v-model="page.pageTitle" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
