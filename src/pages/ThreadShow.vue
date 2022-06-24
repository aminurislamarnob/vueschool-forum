<template>
    <div class="container">
        <div class="col-large push-top">
            <h1>{{thread.title}}</h1>
            <p>
                By <a href="#" class="link-unstyled">{{userByID(thread.userId).name}}</a>, <FormatedDate :timeStamp="thread.publishedAt"/>.
            </p>
            <PostLists :threadPosts="threadPosts"/>
        
            <PostEditor @save="savePost"/>
        </div>
    </div>
</template>
<script>
import sourceData from '@/data.json';
import PostLists from '@/components/PostLists.vue'
import PostEditor from '@/components/PostEditor.vue'
export default {
    components:{
        PostLists,
        PostEditor
    },
    props: {
        id: {
            required: true,
            type: String
        }
    },
    data(){
        return{
            threads: sourceData.threads,
            posts: sourceData.posts,
            users: sourceData.users,
        }
    },
    computed: {
        thread(){
            return this.threads.find(t => t.id === this.id);
        },
        threadPosts(){
            return this.posts.filter(post => post.threadId === this.id);
        }
    },
    methods: {
        userByID(userID){
            return this.users.find(u => u.id === userID);
        },
        savePost(event){
            const newPost = {
                ...event.post,
                threadId: this.id
            }
            this.posts.push(newPost);
            this.threads.push(newPost.id);
        }
    }
}
</script>