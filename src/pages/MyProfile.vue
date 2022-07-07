<template>
    <div class="container">
        <div class="flex-grid">
            <div class="col-3 push-top">
                <UserProfileCardEditor v-if="edit" :authUser="authUser"/>
                <UserProfileCard v-else :authUser="authUser"/>
            </div>
            <div class="col-7 push-top">
                <h3>{{ authUser.username }} activity</h3>
                <PostLists :threadPosts="authUser.postLists" />
            </div>
        </div>
    </div>
</template>
<script>
import PostLists from '@/components/PostLists.vue'
import UserProfileCard from '@/components/UserProfileCard.vue'
import UserProfileCardEditor from '@/components/UserProfileCardEditor.vue'
import { mapGetters } from 'vuex'
export default {
    props:{
        edit:{
            type: Boolean,
            default: false
        }
    },
    components:{
        PostLists, UserProfileCard, UserProfileCardEditor
    },
    computed:{
        ...mapGetters(['authUser']),
    },
}
</script>