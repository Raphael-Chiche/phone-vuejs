// Dans JournalView.vue
<script>
import formCall from "@/components/FormCall.vue";

export default {
  name: "JournalView",
  components: {
    formCall,
  },
};
</script>

<template>
  <formCall />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
