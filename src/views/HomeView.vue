<template>
  <div>
    <h2>Home view</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="$router.push('/about')">About</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppCard from '@/components/AppCard.vue'
import { ref } from 'vue'
import AppGrid from '@/components/AppGrid.vue'

const route = useRoute()
console.log(route.path)

const items = ref(['사과', '딸기', '포도'])
</script>

<style lang="scss" scoped></style>
