import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import BlogPage from '@/pages/BlogPage.vue';
import BlogDetailPage from '@/pages/BlogDetailPage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue';
import NotFound from '@/pages/NotFoundPage.vue';

const routes=[
    {
        path:"/",
        name:"HomePage",
        component:HomePage,
    },
    {
        path:"/Project",
        name:"Project",
        component:ProjectPage,
    },
    {
        path:"/Blog",
        name:"Blog",
        component:BlogPage,
    },
    {
        path:"/BlogDetail",
        name:"BlogDetail",
        component:BlogDetailPage,
    },
    {
        path:"/ProjectDetails",
        name:"ProjectDetails",
        component:ProjectDetailsPage,
    },
    {
        path:"/:CatchAll(.*)",
        name:"404",
        component:NotFound,
    },
    
]



const router=createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to,from,savedPosition){
        return {
            top:0,
        }
    }
})

export default router