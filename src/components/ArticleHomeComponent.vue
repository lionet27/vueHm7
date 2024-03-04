<template>
    <article class="articles center" >
        <header class="articles__header">
            <h2 class="articles__header__title">Articles & News</h2>
            <p class="articles__header__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </header>
        <div class="articles__box">
            <div class="articles__item" v-for="(design,index) in designs" :key="index"  
            :style="{ background: index === 1 ? '#EAEAEA' : 'none' }">
                <div  class="articles__item__img">
                    <img class="articles__item__imgChild" :src="design.img" alt="">
                    <div class="articles__item__type">
                        <p>{{design.imgType}}</p>
                    </div>
                </div>
                <h1 class="articles__content">{{design.artcileContent}}</h1>
                <div class="articles__dateBox">
                    <p class="articles__date">{{design.artcileDate}}</p>
                    <img :src="design.vector" alt="">
                </div>
                
            </div>
           
        </div>
    </article>
</template>

<script>
    export default {
        data() {
        return {
            designs:[
                {
                    id:1,
                   img:require("@/assets/img/design1.svg"),
                   imgType:"Kitchan Design" ,
                   artcileContent:"Let’s Get Solution For Building Construction \n Work",
                   artcileDate:"26 December,2022",
                   vector:"../assets/img/vectorGrey.svg",
                },
                {
                    id:2,
                    img:require("@/assets/img/design2.svg"),
                    imgType:"Living Design" ,
                    artcileContent:"Low Cost Latest Invented Interior Designing \n Ideas.",
                    artcileDate:"22 December,2022",
                    vector:"img/vectorWhite.svg",
                 },
                 {
                    id:3,
                    img:require("@/assets/img/design3.svg"),
                    imgType:"Interior Design" ,
                    artcileContent:"Best For Any Office & Business Interior \n Solution",
                    artcileDate:"25 December,2022",
                    vector:"img/vectorGrey.svg",
                 },
            ],
          
        }
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
    .articles{
    margin-bottom: 96px;
    &__header{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 12px;
        margin-bottom: 52px;
        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
            
        
        }
        &__text{
            max-width: 811px;
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: center;        
        }
    }
    &__box{
        @include flexSBcenter(27px);

    }
    &__item{
        position: relative;
        box-sizing: border-box;
        border: 1px solid rgb(231, 231, 231);
        border-radius: 62px;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        padding: 21px;
       

        &__img{
           
            margin-bottom: 21px;
           
        }
        &__imgChild{
            max-width: 320px;
            
        }

        &__type{
            position: absolute;
            top: 249px;
            left: 41px;
            padding: 4px 5px 8px 11px;
            border-radius: 8px 8px 8px 0px;
            background: rgb(255, 255, 255);
            box-sizing: content-box;

        }
        
    }
    &__content{
        color:#292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
        margin-bottom: 30px;
        white-space: pre-line; 
    }
    &__dateBox{
        @include flexSBcenter(none);
        
    }
    
}
</style>