<template>
  <article>
    <h3>
      {{post.title}}
      <small> ({{post.readable_publish_date}})</small>
    </h3>
    <img :src="post.social_image" alt="Post's Social Image" />
    <p>{{post.description}}</p>
    <p>Tags: {{post.tag_list.join(', ')}}</p>
    <a :href="post.url">Open on Dev.To</a>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Post } from '@/models/devto/Post'

@Component({
  name: 'post-article'
})
export default class PostArticle extends Vue {
  @Prop({ required: true }) readonly post!: Post;
}
</script>

<style scoped>
a {
  text-decoration: none;
}

h3 {
  margin-bottom: 1em;
}
</style>
