<template>
    <div>
        <div class="project center">
        <div class="container project__grid">
            <div class="project__item">
                <div >
                    <img class="project__item__img" src="../assets/img/kitchan1.svg" alt="">
                </div>
                <div class="project__item__content">
                    <div class="project__item__text">
                            <p class="project__item__title">Modern Kitchan</p>
                            <p class="project__item__subtitle">Decor / Artchitecture</p>
                    </div>
                    <div class="project__item__vector">
                        <img  src="../assets/img/VectorInEllpse.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="project__item">
                <div >
                    <img class="project__item__img23" src="../assets/img/kitchan2.svg" alt="">
                </div>
                <div class="project__item__content">
                    <div class="project__item__text">
                            <p class="project__item__title">Modern Kitchan</p>
                            <p class="project__item__subtitle">Decor / Artchitecture</p>
                    </div>
                    <div class="project__item__vector">
                        <img src="../assets/img/VectorInEllpse.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="project__item">
                <div class="project__item__img">
                    <img class="project__item__img23" src="../assets/img/kitchan3.svg" alt="">
                </div>
                <div class="project__item__content">
                    <div class="project__item__text">
                            <p class="project__item__title">Modern Kitchan</p>
                            <p class="project__item__subtitle">Decor / Artchitecture</p>
                    </div>
                    <div class="project__item__vector">
                        <img src="../assets/img/VectorInEllpse.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="project__item">
                <div >
                    <img class="project__item__img4" src="../assets/img/kitchan4.svg" alt="">
                </div>
                <div class="project__item__content">
                    <div class="project__item__text">
                            <p class="project__item__title">Modern Kitchan</p>
                            <p class="project__item__subtitle">Decor / Artchitecture</p>
                    </div>
                    <div class="project__item__vector">
                        <img src="../assets/img/VectorInEllpse.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
       

    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .project{
    
        margin-bottom: 96px;
        &__grid{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-template-rows: repeat(2,1fr);
            grid-column-gap:100px;
            grid-row-gap:56px;
        }
        &__item{
            display: flex;
            flex-direction: column;
            gap: 24px;
            &__img{
                border-radius:0px 80px 0px 0px;
                max-width: 520px;

            }
            &__img4{
                border-radius:0px 0px 0px 80px;
                max-width: 520px;
            }
            &__img23{
            
                max-width: 520px;
            }

            &__content{
                display: flex;
                justify-content: space-between;
                
                
            }
            
            &__title{
                color:#292F36;
                font-family: DM Serif Display;
                font-size: 25px;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 2%;
            }
            &__subtitle{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
            }
           

        }
    }
</style>