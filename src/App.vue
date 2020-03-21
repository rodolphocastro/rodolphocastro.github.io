<template>
  <div id="app">
    <header id="nav">
      <h1>rodolphocastro.github.io</h1>
      <p>Minha página pessoal no GitHub</p>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">Sobre</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style src='awsm.css/dist/awsm_theme_black.min.css'>

</style>
