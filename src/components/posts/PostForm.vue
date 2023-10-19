<template>
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">제목</label>
      <input
        type="text"
        class="form-control"
        id="title"
        @input="$emit('update:title', $event.target.value)"
        :value="title"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">내용</label>
      <textarea
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="exampleFormControlTextarea"
        rows="3"
        :value="content"
      ></textarea>
    </div>
    <div class="d-flex gap-2 mt-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
})
defineEmits(['update:title', 'update:content'])
</script>

<style lang="scss" scoped></style>
