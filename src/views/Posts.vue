<template>
  <div>
    <p>Work In Progress</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapActions, mapState } from 'vuex'
import { Post } from '@/models/devto/Post'

@Component({
  name: 'posts',
  computed: { ...mapState('posts', ['posts']) },
  methods: { ...mapActions('posts', ['fetchPosts']) }
})
export default class Posts extends Vue {
  fetchPosts!: () => Promise<void>;
  posts!: Post[]

  async mounted () {
    await this.fetchPosts()
  }
}
</script>

<style scoped>

</style>
