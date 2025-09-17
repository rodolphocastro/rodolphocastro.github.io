<template>
  <div class="card" @click="redirectToPost">
    <h3 aria-label="Post title">{{ post.title }}</h3>
    <p aria-label="Post date">
      {{ new Date(post.postDate).toLocaleDateString() }}
    </p>
    <p aria-label="Post author">{{ post.author }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    redirectToPost() {
      window.location.href = this.post.url;
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
}

.card h3 {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
}

.card p {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
