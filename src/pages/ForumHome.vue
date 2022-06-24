<template>
  <div class="container">
    <!-- <ThreadLists :threads="threads"/> -->
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import sourceData from '@/data.json';
// import ThreadLists from '@/components/ThreadLists.vue';
import CategoryList from '@/components/CategoryList.vue';
export default {
    components: { CategoryList },
    data() {
        return {
            threads: sourceData.threads,
            categories: sourceData.categories
        };
    },
    methods:{

    }
}
</script>