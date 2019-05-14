<template>
  <button @click.prevent="onClick" class="c-button" :class="[colorClass, extraClass]">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    onButtonClick: {
      type: Function,
      required: false
    },
    color: {
      type: String,
      required: false
    },
    extraClass: {
      type: String,
      required: false
    }
  },
  methods: {
    onClick() {
      this.onButtonClick();
    }
  },
  computed: {
    colorClass() {
      if (this.color === "green") {
        return "c-button--green";
      } else if (this.color === "red") {
        return "c-button--red";
      }
    }
  }
};
</script>

<style lang="scss">
.c-button {
  --bg-color: #{$blue};

  padding: 10px 15px;
  border: none;
  cursor: pointer;
  background-color: var(--bg-color);
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 3px;
  transition: 0.3s all ease;

  &:hover {
    --bg-color: #{$darkBlue};
  }

  &--red {
    --bg-color: #{$red};
    &:hover {
      --bg-color: #{$darkRed};
    }
  }

  &--green {
    --bg-color: #{$green};
    &:hover {
      --bg-color: #{$darkGreen};
    }
  }
}
</style>