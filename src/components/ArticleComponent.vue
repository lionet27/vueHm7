<template>
    <div class="blog center">
      
        <div class="blogArticles">
            <div class="blogArticles__item"  v-for="(articl, index)  in selectArticles" :key="index">
                <h1 class="blogArticles__item__title">{{articl.title}}</h1>
                <img class="blogArticles__item__img" :src="articl.img" alt="">
                <div class="blogArticles__item__dateInterior">
                    <div class="blogArticles__item__date">{{articl.date}}</div>
                    <div class="blogArticles__item__interior">{{articl.interior}}</div>
                </div>
                <p class="blogArticles__item__text">{{articl.text}}</p>
                <img :src="articl.imgQuotes" alt="">
                <h2 class="blogArticles__item__subtitle">{{articl.subtitle}}</h2>
                <p class="blogArticles__item__subtitletext">{{articl.subtitleText}}</p>
                <ul class="blogArticles__item__subtitleList">
                    <li class="blogArticles__item__subtitlePoint"><span class="blogArticles__li">1</span> {{articl.subtitlePoints1}}</li>
                    <li class="blogArticles__item__subtitlePoint"><span class="blogArticles__li">2</span> {{articl.subtitlePoints2}}</li>
                    <li class="blogArticles__item__subtitlePoint"><span class="blogArticles__li">3</span> {{articl.subtitlePoints3}}</li>
                </ul>
                <img :src="articl.subtitleImg" alt="">
                <div class="blogArticles__item__textend">{{articl.textEnd}}</div>

            </div>
        </div>
        <div class="blogTags">
            <h1 class="blogTags__title">Tags</h1>
            <div class="blogTags__buttons">
                <button class="blogTags__buttons__item" @click="changeTag(tag)" v-for="(tag, index) in tags" :key="index">{{tag}}</button>
            </div>
        </div>
        
    </div>
</template>

<script>

    export default {
        data() {
            return {
                tags:['Kitchen','Bedroom','Building','Architecture','Kitchen Planning','Bedroom'],
                
                articles:[
                        {
                        tag:'Kitchen',
                        title:"Let’s Get Solution for Building Construction Work",
                        img:require("@/assets/img/articleImage1.svg"),
                        date:"26 December,2022 ",
                        interior:"Interior / Home / Decore",
                        text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\n                 Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        imgQuotes:require("@/assets/img/article1Quotes.svg"),
                        subtitle:"Design sprints are great",
                        subtitleText:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        subtitlePoints1:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        subtitlePoints2:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        subtitlePoints3:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        subtitleImg:require("@/assets/img/articleSubImage1.svg"),
                        textEnd:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."

                        },
                        {
                            tag:'Kitchen',
                            title:"Let’s Get Solution for Building Construction Work",
                            img:require("@/assets/img/articleImage2.jpg"),
                            date:"26 December,2022 ",
                            interior:"Interior / Home / Decore",
                            text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\n                 Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                            imgQuotes:require("@/assets/img/article1Quotes.svg"),
                            subtitle:"Design sprints are great",
                            subtitleText:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints1:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints2:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints3:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitleImg:require("@/assets/img/articleSubImage1.svg"),
                            textEnd:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."

                        },
                        {
                            tag:'Bedroom',
                            title:"Let’s Get Solution for Building Construction Work",
                            img:require("@/assets/img/articleImage3.jpg"),
                            date:"26 December,2022 ",
                            interior:"Interior / Home / Decore",
                            text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\n                 Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                            imgQuotes:require("@/assets/img/article1Quotes.svg"),
                            subtitle:"Design sprints are great",
                            subtitleText:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints1:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints2:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints3:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitleImg:require("@/assets/img/articleSubImage1.svg"),
                            textEnd:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."

                        },
                        {
                            tag:'Building',
                            title:"Let’s Get Solution for Building Construction Work",
                            img:require("@/assets/img/articleImage4.jpg"),
                            date:"26 December,2022 ",
                            interior:"Interior / Home / Decore",
                            text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\n                 Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                            imgQuotes:require("@/assets/img/article1Quotes.svg"),
                            subtitle:"Design sprints are great",
                            subtitleText:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints1:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints2:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints3:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitleImg:require("@/assets/img/articleSubImage1.svg"),
                            textEnd:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."

                        },
                        {
                            tag:'Architecture',
                            title:"Let’s Get Solution for Building Construction Work",
                            img:require("@/assets/img/articleImage5.jpg"),
                            date:"26 December,2022 ",
                            interior:"Interior / Home / Decore",
                            text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\n                 Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                            imgQuotes:require("@/assets/img/article1Quotes.svg"),
                            subtitle:"Design sprints are great",
                            subtitleText:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints1:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints2:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints3:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitleImg:require("@/assets/img/articleSubImage1.svg"),
                            textEnd:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."

                        },
                        {
                            tag:'Kitchen Planning',
                            title:"Let’s Get Solution for Building Construction Work",
                            img:require("@/assets/img/articleImage6.jpg"),
                            date:"26 December,2022 ",
                            interior:"Interior / Home / Decore",
                            text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\n                 Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                            imgQuotes:require("@/assets/img/article1Quotes.svg"),
                            subtitle:"Design sprints are great",
                            subtitleText:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints1:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints2:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitlePoints3:"Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                            subtitleImg:require("@/assets/img/articleSubImage1.svg"),
                            textEnd:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."

                        }
                ],
                tag:'Kitchen',
                selectedTag: null
             }           
        },
        computed:{
            selectArticles(){
                return this.articles.filter(article =>article.tag==this.tag)
            },  
        },
        methods: {
            
            changeTag(selectTag) {
                if (this.selectedTag) {
                    this.selectedTag.classList.remove('active');
                }
                this.tag = selectTag;
                this.selectedTag = event.target;
                this.selectedTag.classList.add('active');
            }
            
        },
    }
</script>

<style lang="scss" scoped>
    
    .blog{
        display: flex;
        justify-content: space-between;
        gap: 57px;
        white-space: pre-line; 
    }
    .blogArticles{
        max-width:804px;
        &__li{
            color: rgb(205, 162, 116);
            font-family: DM Serif Display;
            font-size: 20px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;
            list-style-type:none;
        }
        &__item{
            &__title{
                color: rgb(41, 47, 54);
                font-family: DM Serif Display;
                font-size: 50px;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 2%;
                text-align: left;
                margin-bottom: 21px;
                width: 684px;
            }
            &__img{
                max-width:804px;
                border-radius: 50px;
            }
            &__dateInterior{
                display: flex;
                justify-content: space-between;
                margin-top: 46px;
                margin-bottom: 48px;
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 16px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
                text-transform: capitalize;
                
            }
            &__date{
                
            }
            &__interior{
                
            }
            &__text{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
                margin-bottom: 35px;
            }
            &__subtitle{
                color: rgb(41, 47, 54);
                font-family: DM Serif Display;
                font-size: 50px;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 2%;
                text-align: left;
                margin-top: 27px;
                margin-bottom: 20px;
            }
            &__subtitletext{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
                margin-bottom: 24px;
            }

            &__subtitleList{
                list-style-type:none;
                display: flex;
                flex-direction: column;
                gap: 32px;
                margin-bottom: 44px;
            }
            &__subtitlePoint{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
                display: flex;
                justify-content: space-between;
                gap: 14px;
        
            }
            &__textend{
                color: rgb(77, 80, 83);
                font-family: Jost;
                font-size: 22px;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 1%;
                text-align: left;
                margin-top: 35px;
                margin-bottom: 96px;
            }
           
        }
    }
    .blogTags{
        &__title{
            margin-bottom:24px;

        }
        &__buttons{
            color: rgb(41, 47, 54);
            font-family: Jost;
            font-size: 18px;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 2%;
            text-align: left;

            &__item{
                padding:9px 26px;
                border-radius: 10px;
                border: solid 1px rgb(244, 240, 236);
                margin: 3px;
                &.active{
                    background-color: black;
                    color: white;
                }
            }

        }
        
    }
</style>