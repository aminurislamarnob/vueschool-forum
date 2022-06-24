<template>
  <div class="container">
    <ThreadLists :threads="threads"/>
  </div>
</template>

<script>
import sourceData from '@/data.json';
import ThreadLists from '@/components/ThreadLists.vue';
export default {
    components: { ThreadLists },
    data() {
        return {
            threads: sourceData.threads,
        };
    },
}
</script>