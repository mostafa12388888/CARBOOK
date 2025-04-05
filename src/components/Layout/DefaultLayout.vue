<template>
  <div class="min-h-screen flex flex-col relative">
    <PageHeader></PageHeader>
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from './PageFooter.vue'
import PageHeader from './PageHeader.vue'
import NavBar from './NavBar.vue'
export default {
  components: {
    PageFooter,
    PageHeader, NavBar },
  name: 'CarBookDefaultLayout',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>

</style>