<template>
  <div class="c-modal">
    <section class="c-modal__wrap">
      <font-awesome-icon icon="times-circle" @click="closeModal" class="c-modal__wrap__close"/>

      <header v-if="title" class="c-modal__header">
        <h2 class="c-modal__header__title">{{ title }}</h2>
      </header>

      <main class="c-modal__content">
        <slot></slot>
      </main>

      <footer></footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: false
    }
  },
  created() {
    if (!this.$slots.default) {
      console.error("Modal component requires content be provided in the slot.");
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style  lang="scss">
.c-modal {
  height: 100vh;
  width: 100%;
  padding: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba($darkGrey, 0.2);

  &__wrap {
    background-color: white;
    position: relative;
    border-radius: 2px;
    box-shadow: 5px 5px rgba($darkGrey, 0.2);
    max-width: 960px;

    &__close {
      position: absolute;
      right: -15px;
      top: -15px;

      font-size: 3rem;
      cursor: pointer;
      transition: 0.3s all ease;
      color: $red;

      &:hover {
        color: $darkRed;
      }
    }
  }

  &__header {
    padding: 15px 30px;
    background-color: $lightGrey;

    &__title {
      font-size: 2.2rem;
      font-weight: 700;
    }
  }

  &__content {
    padding: 30px;
  }
}
</style>
