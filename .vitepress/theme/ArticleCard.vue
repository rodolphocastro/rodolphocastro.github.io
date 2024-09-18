<template>
    <div class="card" @click="redirectToPost">
        <h2>{{ post.title }}</h2>
        <p>{{ post.date }}</p>
        <p>{{ post.author }}</p>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        redirectToPost() {
            window.location.href = this.post.url;
        }
    }
};
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
}

.card h2 {
    font-size: 18px;
    margin-bottom: 5px;
}

.card p {
    font-size: 14px;
    margin-bottom: 5px;
}
</style>