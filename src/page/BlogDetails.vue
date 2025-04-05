<template>
  <div>
    <BgContainer
      title="Blog Details"
      bgImage="bg_3.jpg"
      :links="[
        { text: 'Home', to: '/' },
        { text: 'Blog', to: '/blog' },
      ]"
     />
    <div v-if="blog" class="flex flex-col items-center justify-center p-4 py-10 md:py-20">
      <div class="w-full md:w-4/5">
        <h1 class="text-2xl md:text-4xl font-medium text-gray-800 mb-2">
          {{ blog.title }}
        </h1>
        <p class="text-sm text-blue-500 mb-6">
          {{ blog.date }}
          {{ blog.author }}
          {{ blog.comments?.length }} comments
        </p>
        <img :src="getImage(blog.image)" :alt="blog.title" class="w-full h-[600px]" />
        <p class="text-gray-400 my-6">{{ blog.description }}</p>
      </div>
      <div class="w-4/5">
        <div v-if="blog.comments?.length">
            <BlogComment
            v-for="(comment,index) in blog.comments"
            :key="index"
            :comment="comment"
            />
          </div>
          <p v-else class="text-sm text-blue-500 mb-6">
            Not Comments Yet. Be the first to leave a comment!
          </p>
    </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BgContainer from "../components/composible/BgContainer.vue";
import BlogComment from "../components/composible/BlogComment.vue";
import { blogs } from "../components/data/blogData";
const route = useRoute();
const blog = ref(null);
const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
onMounted(() => {
  const blogId = Number(route.params.id);
  blog.value = blogs.find((b) => b.id == blogId) || {};
});
</script>
