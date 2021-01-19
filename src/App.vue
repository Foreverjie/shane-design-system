<template>
  <Button content="button" type="primary" />
  <Button content="button" />
  <Button shape="circle"><Search /></Button>
  <Button shape="circle" type="primary"><Search /></Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './components/Button.vue';
import Search from './components/icons/Search.vue';

export default defineComponent({
  name: 'App',
  components: {
    Button,
    Search,
  },
});
</script>

<style lang="scss">
@import "@/scss/global.scss";
</style>
