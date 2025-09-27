<template>
  <section class="article-list">
    <div class="row" v-for="row in rows">
      <article class="col" v-for="post in row" :key="post.url">
        <ArticleCard :post="post" />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { BlogPost } from '../../utils.mts';
import ArticleCard from './ArticleCard.vue';

/**
 * Props required for this component.
 */
const props = defineProps<{
  posts: BlogPost[];
}>();

const rows = computed(() => {
  // TODO: this area is a bit messy, needs refactor
  // Sort posts by date descending
  const sortedPosts = props.posts.sort(
    (a, b) => new Date(b.postDate).valueOf() - new Date(a.postDate).valueOf(),
  );
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
});
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
