<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import MyMoney from './components/MyMoney.vue';
import MyMoneyBear from './components/MyMoneyBear.vue'
</script>

<template>
  <Header />
      <MyMoneyBear />
      <router-view />
      <MyMoney />
  <Footer />
</template>