<template>
  <main>
    <v-row>
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-title>
            <h1>Borell</h1>
          </v-card-title>
          <v-cart-text>
            <v-img src="Folleto Borell_compressed.PNG" height="500"></v-img>
          </v-cart-text>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
              to="/borell"
            >
              Ver
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card>
          <v-card-title>
            <h1>Trana</h1>
          </v-card-title>
          <v-card-text>
            <v-img src="Folleto_Trana_22.PNG" height="500"></v-img>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
              to="/trana"
            >
              Ver
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>    
  </main>
</template>

<script setup lang="ts">  

</script>