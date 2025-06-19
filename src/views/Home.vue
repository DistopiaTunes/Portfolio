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
              <!-- Imagem artística elegante -->
              <div class="elegant-artwork"></div>
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

.elegant-artwork {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.elegant-artwork::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 20px,
    rgba(255, 255, 255, 0.1) 20px,
    rgba(255, 255, 255, 0.1) 40px
  );
  animation: slide 8s linear infinite;
}

@keyframes slide {
  0% { transform: translateX(-40px); }
  100% { transform: translateX(40px); }
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