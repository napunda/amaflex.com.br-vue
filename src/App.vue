<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <WhatsappButtonImage class="hidden-xs-only" />
    <WhatsappButton class="d-sm-none" />
  </v-app>
</template>

<script>
import WhatsappButtonImage from "./components/WhatsappButtonImage.vue";
import WhatsappButton from "./components/WhatsappButton.vue";
export default {
  components: {
    WhatsappButtonImage,
    WhatsappButton,
  },
  name: "App",
};
</script>
<style>
@font-face {
  font-family: "PFDinDisplay_Regular";
  font-style: normal;
  font-weight: normal;
  src: url(/fonts/PFDinDisplayPro-Regular.woff);
}
@font-face {
  font-family: PFDinDisplay_Medium;
  font-style: normal;
  font-weight: normal;
  src: url(/fonts/PFDinDisplayPro-Medium.woff);
}
@font-face {
  font-family: PFDinDisplay_Bold;
  font-style: normal;
  font-weight: normal;
  src: url(/fonts/PFDinDisplayPro-Bold.woff);
}
.display-1 {
  font-family: "PFDinDisplay_Regular" sans-serif !important;
}
</style>
