<template>
  <div>
<SectionHeading title="Recent BLog" description="Blog"/>
</div>
<Section class="flex flex-col md:flex-row justify-center gap-6 py-10 md:py-20 p-4">
    <BlogCard
    v-for="(blog,index) in blogs" :key="index"
    :title="blog.title" 
    :id="blog.id"
    :date="blog.date"
    :image="blog.image"
    :author="blog.author"
    :description="blog.description"
    :comments="blog.comments"
    :class="'md:w-80'"
    />
</Section>
</template>

<script setup>

import SectionHeading from '../composible/SectionHeading.vue';
import BlogCard from '../cards/BlogCard.vue';
import {blogs} from "../data/blogData.js"
</script>
