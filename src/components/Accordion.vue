<template>
  <div class="accordion">
    <button class="accordion-header" @click="toggle">
      <span>{{ title }}</span>
      <span class="accordion-icon">{{ isOpen ? '-' : '+' }}</span>
    </button>
    <div v-show="isOpen" class="accordion-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true
    },
    defaultOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: this.defaultOpen
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.accordion {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 2rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  overflow: hidden;
  transition: width 0.2s;
  display: flex;
  flex-direction: column;
}
.accordion-header {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  background: none;
  border: none;
  outline: none;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #222;
  transition: background 0.2s;
}
.accordion-header:hover {
  background: #f5f5f5;
}
.accordion-icon {
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
}
.accordion-body {
  padding: 2rem;
  border-top: 1px solid #eee;
  animation: fadeIn 0.3s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 