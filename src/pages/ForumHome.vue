<template>
  <div class="container">
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue';
export default {
    components: { CategoryList },
    computed:{
      categories(){
        return this.$store.state.categories
      }
    }
}
</script>