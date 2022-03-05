<template>
  <v-btn
    href="#"
    fixed
    right
    rounded
    bottom
    color="#25D366"
    height="50px"
    class="white--text px-5 text-none transform"
  >
    <div class="text-h6">
      <v-icon class="pr-2" color="">fab fa-whatsapp</v-icon>
      WhatsApp
    </div>
  </v-btn>
</template>
<script>
export default {
  name: "WhatsappButton",
};
</script>
<style scoped>
.transform:hover {
  transform: scale(1.1);
}
</style>
