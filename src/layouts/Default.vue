<template>
  <div>
    <b-container>
      <a-header />
      <slot />
    </b-container>
  </div>
</template>

<script>
import AHeader from '@/components/AHeader';

export default {
  components: {
    AHeader,
  }
};
</script>
