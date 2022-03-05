<template>
  <div class="contact display-1">
    <div class="text-h5 text-md-h4">Entre em contato:</div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="py-10 width-100 font"
    >
      <label for="field-name">Nome:</label>
      <v-text-field
        class="field-shadow"
        id="field-shadow"
        background-color="#dcdbdb"
        solo
        v-model="name"
        :rules="nameRules"
        required
      ></v-text-field>
      <label for="field-email">E-mail:</label>
      <v-text-field
        class="field-shadow"
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
        class="field-shadow"
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
      <div class="d-flex justify-end">
        <v-btn
          d-flex
          justify-end
          width="200px"
          large
          elevation="2"
          :disabled="!valid"
          color="primary"
          class="text-h5 text-none shadow"
          @click="validate"
        >
          Enviar
        </v-btn>
      </div>
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
<style>
label {
  margin-left: 15px;
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "PFDinDisplay_Regular" !important;
}
.width-100 {
  width: 100%;
}
.contact {
  color: #43749e;
}
.font {
  font-size: 22px !important;
}
.text-h5 {
  font-size: 30px !important;
}
.field-shadow .v-input__slot {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12) !important;
}
.shadow {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12) !important;
}
</style>
