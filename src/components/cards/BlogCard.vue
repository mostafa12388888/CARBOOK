<template>
  <div>
    <img :src="getImage(image)" :alt="title" :class="['object-cover h-56 w-full',
    imageHeight
    ]">
    <div class="space-y-2 pt-5">
      <p class="text-sm text-blue-500">
        {{ date }} {{ author }} {{ comments?.length }} Comments
      </p>
      <h2 class="text-xl font-medium text-gray-800 mt-2">{{title}}</h2>
<router-link :to="`blog/${id}`">
  <ButtonComponent text="Read More" />

</router-link>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from '../ButtonComponent.vue';
defineProps({
title:String,
comments:Number,
description:String,
author:String,
image:String,
date:String,
id:Number,
imageHeight:{
type:String,
default:"h-56",
},
})
const getImage=(imageName)=>{
return new URL(`/src/assets/images/${imageName}`,import.meta.url).href 
}
</script>
