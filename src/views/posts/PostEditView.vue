<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm @submit.prevent="edit" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
        <button type="button" class="btn btn-outline-danger" @click="goDetailPage">취소</button>
        <button type="submit" class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { getPostById, updatePost } from '@/api/posts'
import PostForm from '@/components/posts/PostForm.vue'

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
