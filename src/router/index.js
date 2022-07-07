import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/ForumHome.vue'
import PageThreadShow from '@/pages/ThreadShow'
import PageNotFound from '@/pages/NotFound'
import PageCategory from '@/pages/CategoryShow'
import PageForum from '@/pages/ForumShow'
import PageProfile from '@/pages/MyProfile'
import sourceData from '@/data.json'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: PageHome,
    },
    { 
        path: '/forum/:id',
        name: 'Forum',
        component: PageForum,
        props: true,
    },
    { 
        path: '/profile',
        name: 'Profile',
        component: PageProfile,
        meta: {
            toTop: true,
            smoothScroll: true
        }
    },
    { 
        path: '/profile/edit',
        name: 'ProfileEdit',
        component: PageProfile,
        props: {edit:true}
    },
    { 
        path: '/thread/:id',
        name: 'singleThread',
        component: PageThreadShow,
        props: true,
        beforeEnter(to, form, next){
            const isThreadExists = sourceData.threads.find(thread => thread.id === to.params.id);
            if(isThreadExists){
                next()
            }else{
                next({ 
                    name: 'NotFound',
                    // preserve current path and remove the first char to avoid the target URL starting with `//`
                    params: { pathMatch: to.path.substring(1).split('/')},
                    // preserve existing query and hash if any
                    query: to.query,
                    hash: to.hash,
                })
            }
        }
    },
    { 
        path: '/category/:id',
        name: 'Category',
        component: PageCategory,
        props: true,
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: PageNotFound 
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to) {
        const scroll = {};
        if(to.meta.toTop) scroll.top = 0;
        if(to.meta.smoothScroll) scroll.behavior = 'smooth'
        return scroll
    },
    routes
})

export default router