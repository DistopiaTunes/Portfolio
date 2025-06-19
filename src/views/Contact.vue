<template>
  <div class="contact">
    <section class="section pt-nav">
      <div class="container">
        <div class="contact-content">
          <div class="contact-header fade-in">
            <h1>Contato</h1>

          </div>
          
          <div class="contact-info fade-in fade-in-delay-1">
            <div class="contact-item">
              <h2>Email</h2>
              <a href="mailto:raphaelfrancisco@mail.com" class="contact-link">
                raphaelfrancisco@mail.com
              </a>
            </div>
            
            <div class="contact-item">
              <h2>Telefone</h2>
              <a href="tel:+5541998122052" class="contact-link">
                +55 41 9 9812 2052
              </a>
            </div>
            
            <div class="contact-item">
              <h2>Localização</h2>
              <p class="contact-text">
                Curitiba – PR – Brasil
              </p>
            </div>
            

          </div>
          
          <!-- <div class="contact-visual fade-in fade-in-delay-2">
            <div class="visual-artwork">

              <div class="abstract-composition">
                <div class="color-stripe stripe-1"></div>
                <div class="color-stripe stripe-2"></div>
                <div class="color-stripe stripe-3"></div>
                <div class="color-stripe stripe-4"></div>
                <div class="color-stripe stripe-5"></div>
                <div class="color-stripe stripe-6"></div>
                <div class="glitch-overlay"></div>
              </div>
            </div>
          </div> -->
        </div>
        
        <!-- <div class="contact-footer fade-in fade-in-delay-3">
          <div class="footer-content">

            
            <div class="availability">
              <h3>Disponibilidade</h3>
              <p>
                Aberto para colaborações, exposições, projetos artísticos e 
                discussões sobre arte digital e processos criativos.
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.contact-item h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #000;
  text-transform: uppercase;
}

.contact-link {
  font-size: 1.2rem;
  color: #000;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.3s ease;
  display: inline-block;
}

.contact-link:hover {
  opacity: 0.6;
}

.contact-text {
  font-size: 1.2rem;
  color: #000;
  font-weight: 400;
}

.contact-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-artwork {
  width: 400px;
  height: 500px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

.abstract-composition {
  width: 100%;
  height: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.color-stripe {
  flex: 1;
  position: relative;
}

.stripe-1 { background: linear-gradient(90deg, #ff6b6b, #ee5a24); }
.stripe-2 { background: linear-gradient(90deg, #4ecdc4, #44bd87); }
.stripe-3 { background: linear-gradient(90deg, #45b7d1, #96ceb4); }
.stripe-4 { background: linear-gradient(90deg, #f9ca24, #f0932b); }
.stripe-5 { background: linear-gradient(90deg, #6c5ce7, #a29bfe); }
.stripe-6 { background: linear-gradient(90deg, #fd79a8, #e84393); }

.glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  animation: glitch 3s infinite;
}

@keyframes glitch {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(1px); }
}

.contact-footer {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 2px solid #000;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.footer-content h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.footer-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.artist-statement,
.availability {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #000;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .text-vertical {
    writing-mode: initial;
    text-orientation: initial;
  }
  
  .visual-artwork {
    width: 100%;
    height: 400px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-info {
    gap: 2rem;
  }
  
  .contact-item h2 {
    font-size: 1.2rem;
  }
  
  .contact-link,
  .contact-text {
    font-size: 1rem;
  }
}
</style> 