
<script setup lang="ts">    
    import { defineProps } from 'vue';
    import PDFViewerComponent from '@/components/PDFViewerComponent.vue';    

    const props = defineProps({
        nombre: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    });    
    
</script>

<template>
    <main>        
        <v-card>
            <v-toolbar>
                <v-toolbar-title>{{  $route.params.url.toString() }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <PDFViewerComponent :url="'/' + $route.params.url.toString()" />
            </v-card-text>
        </v-card>
    </main>
</template>