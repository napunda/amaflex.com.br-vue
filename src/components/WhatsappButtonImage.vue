<template>
  <a href="#">
    <img src="/images/whatsapp-button.png" />
  </a>
</template>
<style scoped>
a {
  position: fixed;
  right: 0px;
  bottom: 0px;
  z-index: 100;
}
a img {
  transition: 0.3s;
  width: 100%;
}
a img:hover {
  transform: scale(1.06);
}
@media (max-width: 999px) {
  a img {
    transform: scale(0.8);
  }
}
</style>
