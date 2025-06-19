<template>
  <div class="biography">
    <section class="section pt-nav">
      <div class="container">
        <div class="grid grid-2">
          <div class="bio-content">
            <h1 class="mb-4 fade-in">Biografia</h1>
            
            <div class="bio-section fade-in fade-in-delay-1">
              <h2 class="mb-3">História + Formação + Poética</h2>
              <p class="mb-1">
                Raphael Francisco é paulista, radicado em Curitiba desde 2007, possui mestrado em 
                Artes Visuais pela PPG Artes UNESPAR (2023) na linha de pesquisa Modos de 
                Conhecimento e Processos Criativos em Arte e graduação em Licenciatura em Artes 
                Visuais pela Escola e Música e Belas Artes do Paraná – UNESPAR (2015).
              </p>
              <p class="mb-2">
                Sua poética encontra-se no limiar das técnicas tradicionais de pintura e produção 
                digital generativa de imagens abstratas via código. Explora diferentes relações entre 
                imagem abstrata, <em>glitches</em>, tecnologias digitais e analógicas. Tem participado de 
                exposições coletivas nacionais e internacionais desde 2013.
              </p>
            </div>

            <div class="bio-section fade-in fade-in-delay-2">
              <h3 class="mb-2">Formação</h3>
              <ul class="education-list">
                <li>
                  <strong>2023</strong> - Mestrado em Artes Visuais<br>
                  PPG Artes UNESPAR, Curitiba-PR
                </li>
                <li>
                  <strong>2015</strong> - Licenciatura em Artes Visuais<br>
                  Escola e Música e Belas Artes do Paraná – UNESPAR
                </li>
              </ul>
            </div>

            <div class="bio-section fade-in fade-in-delay-3">
              <h3 class="mb-2">Técnicas e Processos</h3>
              <p>
                Seu trabalho explora a intersecção entre técnicas tradicionais de pintura e 
                tecnologias digitais, investigando processos criativos que dialogam com 
                glitches, interferências e a produção generativa de imagens abstratas através 
                de código computacional.
              </p>
            </div>
          </div>
          
          <div class="bio-image fade-in fade-in-delay-2">
            <div class="image-placeholder">
              <!-- Aqui você pode adicionar uma foto do artista -->
              <div class="photo-placeholder">
                <p>Foto do Artista</p>
              </div>
            </div>
            <div class="bio-quote mt-4">
              <blockquote>
                "Busco na linguagem da pintura uma voz universal do ser humano, a partir de imagens 
                abstratas físicas ou digitais percebo um conteúdo rico em informação e diálogo não-verbais."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Biography'
}
</script>

<style scoped>
.biography {
  background-color: #f5f5f5;
}

.bio-section {
  margin-bottom: 3rem;
}

.bio-section:last-child {
  margin-bottom: 0;
}

.education-list {
  list-style: none;
  padding: 0;
}

.education-list li {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  position: relative;
}

.education-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  top: 0;
  font-weight: bold;
}

.bio-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.photo-placeholder {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  border-radius: 8px;
}

.bio-quote blockquote {
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  border-left: 4px solid #000;
  position: relative;
}

.bio-quote blockquote::before {
  content: '"';
  font-size: 4rem;
  position: absolute;
  top: -1rem;
  left: 1rem;
  opacity: 0.3;
}

@media (max-width: 768px) {
  .bio-image {
    margin-top: 3rem;
  }
  
  .photo-placeholder {
    height: 300px;
  }
}
</style> 