<template>
  <div class="desktop">
    <v-row align="center">
      <v-col cols="12" md="4" class="hidden-xs-only hidden-sm-only">
        <v-img src="/images/pipes.png" alt=""> </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <img src="/images/amaflex-logo.png?v2" width="100%" />
      </v-col>
      <v-col cols="12" md="4"
        ><Form />
        <div width="100%">
          <div class="subtitle-2">Endereço:</div>
          <div class="text-body-2">Rodovia BR-163, - km-1035, Matupá, MT</div>
          <div class="subtitle-2">Telefone:</div>
          <div class="text-body-2">(66) 99984-6882</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Form from "./Form.vue";
export default {
  name: "Desktop",
  components: {
    Form,
  },
};
</script>

<style scoped>
.desktop {
  width: 100%;
  height: 100vh;
  background-image: url("/images/home-background.jpg");
  background-size: cover;
  background-position: center;
  padding-top: 100px;
}
.index {
  position: fixed;
  z-index: 900;
}
</style>
