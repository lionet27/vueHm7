<template>
    <HeaderComponent/>
    <div  class="bannerBlog">
        
    <img src="../assets/img/BannerBlog.svg" alt="">
    </div>
    <ArticleComponent/>
    
    <FooterComponent/>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import ArticleComponent from '../components/ArticleComponent.vue';

    export default {
        components: {
            HeaderComponent, FooterComponent, ArticleComponent
        },
        
    }
</script>

<style lang="scss" scoped>
    .bannerBlog{
        margin-top: 45px;
        margin-bottom: 200px;
        text-align: center;
    }
</style>