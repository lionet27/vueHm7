<template>
    <HeaderComponent/>
    <div class="banner">
         <img class="banner__img" src="../assets/img/BannerProject.svg" alt="">
   
    </div>
    <ProjectExamplesComponent/>

    <div class="pagination center">
        <img src="../assets/img/1.svg" alt="1">
        <img src="../assets/img/2.svg" alt="2">
        <img src="../assets/img/3.svg" alt="3">
        <img src="../assets/img/paginationVector.svg" alt=">">
    </div>
    
    <FooterComponent/>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import ProjectExamplesComponent from '../components/ProjectExamplesComponent.vue';
 

    export default {
        components: {
            HeaderComponent, FooterComponent, ProjectExamplesComponent,
        },
        
    }
</script>

<style lang="scss" scoped>

   .banner{
        margin-top: 45px;
        margin-bottom: 200px;
        text-align: center;
    
        &__img{
         
        }
    }

    .pagination{
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 61px;
        margin-bottom: 200px;
    }
</style>