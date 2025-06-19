<template>
  <div v-if="visible" class="dialog-overlay" @click.self="close">
    <div class="dialog-content">
      <button class="dialog-close" @click="close">&times;</button>
      <img :src="src" :alt="alt" class="dialog-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageDialog',
  props: {
    visible: Boolean,
    src: String,
    alt: String
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.dialog-content {
  position: relative;
  background: transparent;
  border-radius: 12px;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dialog-image {
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
}
.dialog-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10;
  transition: color 0.2s;
}
.dialog-close:hover {
  color: #ff6b6b;
}
</style> 