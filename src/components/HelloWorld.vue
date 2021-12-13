<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
defineProps({
  msg: String
})

const count = ref(0)
const router = useRouter()
function go(){
  router.push('/login')
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <van-button type="success" @click="go">跳转</van-button>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
