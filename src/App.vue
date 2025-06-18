<template>
  <div class="min-h-screen bg-primary text-white">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/navbar.vue';
</script>