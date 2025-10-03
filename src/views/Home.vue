<template>
  <div class="home">
    <section class="section hero">
      <div class="container">
        <div class="grid grid-2">
          <div class="hero-content">
            <h1 class="hero-title fade-in">
              RAPHAEL<br>
              FRANCISCO
            </h1>
            <p class="hero-subtitle fade-in fade-in-delay-1">Artista Visual</p>
          </div>
          <div class="hero-image fade-in fade-in-delay-2">
            <div class="hero-artwork">
              <img src="../assets/tokyo_2020.jpg" alt="Better Reality Island" class="hero-image-content">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section intro">
      <div class="container">
        <div class="intro-content">
          <div class="text-vertical">Arte Digital</div>
          <div class="intro-text">
            <h2 class="mb-3">História + Formação + Poética</h2>
            <p class="text-large">
              Raphael Francisco é paulista, radicado em Curitiba desde 2007, possui mestrado em 
              Artes Visuais pela PPG Artes UNESPAR (2023) na linha de pesquisa Modos de 
              Conhecimento e Processos Criativos em Arte.
            </p>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 120px;
}

.hero-title {
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero-artwork {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}

.hero-image-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.hero-image-content:hover {
  transform: scale(1.02);
}

.intro {
  padding: 8rem 0;
}

.intro-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .text-vertical {
    writing-mode: initial;
    text-orientation: initial;
    text-align: center;
  }
}
</style> 