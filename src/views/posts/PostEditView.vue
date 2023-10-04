<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" v-model="form.title" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="form.content"
        ></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">
          취소
        </button>
        <button type="submit" class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { getPostById, updatePost } from '@/api/posts'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const form = ref({
  title: null,
  content: null,
})

const fetchPost = async () => {
  const { data } = await getPostById(id)
  setForm(data)
}
const setForm = ({ title, content, createdAt }) => {
  form.value.title = title
  form.value.content = content
  form.value.createdAt = createdAt
}
fetchPost()

const edit = async () => {
  try {
    await updatePost(id, {
      ...form.value,
    })
    router.push({ name: 'PostDetail', params: id })
  } catch (error) {
    console.log(error)
  }
}
const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: { id },
  })
}
</script>

<style lang="scss" scoped></style>
