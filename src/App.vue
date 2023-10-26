<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>D Peluqueria</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Borell">Borell</RouterLink>
        <RouterLink to="/Trana">Trana</RouterLink>
      </nav> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app> 
</template>

<style scoped>

</style>
