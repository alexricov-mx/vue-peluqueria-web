<script setup lang="ts">
    import VuePdfEmbed from 'vue-pdf-embed';    
    import { defineProps } from 'vue';
    import { ref } from 'vue';

    const props = defineProps({
        url: {
            type: String,
            required: true,
        },        
    });

    const url_pdf = ref<String>(props.url);
    
    console.log("PDFViewer-url:", url_pdf.value);
    
    function goBack(){
        window.history.back();
    }

</script>

<template>
    <v-container>
        <v-btn @click="goBack">Regresar</v-btn>
        <v-card class="mt-5">                     
            <v-card-text>
                <vue-pdf-embed :source="url_pdf" />
            </v-card-text>
        </v-card>
    </v-container>
</template>