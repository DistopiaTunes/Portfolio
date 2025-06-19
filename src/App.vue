<template>
  <div id="app">
    <nav class="nav">
      <div class="container nav-container">
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link">Início</router-link></li>
          <li><router-link to="/biografia" class="nav-link">Biografia</router-link></li>
          <li><router-link to="/trabalhos" class="nav-link">Trabalhos</router-link></li>
          <li><router-link to="/contato" class="nav-link">Contato</router-link></li>
        </ul>
      </div>
    </nav>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.nav-brand {
  text-decoration: none;
  color: #000;
}

.nav-brand h3 {
  font-weight: 600;
  font-size: 1.2rem;
}

.router-link-active.nav-link {
  opacity: 0.6;
}
</style> 