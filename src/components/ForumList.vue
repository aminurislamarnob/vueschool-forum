<template>
    <div class="col-full">
        <div class="forum-list">
            <h2 class="list-title">
                <router-link v-if="categoryId" :to="`/forum/category/${categoryId}`">{{ categoryTitle }}</router-link>
                <span v-else>{{ categoryTitle }}</span>
            </h2>
            <div v-for="forum in categoryForums" :key="forum.id" class="forum-listing">
                <div class="forum-details">
                    <a class="text-xlarge" href="#">{{ forum.name }}</a>
                    <p>{{ forum.description }}</p>
                </div>
                <div class="threads-count">
                    <p><span class="count">{{ forum.threads?.length ? forum.threads?.length : '0' }}</span> {{ forum.threads?.length > 1 ? 'threads' : 'thread' }}</p>
                </div>
                <div class="last-thread"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categoryTitle: {
            type: String,
            default: 'Forum'
        },
        categoryForums:{
            type: Array,
            required: true
        },
        categoryId:{
            required: false,
            type: String
        }
    },
}
</script>