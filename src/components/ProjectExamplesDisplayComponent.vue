<template>
                <div class="project__item" v-on:dblclick="changeFavoriteStatus(project)">
                    <img class="project__item__img" :src="project.img" alt="">
                    
                    <div class="project__item__content">
                        <div class="project__item__text">
                                <p class="project__item__title">{{project.title}}</p>
                                <p class="project__item__subtitle">Decor / Artchitecture</p>
                        </div>
                        <div class="project__item__vector">
                            <img  src="../assets/img/VectorInEllpse.svg" alt="">
                        </div>
                    </div>
                    <img class="project__item__star" v-if="project.favorites" src="../assets/img/star.svg" alt="">
                
                </div>

</template>

<script>

    export default {
         props:{
                    project:Object,
                },
        data() {
            return {
              
             }           
        },
        
        methods: {
            
            changeFavoriteStatus(project){
                project.favorites=!project.favorites;
            }
            
        },
    }
</script>

<style lang="scss" scoped>
    
    .project{
        margin-bottom: 96px;
       
        &__item{
           
            margin-bottom: 36px;
            display: inline-block;
            position: relative;

             &__img{
                max-width: 100%;
                margin-bottom: 24px;
            }

            &__content{
                display: flex;
                justify-content: space-between;
                
                
            }
           
            &__title{
                color: rgb(41, 47, 54);
                font-family: DM Serif Display;
                font-size: 25px;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 2%;
                text-align: left;
            }
            &__subtitle{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
            }
            &__star{
                position: absolute;
                top:0px;
                right: 0px;
            }
            

        }
}

</style>