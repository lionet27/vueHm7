<template>
  <HomePage/>
  <BlogPage/>
  <BlogDetailPage/>
 
  
</template>

<script>
import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import BlogDetailPage from './pages/BlogDetailPage.vue';


export default {
  name:'App',
  components: {
    BlogDetailPage,BlogPage,HomePage
  }
}
</script>

<style lang="scss">

</style>
