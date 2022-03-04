<template>
  <div class="home">
    <Desktop />
  </div>
</template>

<script>
// @ is an alias to /src
import Desktop from "@/components/Desktop.vue";

export default {
  name: "Home",
  components: {
    Desktop,
  },
};
</script>
