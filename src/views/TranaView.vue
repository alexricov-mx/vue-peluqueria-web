<script setup lang="ts">
    import CatalogueGridComponent from '@/components/CatalogueGridComponent.vue';
    import type { Catalogue } from '@/core/Catalogue';
    import { ref } from 'vue';
   
    const itemsTrana = ref<Catalogue[]>([
    {
      nombre: "Ficha Tecnica Alaciante Termo Protector",
      imagen:"Ficha_Tecnica_Alaciante_Termo_Protector_Trana.PNG",
      url:"Ficha_Tecnica_Alaciante_Termo_Protector_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Aloe Vera",
      imagen:"Ficha_Tecnica_Aloe_Vera_Trana.PNG",
      url:"Ficha_Tecnica_Aloe_Vera_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Amor",
      imagen:"Ficha_Tecnica_Amor_Trana.PNG",
      url:"Ficha_Tecnica_Amor_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Familia Celulas Madre",
      imagen:"Ficha_Tecnica_Familia_Celulas_Madre_Trana.PNG",
      url:"Ficha_Tecnica_Familia_Celulas_Madre_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Familia Leche de Coco",
      imagen:"Ficha_Tecnica_Familia_Leche_Coco_Trana.PNG",
      url:"Ficha_Tecnica_Familia_Leche_Coco_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Familia Matizador",
      imagen:"Ficha_Tecnica_Familia_Matizador_Trana.PNG",
      url:"Ficha_Tecnica_Familia_Matizador_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Familia Nano Keratina",
      imagen:"Ficha_Tecnica_Familia_Nano_Keratina_Trana.PNG",
      url:"Ficha_Tecnica_Familia_Nano_Keratina_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Familia Ozono",
      imagen:"Ficha_Tecnica_Familia_Ozono_Trana.PNG",
      url:"Ficha_Tecnica_Familia_Ozono_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Familia Proteina de Arroz",
      imagen:"Ficha_Tecnica_Familia_Proteina_De_Arroz_Trana.PNG",
      url:"Ficha_Tecnica_Familia_Proteina_De_Arroz_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Gotas de Seda Feromonas",
      imagen:"Ficha_Tecnica_Gotas_Seda_Feromonas_Trana.PNG",
      url:"Ficha_Tecnica_Gotas_Seda_Feromonas_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Tea Tree",
      imagen:"Ficha_Tecnica_Tea_Tree_Trana.PNG",
      url:"Ficha_Tecnica_Tea_Tree_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Todo En Uno",
      imagen:"Ficha_Tecnica_Todo_En_Uno_Trana.PNG",
      url:"Ficha_Tecnica_Todo_En_Uno_Trana.pdf"
    },
    {
      nombre: "Ficha Tecnica Vitamina B12",
      imagen: "Ficha_Tecnica_Vitamina_B12_Trana.PNG",
      url: "Ficha_Tecnica_Vitamina_B12_Trana.pdf"
    },
    {
      nombre: "Folleto Trana",
      imagen: "Folleto_Trana_22.PNG",
      url: "Folleto_Trana_22.pdf"
    }]);
</script>

<template>
  <main>
    <RouterLink to="/">Regresar a Inicio</RouterLink>
    <v-container>
      <CatalogueGridComponent :ListCatalogue="itemsTrana" />
    </v-container>
  </main>
</template>
