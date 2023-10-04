<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" v-model="form.title" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea"
          rows="3"
          v-model="form.content"
        ></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
        <button type="submit" class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { createPost } from '@/api/posts'

const router = useRouter()
const form = ref({
  title: null,
  content: null,
})
const goListPage = () => {
  router.push({
    name: 'PostList',
  })
}

const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now().toString(),
    })
    router.push({ name: 'PostList' })
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped></style>
