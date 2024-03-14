<template>
  <HomePage/>
  <BlogPage/>
  <BlogDetailPage/>
  <ProjectPage/>
 
  
</template>

<script>
import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import BlogDetailPage from './pages/BlogDetailPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

export default {
  name:'App',
  components: {
    BlogDetailPage,BlogPage,HomePage,ProjectPage
  }
}
</script>

<style lang="scss">

</style>
