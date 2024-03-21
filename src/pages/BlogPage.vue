<template>
    <HeaderComponent/>
    <div class="banner">
         <img class="banner__img" src="../assets/img/Banner.svg" alt="">
   
    </div>
    <article class="post center">
        <div class="container">
            <h2 class="post__title">Latest Post</h2>
            <div class="post__content">
                <img class="post__content__img" src="../assets/img/latestPost.svg" alt="">
                <div class="post__content__subcontent">
                    <h3 class="post__content__header">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="post__content__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                    <div class="post__content__dataVector">
                        <p class="post__content__data">26 December,2022 </p>
                        <img src="../assets/img/vectorGrey.svg" alt="">
                    </div>
                    
                
                </div>
            </div>
        </div>
        
    </article>
    <ArticlesBlogComponent/>
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
    import ArticlesBlogComponent from '../components/ArticlesBlogComponent.vue';

    export default {
        components: {
            HeaderComponent, FooterComponent,ArticlesBlogComponent
        },
        
    }
</script>

<style lang="scss" scoped>
    @mixin flexSBcenter($gap) {
        display: flex;
        justify-content: space-between;
        gap: $gap;
        align-items: center;
    }
   .banner{
        margin-top: 45px;
        margin-bottom: 200px;
        text-align: center;
    
        
    }
    .post{
        margin-bottom: 150px;
    

        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
            margin-bottom: 27px;
        }
        &__content{
            @include flexSBcenter(65px);
            padding: 22px;
            box-sizing: border-box;
            border: 1px solid rgb(231, 231, 231);
            border-radius: 62px;

            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
           
            &__subcontent{
                text-align: left;
            }
            &__header{
                color: rgb(41, 47, 54);
                font-family: DM Serif Display;
                font-size: 25px;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 2%;
                margin-bottom: 22px;
            }
            &__text{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                margin-bottom: 41px;
            }
            &__dataVector{
                @include flexSBcenter(none);
            }
            &__data{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 16px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-transform: capitalize;

            }
        
            
        }
    }
    .pagination{
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-bottom: 200px;
    }
</style>