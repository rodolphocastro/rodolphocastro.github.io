<template>
  <section>
    <h2>Posts</h2>
    <p>
      Estes são meus posts publicados no
      <a href="https://dev.to/ardc_overflow">Dev.To</a>
    </p>
    <small>Recuperados automaticamente através da API do Dev.To</small>
    <hr />
    <template v-if="loading">
      <loading></loading>
    </template>
    <template v-else-if="posts.length">
      <post-article v-for="post in posts" v-bind:key="post.id" :post="post"></post-article>
    </template>
    <template v-else>
      <p>Nada foi encontrado!</p>
    </template>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapActions, mapState } from 'vuex'
import { Post } from '@/models/devto/Post'

@Component({
  name: 'posts',
  components: {
    'post-article': () => import('@/components/posts/PostArticle.vue'),
    loading: () => import('@/components/LoadingMessage.vue')
  },
  computed: { ...mapState('posts', ['posts', 'loading']) },
  methods: { ...mapActions('posts', ['fetchPosts']) }
})
export default class Posts extends Vue {
  fetchPosts!: () => Promise<void>;
  posts!: Post[];
  loading!: boolean;

  async mounted () {
    await this.fetchPosts()
  }
}
</script>
