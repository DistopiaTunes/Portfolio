<template>
  <div class="works">
    <section class="section pt-nav">
      <div class="container">
        <div class="works-header mb-4">
          <h1 class="fade-in">Trabalhos</h1>
        </div>

        <div class="accordion-pinturas-wrapper">
          <Accordion title="Pinturas" :defaultOpen="true">
            <Accordion 
              title="Série Memórias" 
              :defaultOpen="openSerie === 'memorias'" 
              @toggle="handleSerieToggle('memorias')"
            >
              <div class="work-series mb-4 fade-in fade-in-delay-1 series-grid">
                <div class="text-vertical">Memórias</div>
                <div>
                  <div class="series-header">
                    <h2>Série Memórias</h2>
                    <p class="series-description">
                      Série de pinturas abstratas produzida durante meu trabalho de mestrado. A série propõe a existência
                      memória virtual corrompida enquanto objeto material passível de sentimentos.</p>
                    
                    
                      <p class="series-description">Os blocos de informação distorcidos visualmente demonstram a impermanência de 
                      um conteúdo que ocupa um espaço idealmente fixo, ao mesmo tempo, a 
                      composição torna tal espaço passível de uma interpretação do próprio registro imagético 
                      passado.</p>
                    
                    
                      <p class="series-description">A série é constituída de 8 pinturas sobre papel onde a manualidade repetitiva é empregada a 
                      fim de obter-se uma visualidade quase maquínica e repetitiva ao mesmo tempo que 
                      busca a randomização verdadeiramente infinita.</p>
                    
                   
                  </div>
                  <div class="series-works">
                    <div class="work-item">
                      <img class="work-image" :src="memoria01" alt="Memória 01" @click="openImageDialog(memoria01, 'Memória 01')">
                      <div class="work-info">
                        <h3>Memória 01</h3>
                        <p>Acrílica sobre papel<br>42 x 29,7 cm<br>2022</p>
                      </div>
                    </div>
                    <div class="work-item">
                      <img class="work-image" :src="memoria03" alt="Memória 03" @click="openImageDialog(memoria03, 'Memória 03')">
                      <div class="work-info">
                        <h3>Memória 03</h3>
                        <p>Acrílica sobre papel<br>42 x 29,7 cm<br>2022</p>
                      </div>
                    </div>
                    <div class="work-item">
                      <img class="work-image" :src="memoria05" alt="Memória 05" @click="openImageDialog(memoria05, 'Memória 05')">
                      <div class="work-info">
                        <h3>Memória 05</h3>
                        <p>Acrílica sobre papel<br>42 x 29,7 cm<br>2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-vertical invertido">Memórias</div>
              </div>
            </Accordion>
            <Accordion 
              title="Série Varreduras" 
              :defaultOpen="openSerie === 'varreduras'" 
              @toggle="handleSerieToggle('varreduras')"
            >
              <div class="work-series mb-4 fade-in fade-in-delay-2 series-grid">
                <div class="text-vertical">Varreduras</div>
                <div>
                  <div class="series-header">
                    <h2>Série Varreduras</h2>
                    <p class="series-description">
                      A série varreduras é composta de 60 pinturas sobre papel. Utilizando as cores primárias do 
                      padrão CMY e através de movimentos repetitivos tem o objetivo de simular a 
                      varredura de pixels em uma tela eletrônica RGB dispondo tinta acrílica em ordens 
                      específicas de cor e posição na superfície.
                    </p>
                    <p>
                      Os blocos de informação cromática criados buscam um aspecto de distorção visual para 
                      demonstrar a transitoriedade de um conteúdo exclusivo que ocupa um espaço 
                      aparentemente fixo, ao mesmo tempo as composições intentam demonstrar que tal 
                      espaço é suscetível a uma nova percepção do registro do tempo e uma variação infinita.
                    </p>
                    <p>
                      A série explora ainda a ideia de manualidade repetitiva, aqui empregada a fim de obter-se 
                      uma visualidade pretensamente maquínica ao mesmo tempo que busca a tensão de uma 
                      visualidade orgânica manual/artesanal.
                    </p>
                  </div>
                  <div class="series-works">
                    <div class="work-item" v-for="(img, idx) in varredurasImgs" :key="img">
                      <img class="work-image" :src="img.src" :alt="img.alt" @click="openImageDialog(img.src, img.alt)">
                      <div class="work-info">
                        <h3>{{ img.alt }}</h3>
                        <p>Acrílica sobre papel<br>42 x 29,7 cm<br>2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-vertical invertido">Varreduras</div>
              </div>
            </Accordion>
            <Accordion 
              title="Série Interferências" 
              :defaultOpen="openSerie === 'interferencias'" 
              @toggle="handleSerieToggle('interferencias')"
            >
              <div class="work-series mb-4 fade-in fade-in-delay-3 series-grid">
                <div class="text-vertical">Interferências</div>
                <div>
                  <div class="series-header">
                    <h2>Série Interferências</h2>
                    <p class="series-description">
                      Durante a investigação das cores primárias dos sistemas de cores RGB e CMYK e do ato 
                      pseudomecanizado de dispersão de valores cromáticos, máximos ou mínimos, surge a 
                      série Interferências.
                    </p>
                    <p>
                      Como o nome sugere, as interferências se apresentam acima, ou a frente de uma 
                      camada imaculada de cores sólidas específicas que preenchem um quadrilátero 
                      romboide.
                    </p>
                    <p>
                      A série conta com 6 composições a fim de atender a todos os valores primários do 
                      modelo visual do cubo RGB.
                    </p>
                  </div>
                  <div class="series-works">
                    <div class="work-item" v-for="img in interferenciasImgs" :key="img.src">
                      <img class="work-image" :src="img.src" :alt="img.alt" @click="openImageDialog(img.src, img.alt)">
                      <div class="work-info">
                        <h3>{{ img.alt }}</h3>
                        <p>Acrílica sobre papel<br>42 x 29,7 cm<br>2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-vertical invertido">Interferências</div>
              </div>
            </Accordion>
            <Accordion 
              title="Série Corrigindo Erros" 
              :defaultOpen="openSerie === 'corrigindo'" 
              @toggle="handleSerieToggle('corrigindo')"
            >
              <div class="work-series mb-4 series-grid">
                <div class="text-vertical">Corrigindo Erros</div>
                <div>
                  <div class="series-header">
                    <h2>Série Corrigindo Erros</h2>
                    <p class="series-description">
                      A série "Corrigindo Erros" busca expressar visualmente a constante tentativa humana de 
                      corrigir os próprios equívocos, sobrescrevendo ações passadas na busca por 
                      aperfeiçoamento ou apagamento. No entanto, cada tentativa de modificar o que foi 
                      originalmente produzido acaba por gerar novas interpretações, que surgem no próprio 
                      ato de correção, criando assim um ciclo infinito de (in)compreensão da imagem.
                    </p>
                    <p>
                      A informação visual da obra se organiza de forma análoga a um texto; entretanto, cada 
                      linha desse "texto" foi ocultada por uma faixa branca. Sobre cada faixa, ocorreram 
                      intervenções na tentativa de restaurar parte da informação original, agora encoberta.
                    </p>
                    <p>
                      Por meio desse ciclo repetitivo de correções, a obra questiona a real necessidade de uma 
                      interpretação literal das imagens, bem como o modo como as compreendemos ao longo do 
                      tempo.
                    </p>
                  </div>
                  <div class="series-works">
                    <div class="work-item" v-for="img in corrigindoImgs" :key="img.src">
                      <img class="work-image" :src="img.src" :alt="img.alt" @click="openImageDialog(img.src, img.alt)">
                      <div class="work-info">
                        <h3>{{ img.alt }}</h3>
                        <p>Técnica mista sobre papel<br>21 x 29,7 cm<br>2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-vertical invertido">Corrigindo Erros</div>
              </div>
            </Accordion>
          </Accordion>

          <Accordion title="Gravuras">
            <!-- Conteúdo de gravuras aqui -->
          </Accordion>
          <Accordion title="Digital">
            <!-- Conteúdo de digital aqui -->
          </Accordion>
          <Accordion title="Música">
            <!-- Conteúdo de música aqui -->
          </Accordion>
        </div>

        <!-- Quote Section -->
        <div class="quote-section fade-in">
          <blockquote class="featured-quote">
            <h2>"Se as pinturas abstratas mostram minha realidade, então as paisagens e naturezas-mortas mostram meu anseio."</h2>
            <cite>– Gerhard Richter, 1981</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <ImageDialog :visible="dialogOpen" :src="dialogImg" :alt="dialogAlt" @close="closeImageDialog" />
  </div>
</template>

<script>
import Accordion from '../components/Accordion.vue';
import ImageDialog from '../components/ImageDialog.vue';
import memoria01 from '../assets/memorias-01.jpg';
import memoria03 from '../assets/memorias-03.jpg';
import memoria05 from '../assets/memorias-05.jpg';
import v004 from '../assets/v004.png';
import v010 from '../assets/v010.png';
import v012 from '../assets/v012.png';
import v014 from '../assets/v014.png';
import v015 from '../assets/v015.png';
import v018 from '../assets/v018.png';
import v021 from '../assets/v021.png';
import v023 from '../assets/v023.png';
import v028 from '../assets/v028.png';
import v033 from '../assets/v033.png';
import interferencias001 from '../assets/interferências-001-redux.png';
import interferencias03 from '../assets/interferências-03-redux.png';
import interferencias004 from '../assets/interferências-004-redux.png';
import interferencias005 from '../assets/interferências-005-redux.png';
import interferencias006 from '../assets/interferências-006-redux.png';
import corrigindo1 from '../assets/img20230202_11361453-reduzido.png';
import corrigindo2 from '../assets/img20230426_22052568.png';
import corrigindo3 from '../assets/img20230326_23062483.png';

export default {
  name: 'Works',
  components: { Accordion, ImageDialog },
  data() {
    return {
      openSerie: null,
      memoria01,
      memoria03,
      memoria05,
      v004,
      v010,
      v012,
      v014,
      v015,
      v018,
      v021,
      v023,
      v028,
      v033,
      interferencias001,
      interferencias03,
      interferencias004,
      interferencias005,
      interferencias006,
      corrigindo1,
      corrigindo2,
      corrigindo3,
      dialogOpen: false,
      dialogImg: null,
      dialogAlt: ''
    }
  },
  computed: {
    varredurasImgs() {
      return [
        { src: this.v004, alt: 'Varredura 004' },
        { src: this.v010, alt: 'Varredura 010' },
        { src: this.v012, alt: 'Varredura 012' },
        { src: this.v014, alt: 'Varredura 014' },
        { src: this.v015, alt: 'Varredura 015' },
        { src: this.v018, alt: 'Varredura 018' },
        { src: this.v021, alt: 'Varredura 021' },
        { src: this.v023, alt: 'Varredura 023' },
        { src: this.v028, alt: 'Varredura 028' },
        { src: this.v033, alt: 'Varredura 033' }
      ];
    },
    interferenciasImgs() {
      return [
        { src: this.interferencias001, alt: 'Interferência 001' },
        { src: this.interferencias03, alt: 'Interferência 03' },
        { src: this.interferencias004, alt: 'Interferência 004' },
        { src: this.interferencias005, alt: 'Interferência 005' },
        { src: this.interferencias006, alt: 'Interferência 006' }
      ];
    },
    corrigindoImgs() {
      return [
        { src: this.corrigindo1, alt: 'Corrigindo Erros 1' },
        { src: this.corrigindo2, alt: 'Corrigindo Erros 2' },
        { src: this.corrigindo3, alt: 'Corrigindo Erros 3' }
      ];
    }
  },
  methods: {
    handleSerieToggle(serie) {
      this.openSerie = this.openSerie === serie ? null : serie;
    },
    openImageDialog(img, alt) {
      this.dialogImg = img;
      this.dialogAlt = alt;
      this.dialogOpen = true;
    },
    closeImageDialog() {
      this.dialogOpen = false;
      this.dialogImg = null;
      this.dialogAlt = '';
    }
  }
}
</script>

<style scoped>
.works {
  background-color: #f5f5f5;
}

.works-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.series-grid {
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  align-items: stretch;
  gap: 2rem;
}

.work-series {
  margin-bottom: 6rem;
}

.series-header {
  margin-bottom: 3rem;
}

.series-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 2rem;
}

.series-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 800px;
}

.series-works {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.work-item {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.work-image {
  height: 300px;
  background-size: cover;
  background-position: center;
}

.work-info {
  padding: 1.5rem;
}

.work-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.work-info p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.text-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: clamp(3.5rem, 2vw, 1.5rem);
  font-weight: 10;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.10;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}

.text-vertical.invertido {
  transform: rotate(180deg);
  align-items: flex-end;
}

/* Placeholder backgrounds para as obras */
.memory-04 { background: linear-gradient(45deg, #ff6b6b, #ee5a24, #feca57, #48dbfb); }
.memory-07 { background: linear-gradient(135deg, #ff9ff3, #f368e0, #ff3838, #ff9f43); }
.memory-03 { background: linear-gradient(45deg, #54a0ff, #2e86de, #ff9ff3, #feca57); }
.memory-06 { background: linear-gradient(135deg, #5f27cd, #00d2d3, #ff9ff3, #54a0ff); }

.varredura-39 { background: linear-gradient(to right, #667eea 0%, #764ba2 100%); }
.varredura-51 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.varredura-10 { background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%); }
.varredura-33 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.varredura-12 { background: linear-gradient(45deg, #fa709a 0%, #fee140 100%); }

.interferencia-001 { background: linear-gradient(45deg, #ffeb3b, #000); }
.interferencia-006 { background: linear-gradient(45deg, #f44336, #000); }
.interferencia-002 { background: linear-gradient(45deg, #2196f3, #000); }
.interferencia-003 { background: linear-gradient(45deg, #4caf50, #000); }

.corrigindo-b { background: linear-gradient(to right, #2196f3, #fff); }
.corrigindo-r { background: linear-gradient(to right, #f44336, #fff); }
.corrigindo-g { background: linear-gradient(to right, #4caf50, #fff); }
.sem-titulo { background: linear-gradient(45deg, #000, #fff); }

.quote-section {
  margin: 6rem 0;
  text-align: center;
  max-width: 1336px;
  margin-left: auto;
  margin-right: auto;
}

.featured-quote {
  max-width: 1336px;
  margin: 0 auto;
  padding: 3rem;
  background: #000;
  color: #fff;
  border-radius: 8px;
}

.featured-quote h2 {
  font-style: italic;
  font-weight: 400;
  margin-bottom: 1rem;
}

.featured-quote cite {
  font-size: 1rem;
  opacity: 0.8;
}

@media (max-width: 900px) {
  .series-grid {
    grid-template-columns: 1fr;
  }
  .text-vertical,
  .text-vertical.invertido {
    flex-direction: row;
    writing-mode: initial;
    text-orientation: initial;
    justify-content: flex-start;
    margin-bottom: 1rem;
    height: auto;
    transform: none;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .works-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .series-works {
    grid-template-columns: 1fr;
  }
  
  .featured-quote {
    padding: 2rem;
  }
}

.accordion-pinturas-wrapper {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 2rem;
}

.accordion {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
}
</style> 