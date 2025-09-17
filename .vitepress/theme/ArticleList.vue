<template>
  <section class="article-list">
    <div class="row" v-for="row in rows" :key="row">
      <article class="col" v-for="post in row" :key="post.id">
        <ArticleCard :post="post" />
      </article>
    </div>
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue';

export default {
  name: 'ArticleList',
  components: {
    ArticleCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    rows() {
      const sortedPosts = this.posts.sort((a, b) => b.date - a.date);
      const rows = [];
      let currentRow = [];
      for (let i = 0; i < sortedPosts.length; i++) {
        currentRow.push(sortedPosts[i]);
        if (currentRow.length === 2 || i === sortedPosts.length - 1) {
          rows.push(currentRow);
          currentRow = [];
        }
      }
      return rows;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.col {
  flex: 1 0 50%;
  padding: 10px;
}
</style>
