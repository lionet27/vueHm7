<template>
    <HeaderComponent/>
    <div class="banner">
         <img class="banner__img" src="../assets/img/ProjectDetailBanner.svg" alt="">
   
    </div>
    <div class="projectDetail">
        <div class="container">
            <div class="projectDetail__content">
        <h1 class="projectDetail__title">Minimal Look Bedrooms</h1>
        <p class="projectDetail__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. <br> <br>
        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
</div>
    </div>
</div>
   <SliderComponent/>

  
    
    <FooterComponent/>
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
    import SliderComponent from '../components/SliderComponent.vue';
    
 

    export default {
        components: {
            HeaderComponent, FooterComponent,SliderComponent
        },
        
    }
</script>

<style lang="scss" scoped>

   .banner{
        margin-top: 45px;
        margin-bottom: 200px;
        text-align: center;
    
       
    }
    .projectDetail{
        
        &__content{
            max-width: 658px;
            margin: 100px auto;
        }   
        &__title{
            color: rgb(41, 47, 54);
            font-family: DM Serif Display;
            font-size: 50px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
            margin-bottom: 11px;
        }
        &__text{
            color: rgb(77, 80, 83);
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 1%;
            text-align: left;
        }
          

        
        // align-items: left;

     }
//     .pagination{
//         display: flex;
//         gap: 20px;
//         justify-content: center;
//         margin-top: 61px;
//         margin-bottom: 200px;
//     }
</style>