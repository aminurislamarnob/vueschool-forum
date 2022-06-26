<template>
  <TheNavbar/>
  <router-view/>
</template>

<script>
import '@/assets/css/style.css'
import TheNavbar from '@/components/TheNavbar.vue'
export default {
    name: "App",
    components: { TheNavbar }
}
</script>
