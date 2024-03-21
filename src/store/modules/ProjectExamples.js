
const ProjectExamples={
    state:{
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
    },
    getters:{
        selectProjects(state){
            return state.projects.filter(project =>project.tag==state.tag)
        },  

    },
    mutations:{
        changeTag(state,selectTag) {
            if (state.selectedTag) {
                state.selectedTag.classList.remove('active');
            }
            state.tag = selectTag;
            state.selectedTag = event.target;
            state.selectedTag.classList.add('active');
        },
        changeFavoriteStatus(state, project){
            project.favorites=!project.favorites;
        }
    
    },
    actions:{

    },
    modules:{
        
    },

};
export default ProjectExamples;

