<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <h2>404 Not found</h2>
    <div class="text-muted">요청한 페이지를 찾을 수 없습니다.</div>
    <div class="mt-4">
      <button class="btn btn-primary" @click="goHomePage">HOME</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHomePage = () => {
  router.push({
    name: 'Home',
  })
}
</script>

<style lang="scss" scoped></style>
