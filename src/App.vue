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
  
  components: {
    BlogDetailPage,BlogPage,HomePage
  }
}
</script>

<style lang="scss">

$colorCount:#CDA274;
$widthSite:1140px;

@font-face {
    font-family: DM Serif Display;
    src:url("./assets/fonts/DMSerifDisplay-Regular.ttf");
   
    }
    @font-face {
        font-family: Jost;
        src:url("./assets/fonts/Jost-VariableFont_wght.ttf");
       
        }
    


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
a{
    color: inherit;
}

.container {
    margin: 0 auto;
    max-width: $widthSite;
}

.center {
    padding-left: calc(50% - $widthSite/2);
    padding-right: calc(50% - $widthSite/2);
}

</style>
