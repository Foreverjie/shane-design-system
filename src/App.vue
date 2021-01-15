<template>
  <Button content="button" type="primary" />
  <Button content="button" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './components/Button.vue';

export default defineComponent({
  name: 'App',
  components: {
    Button,
  },
});
</script>

<style lang="scss">
@import "@/scss/global.scss";
</style>
