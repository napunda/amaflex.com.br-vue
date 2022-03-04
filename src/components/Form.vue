<template>
  <div class="contact">
    <div class="text-h5 text-md-h4 roboto">Entre em contato:</div>
    <v-form ref="form" v-model="valid" lazy-validation class="py-14 width-100">
      <label for="field-name">Nome:</label>
      <v-text-field
        id="field-name"
        background-color="#dcdbdb"
        solo
        v-model="name"
        :rules="nameRules"
        required
      ></v-text-field>
      <label for="field-email">E-mail:</label>
      <v-text-field
        elevation
        background-color="#dcdbdb"
        id="field-email"
        filled
        solo
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <label for="field-message">Mensagem:</label>
      <v-textarea
        elevation
        background-color="#dcdbdb"
        id="field-message"
        filled
        no-resize
        messages
        solo
        required
        v-model="message"
        :rules="messageRules"
      >
      </v-textarea>

      <v-btn
        fixed
        right
        width="200px"
        large
        elevation="2"
        :disabled="!valid"
        color="primary"
        class="font"
        @click="validate"
      >
        Enviar
      </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Este campo é obrigatório"],
    email: "",
    emailRules: [
      (v) => !!v || "Este campo é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O e-mail deve ser válido",
    ],
    message: "",
    messageRules: [(v) => !!v || "Este campo é obrigatório"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
<style scoped>
label {
  margin-left: 15px;
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto Mono", monospace;
}
.width-100 {
  width: 100%;
}
.contact {
  color: #43749e;
}
#field-name.v-input__slot {
  box-shadow: 20px 20px 50px 15px rgb(0, 0, 0) !important;
}
</style>
