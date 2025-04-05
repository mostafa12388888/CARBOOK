<template>
  <div ref="content" class="text-center pt-10 md:pt-20 content-wrapper" :class="{'animate-in':isVisible}">
    <p v-if="description" class="text-sm text-blue-500 uppercase tracking-wider font-medium">{{description}}</p>
    <h1 class="uppercase text-2xl md:text-4xl font-semibold text-gray-900">{{title}}</h1> 
 </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
const content=ref(null);
const isVisible=ref(false);
defineProps({
    title: String,
    description : String,
})
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
        isVisible.value=true;
        observer.unobserve(entry.target)
    }

    })
},{threshold:.3});
onMounted(()=>{
    if(content.value)observer.observe(content.value);
})
</script>
<style scop>
.content-wrapper{
    transform: translateY(100px);
    opacity: 0;
    transition: all 1s ease-in-out;
}
.content-wrapper.animate-in{
    transform: translateY(0);
    opacity: 1;
}
</style>

