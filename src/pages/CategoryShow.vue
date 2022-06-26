<template>
    <div class="container">
        <ForumList :category-title="category.name" :category-forums="getForumsForCategory(category)" />
    </div>
</template>

<script>
import ForumList from '@/components/ForumList.vue';
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: { ForumList },
    computed:{
        category(){
            return this.$store.state.categories.find(category => category.id === this.id)
        },
        forums(){
            return this.$store.state.forums;
        }
    },
    methods:{
        getForumsForCategory(category){
            return this.forums.filter(forum => forum.categoryId === category.id);
        }
    }
}
</script>