<template>
  <div class="desktop">
    <v-row align="center">
      <v-col cols="12" md="4" class="hidden-xs-only hidden-sm-only">
        <v-img :src="pipes" alt="Mangueiras Amaflex"> </v-img>
      </v-col>
      <v-col cols="12" md="4">
        <img :src="logo" width="100%" alt="Amaflex" />
      </v-col>
      <v-col cols="12" md="4"
        ><Form class="mx-4" />
        <div width="100%" class="display-1 font ml-md-9 ml-4">
          <div class="margin" v-for="itens in contactList" :key="itens.item">
            {{ itens.item }}
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Form from "./Form.vue";
export default {
  data: () => ({
    pipes: "/images/pipes.png",
    logo: "/images/amaflex-logo.png",
    contactList: [
      { item: "Endereço" },
      { item: "Rodovia BR-163, - km-1035, Matupá, MT" },
      { item: "Telefone:" },
      { item: "(66) 99984-6882:" },
    ],
  }),
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
.margin:nth-child(2) {
  margin-bottom: 20px;
}
.margin:nth-child(4) {
  font-weight: 800;
}
</style>
