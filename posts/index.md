---
title: Posts
description: Index for all posts
published: false
---

<script setup>
    import { data as blogPosts } from "./posts.data.mts"
    import ArticleList from "../.vitepress/theme/ArticleList.vue"
</script>

## All posts

There are {{ blogPosts.length }} posts, pick one from the sidebar or the cards below.

<ArticleList :posts="blogPosts" />