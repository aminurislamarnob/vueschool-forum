import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/ForumHome.vue'
import PageThreadShow from '@/pages/ThreadShow'
import PageNotFound from '@/pages/NotFound'
import sourceData from '@/data.json'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: PageHome,
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
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: PageNotFound 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router