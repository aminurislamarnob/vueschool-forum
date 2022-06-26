<template>
    <div v-for="post in threadPosts" :key="post.id" class="post-list">
        <div class="post">
            <div class="user-info">
                <a href="profile.html#profile-details" class="user-name">{{userByID(post.userId).name}}</a>

                <a href="profile.html#profile-details">
                    <img class="avatar-large" :src="userByID(post.userId).avatar" alt="">
                </a>
            </div>
            <div class="post-content">
                <div>
                    <p>{{post.text}}</p>
                </div>
                <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
            </div>
            <div class="post-date text-faded">
                <FormatedDate :timeStamp="post.publishedAt"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        threadPosts: {
            required: true,
            type: Array
        }
    },
    computed:{
        users(){
            return this.$store.state.users;
        }
    },
    methods: {
        userByID(userID){
            return this.users.find(u => u.id === userID);
        },
    }
}
</script>