<template>
    <HeaderComponent/>
    <div class="NotFound center">
        <div class="NotFound__content">
            <h1 class="NotFound__content__title">404</h1>
            <p class="NotFound__content__text">We are sorry, but the page you requested was not found</p>
            <button class="NotFound__content__button"><router-link to="/">Back To Home</router-link>  
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>
            </button>
            <!-- <<router-link class="NotFound__content__button">> Back To Home 
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>
            </router-link> -->

        </div>
        <div class="NotFound__img">
            <img src="../assets/img/404Images.svg" alt="">
        </div>

    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
    export default {
        components: {
            HeaderComponent
        },
    }
</script>

<style lang="scss" scoped>
.NotFound{
    display:flex;
    gap:81px;
   
    margin-top:45px;
    &__content{
        margin-top:308px;
        &__title{
        color: rgb(205, 162, 116);
        font-family: DM Serif Display;
        font-size: 250px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom:15px;
        }
        &__text{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 35px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
            margin-bottom:23px;
        }
        &__button{
            color: rgb(255, 255, 255);
            font-family: Jost;
            font-size: 18px;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: center;
            border-radius: 18px;
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
            background: rgb(41, 47, 54);
            padding:26px 54px;
        }

    }
    &__img img{
        max-width: 913px;
    }
}

</style>