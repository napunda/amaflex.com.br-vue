<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <WhatsappButton />
  </v-app>
</template>

<script>
import WhatsappButton from "./components/WhatsappButton.vue";
export default {
  components: {
    WhatsappButton,
  },
  name: "App",
  data: () => ({
    //
  }),
};
</script>
<style>
.roboto {
  font-family: "Roboto Mono", monospace !important;
}
</style>
