<template>
    <HeaderComponent/>
    <img class="bannerBlog" src="../assets/img/BannerBlog.svg" alt="">
    <ArticleComponent/>
    <!-- <div ></div> -->
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
    }
</style>