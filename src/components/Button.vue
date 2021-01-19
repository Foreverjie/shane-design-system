<template>
  <div class="wrapper">
    <button class="btn" :class="[
      type ? `btn-${type}`: '',
      shape ? `btn-${shape}`: '',
      content ? '': 'btn-icon-only',
    ]">
      <span>
        {{ content }}
        <slot />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    content: String,
    type: String,
    shape: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/button.scss";
</style>
