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

      <footer v-if="hasFooterSlot" class="c-modal__footer">
        <slot name="footer"></slot>
      </footer>
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
  },
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer;
    }
  }
};
</script>

<style  lang="scss">
.c-modal {
  --modal-max-width: 600px;

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

    @include mediaTablet {
      max-width: var(--modal-max-width);
    }

    @include mediaTablet {
      --modal-max-widt: 900px;
    }

    &__close {
      position: absolute;
      right: -15px;
      top: -15px;

      font-size: 3rem;
      cursor: pointer;
      transition: 0.3s all ease;
      color: $darkGrey;

      &:hover {
        color: rgba($darkGrey, 0.7);
      }
    }
  }

  &__header {
    padding: 15px 30px;
    background-color: $lightGrey;

    &__title {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  &__content {
    padding: 30px;
  }

  &__footer {
    padding: 15px 30px;
    background-color: rgba($darkGrey, 0.1);
  }
}
</style>
