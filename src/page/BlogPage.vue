<template>
    <BgContainer title="Read Our Blog" bgImage="bg_3.jpg" :links="[ {text:'Home', to:'/'},
    {text: 'Blog', to:'/blog'} ]" />
    <section class="flex flex-col items-center gap-16 p-4 py-10 md:py-20">
        <BlogCard
        v-for="(blog, index) in blogs" :key="index"
        :title="blog.title"
        :image="blog.image"
        :description="blog.description"
        :date="blog.date"
        :author="blog.author"
        :comments="blog.comments"
        :imageHeight="'h-[500px]'"
        :class="'w-5/6 object-cover text-center'"
        />
    </section>
</template>
<script setup>
import BlogCard from "../components/cards/BlogCard.vue";
import BgContainer from "../components/composible/BgContainer.vue";
import { blogs } from "../components/data/blogData";


</script>