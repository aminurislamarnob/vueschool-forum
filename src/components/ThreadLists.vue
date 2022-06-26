<template>
    <div class="col-full">
        <div class="thread-list">
            <h2 class="list-title">Threads</h2>
            <div v-for="thread in threads" :key="thread.id" class="thread">
                <div>
                    <p><router-link :to="{name: 'singleThread', params: {id: thread.id}}">{{thread.title}}</router-link></p>
                    <p class="text-faded text-xsmall">By <a href="#">{{userByID(thread.userId).name}}</a>, <FormatedDate :timeStamp="thread.publishedAt"/>.</p>
                </div>
                <div class="activity">
                    <p class="replies-count">{{thread.posts.length}} replies</p>
                    <img class="avatar-medium"
                        :src="userByID(thread.userId).avatar"
                        alt="">
                    <div>
                        <p class="text-xsmall"><a href="#">{{userByID(thread.userId).name}}</a></p>
                        <p class="text-xsmall text-faded"><FormatedDate :timeStamp="thread.publishedAt"/></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
    props: {
        threads: {
            required: true,
            type: Array
        }
    },
    computed:{
        posts(){
            return this.$store.state.posts;
        },
        users(){
            return this.$store.state.users;
        }
    },
    methods: {
        postByID(postID){
            return this.posts.find(p => p.id === postID);
        },
        userByID(userID){
            return this.users.find(u => u.id === userID);
        }
    }
}
</script>