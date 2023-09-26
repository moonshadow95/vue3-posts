<template>
  <div>
    <h2>Home view</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="$router.push('/about')">About</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.path)
</script>

<style lang="scss" scoped></style>
