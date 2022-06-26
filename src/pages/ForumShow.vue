<template>
    <div class="container">
        <div class="col-full push-top push-down" style="margin-bottom: 20px;">
            <div class="forum-header">
                <div class="forum-details">
                    <h1>{{ forum.name }}</h1>
                    <p class="text-lead">{{ forum.description }}</p>
                </div>
            </div>
        </div>
        <ThreadLists :threads="getForumThreads"/>
    </div>
</template>

<script>
import ThreadLists from '@/components/ThreadLists.vue'
export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    components: { ThreadLists },
    computed:{
        threads(){
            return this.$store.state.threads;
        },
        forums(){
            return this.$store.state.forums;
        },
        getForumThreads(){
            return this.threads.filter(thread => thread.forumId === this.id)
        },
        forum(){
            return this.forums.find(forum => forum.id === this.id)
        }
    }
}
</script>