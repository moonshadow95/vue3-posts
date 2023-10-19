<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter v-model:title="params.title_like" :limit="params._limit" />
    <hr class="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goPage(item.id)"
        />
      </template>
    </AppGrid>
    <hr class="my-4" />
    <AppPagination
      :page-count="pageCount"
      :current-page="params._page"
      @page="page => (params._page = page)"
    />
    <template v-if="posts && posts.length > 0">
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import PostItem from '@/components/PostItem.vue'
import { computed, ref, watchEffect } from 'vue'
import { getPosts } from '@/api/posts'
import { useRouter } from 'vue-router'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import AppCard from '@/components/AppCard.vue'
import AppPagination from '@/components/AppPagination.vue'
import AppGrid from '@/components/AppGrid.vue'
import PostFilter from '@/components/posts/postFilter.vue'
const router = useRouter()
const posts = ref([])
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: 3,
  _page: 1,
  title_like: '',
})
//pagination
const totalCount = ref(0)
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit))

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value)
    posts.value = data
    totalCount.value = headers['x-total-count']
  } catch (error) {
    console.log(error)
  }
}
// fetchPosts()
// watch 와 달리 초기에 한번 실행 후 반응형 데이터가 변경되었기 때문에 콜백함수를 다시 실행
watchEffect(fetchPosts)
const goPage = id => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  })
}
</script>

<style lang="scss" scoped></style>
