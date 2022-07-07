<template>
    <div class="profile-card">
        <p class="text-center">
            <img :src="authUser.avatar" :alt="authUser.name" class="avatar-xlarge">
        </p>
        <h1 class="title">{{authUser.username}}</h1>
        <p class="text-lead">{{authUser.name}}</p>
        <p class="text-justify">
            {{ authUser.bio || 'No bio specified.' }}
        </p>
        <span class="online">{{authUser.username}} is online</span>
        <div class="stats">
            <span>{{authUser.postCount}} posts</span>
            <span>{{authUser.threadCount}} threads</span>
        </div>
        <hr>
        <p v-if="authUser.website" class="text-large text-center"><i class="fa fa-globe"></i> <a :href="authUser.website">{{authUser.website}}</a></p>
        <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>
        <div class="text-center">
            <hr>
            <router-link :to="{name: 'ProfileEdit'}" class="btn-green btn-small">Edit Profile</router-link>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        authUser:{
            type: Object,
            required: true
        }
    },
}
</script>