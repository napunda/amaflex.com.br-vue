<template>
  <div class="desktop">
    <v-row align="center">
      <v-col cols="12" md="4" class="hidden-xs-only hidden-sm-only">
        <v-img src="/images/pipes.png" alt=""> </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <img src="/images/amaflex-logo.png?v4" width="100%" />
      </v-col>
      <v-col cols="12" md="4"
        ><Form class="mx-4" />
        <div width="100%" class="display-1 font ml-md-9 ml-4">
          <div>Endereço:</div>
          <div class="margin">Rodovia BR-163, - km-1035, Matupá, MT</div>
          <div>Telefone:</div>
          <div class="font-weight-bold">(66) 99984-6882</div>
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
.font {
  font-size: 20px !important;
  color: #807f7f;
  line-height: normal;
}
.margin {
  margin-bottom: 20px;
}
</style>
