<template>
  <div>
    <h2>About view</h2>
    <button class="btn btn-primary" @click="goHome">Home</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
