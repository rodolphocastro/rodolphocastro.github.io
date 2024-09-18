<template>
  <div class="card" @click="redirectToPost">
    <a>{{ post.title }}</a>
    <p>{{ new Date(post.postDate).toLocaleDateString() }}</p>
    <p>{{ post.author }}</p>
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

.card a {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
}

.card p {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
