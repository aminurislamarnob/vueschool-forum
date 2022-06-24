<template>
    <ForumList v-for="category in categories" :key="category.id" :category-title="category.name" :category-forums="getForumsForCategory(category)" :category-id="category.id" />
</template>

<script>
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';
export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    components: { ForumList },
    data(){
        return{
            forums: sourceData.forums,
        }
    },
    methods:{
        getForumsForCategory(category){
            return this.forums.filter(forum => forum.categoryId === category.id);
        }
    }
}
</script>