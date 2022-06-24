<template>
    <div class="container">
        <ForumList :category-title="category.name" :category-forums="getForumsForCategory(category)" />
    </div>
</template>

<script>
import sourceData from '@/data.json';
import ForumList from '@/components/ForumList.vue';
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: { ForumList },
    data(){
        return{
            categories: sourceData.categories,
            forums: sourceData.forums,
        }
    },
    computed:{
        category(){
            return this.categories.find(category => category.id === this.id)
        }
    },
    methods:{
        getForumsForCategory(category){
            return this.forums.filter(forum => forum.categoryId === category.id);
        }
    }
}
</script>