<template>
  <div id="app" class="app">
    <modal v-if="modalShow && modal === 'modal-test'" @close="closeModal" title="Modal with title">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dignissim fermentum. Vestibulum ac rutrum elit,
        <br>
        <br>dignissim vulputate massa. Donec nunc mi, condimentum at scelerisque et, cursus pretium sapien. Proin viverra interdum eleifend. Sed fermentum felis augue, id porttitor ante imperdiet sed.
      </p>
    </modal>

    <modal v-if="modalShow && modal === 'modal-test-two'" @close="closeModal">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum dignissim fermentum. Vestibulum ac rutrum elit,</p>
    </modal>
    <p @click.prevent="openModal('modal-test')">Open!</p>
    <p @click.prevent="openModal('modal-test-two')">Open modal-test-two!</p>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "app",
  components: {
    Modal
  },

  data: function() {
    return {
      modalShow: false,
      modal: null
    };
  },
  methods: {
    openModal(modal) {
      this.modalShow = true;
      this.modal = modal;
    },
    closeModal() {
      this.modalShow = false;
      this.modal = null;
    }
  }
};
</script>

<style lang="scss">
@import "styles/index";

.app {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $lightGrey;
}
</style>
