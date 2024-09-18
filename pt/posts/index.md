---
title: Posts
description: Índice para todos os posts
published: false
---

<script setup>
    import { data as blogPosts } from "./posts.data.mts"
    import ArticleList from "../../.vitepress/theme/ArticleList.vue"

    
</script>

## All posts

Existem {{ blogPosts.length }} posts, escolha um na barra lateral ou nos cards abaixo.

<ArticleList :posts="blogPosts" />
