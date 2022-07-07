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
    computed: {
        threads(){
            return this.$store.state.threads;
        },
        posts(){
            return this.$store.state.posts;
        },
        users(){
            return this.$store.state.users;
        },
        thread(){
            return this.$store.state.threads.find(t => t.id === this.id);
        },
        threadPosts(){
            return this.$store.state.posts.filter(post => post.threadId === this.id);
        }
    },
    methods: {
        userByID(userID){
            return this.users.find(u => u.id === userID);
        },
        savePost(event){
            const post = {
                ...event.post,
                threadId: this.id
            }
            this.$store.dispatch('createPost', { post });
        }
    }
}
</script>