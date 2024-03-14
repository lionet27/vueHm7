<template>
    <div class="project center">
       <div class="projectTags">
            
            <div class="projectTags__buttons">
                <button class="projectTags__buttons__item" @click="changeTag(tag)" v-for="(tag, index) in tags" :key="index">{{tag}}</button>
            </div>
        </div>
        <div class="projectExamples">
            <ProjectExamplesDisplayComponent v-for="(project, index) in  selectProjects" :key="index" :project="project"/>
                      
        </div>
   
    </div>
</template>

<script>
    import  ProjectExamplesDisplayComponent  from './ProjectExamplesDisplayComponent.vue';
    export default {
        components: {
            ProjectExamplesDisplayComponent,
        },
        data() {
            return {
                tags:['Bathroom','Bed room','Kitchen','Living Area'],
                projects:[
                    {
                        img:require("@/assets/img/BedroomProject1.svg"),
                        title:'Minimal Bedroom',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/BedroomProject2.svg"),
                        title:'Classic Minimal Bedroom',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/BedroomProject3.svg"),
                        title:'Minimal Bedroom table',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/BedroomProject4.svg"),
                        title:'Modern Bedroom',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/BedroomProject5.svg"),
                        title:'Minimal Bedroom',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/BedroomProject6.svg"),
                        title:'Modern Bedroom',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/BedroomProject7.svg"),
                        title:'System Table',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/BedroomProject8.svg"),
                        title:'Modern Bedroom',
                        tag:'Bed room',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/bathroomProject1.jpg"),
                        title:'Modern Bathroom',
                        tag:'Bathroom',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/bathroomProject2.jpg"),
                        title:'Classic Bathroom',
                        tag:'Bathroom',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/bathroomProject3.jpg"),
                        title:'Modern Bathroom',
                        tag:'Bathroom',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/bathroomProject4.jpg"),
                        title:'Classic Bathroom',
                        tag:'Bathroom',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/kitchenProject1.jpg"),
                        title:'Modern kitchen',
                        tag:'Kitchen',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/kitchenProject2.jpg"),
                        title:'Classic kitchen',
                        tag:'Kitchen',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/kitchenProject3.jpg"),
                        title:'Classic kitchen',
                        tag:'Kitchen',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/kitchenProject4.jpg"),
                        title:'Modern kitchen',
                        tag:'Kitchen',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/kitchenProject5.jpg"),
                        title:'Classic kitchen',
                        tag:'Kitchen',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/kitchenProject6.jpg"),
                        title:'Classic kitchen',
                        tag:'Kitchen',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/livingProject1.jpg"),
                        title:'Modern Living Area',
                        tag:'Living Area',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/livingProject2.jpg"),
                        title:'Classic Living Area',
                        tag:'Living Area',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/livingProject3.jpg"),
                        title:'Modern Living Area',
                        tag:'Living Area',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/livingProject4.jpg"),
                        title:'Classic Living Area',
                        tag:'Living Area',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/livingProject5.jpg"),
                        title:'Modern Living Area',
                        tag:'Living Area',
                        favorites:false,
                    },
                    {
                        img:require("@/assets/img/livingProject6.jpg"),
                        title:'Classic Living Area',
                        tag:'Living Area',
                        favorites:false,
                    },
                   
                ],
               
                tag:'Kitchen',
                selectedTag: null
             }           
        },
        computed:{
            selectProjects(){
                return this.projects.filter(project =>project.tag==this.tag)
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
            },
           
        },
    }
</script>

<style lang="scss" scoped>
    
   
    .projectTags{
        text-align: center;
        margin-bottom: 61px;
        &__buttons{
            
            display: inline-block;
            padding: 0%;

            border: solid 1px  rgb(205, 162, 116);
            border-radius: 18px;


            &__item{
                padding:26px 66px;
                border-radius: 18px;
                background-color:white;
                border: solid 0px  white;

                color: rgb(41, 47, 54);
                font-family: Jost;
                font-size: 18px;
                font-weight: 600;
                line-height: 125%;
                letter-spacing: 2%;
                text-align: center;
                
                &.active{
                    background-color: rgb(205, 162, 116);
                    color: white;
                }
            }

        }
        
    }
    .projectExamples{
        column-count: 2;
        column-gap: 30px;
    }


</style>