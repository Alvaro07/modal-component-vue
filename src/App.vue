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
      <template v-slot:footer>
        <v-button
          text="Accept"
          :onButtonClick="closeModal"
          extraClass="margin-right-10"
          color="green"
        ></v-button>
        <v-button text="Close" :onButtonClick="closeModal" color="red"></v-button>
      </template>
    </modal>

    <v-button
      text="Open modal with title"
      :onButtonClick="() => openModal('modal-test')"
      extraClass="margin-right-20"
    >Open modal-test!</v-button>
    <v-button
      text="Open modal with footer"
      :onButtonClick="() => openModal('modal-test-two')"
    >Open modal-test-two!</v-button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Button from "./components/Button.vue";

export default {
  name: "app",
  components: {
    Modal,
    "v-button": Button
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
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  padding: 15px;
}
</style>
