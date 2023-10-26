<script setup lang="ts">            
    import type { Catalogue } from '@/core/Catalogue';
    import { defineProps } from 'vue';
    import type { PropType } from 'vue/dist/vue.js';
    const props = defineProps({
        ListCatalogue: {
            type: Array as PropType<Catalogue[]>,
            required: true,
        }
});

</script>

<template>
    <v-container>
        <v-row >
            <template v-for="item in ListCatalogue">
                <v-col cols="10" class="ma-8">
                    <v-row >
                        <h2>{{ item.nombre }}</h2>
                    </v-row>
                    <v-row>
                        <v-img
                            :src = "item.imagen"
                            height="100%"
                            cover
                            />
                    </v-row>
                    <v-row>
                        <v-btn
                            color="orange-lighten-2"
                            variant="text"
                            :to=" { name: 'viewer', params: { nombre: item.nombre, url: item.url } }"
                            >
                            Ver
                        </v-btn>                        
                    </v-row>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>