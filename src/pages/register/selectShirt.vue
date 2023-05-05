<template>
    <div v-show="true">
        <v-container class="bg-blue-grey-lighten-1">
            <div class="text-center">
                <v-img src="/img/shirt.jpg"></v-img>
                <br/>
                <router-link to="/register" class="me-4">                    
                    <v-btn append-icon="mdi-page-next">
                        ขั้นตอนทั้งหมด
                    </v-btn>
                </router-link>
                <v-btn @click="run.ChangeStep('payment')">Next Step</v-btn>
                <v-row>
                    <v-col>                        
                  <div>Current Register Step: {{ run.GetStep }}</div>
                    </v-col>
                </v-row>                
                <!--<v-avatar image="/img/BankrutProfileImage.jpg" size="350"></v-avatar>-->            
            </div>
        </v-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRunStore } from '../../stores/run'
export default defineComponent({
    setup() {
        const run = useRunStore()
        return {run}
    },
    methods: {
        ShowStep() {
            alert(import.meta.env.VITE_RUN_REGISTER_STEP);
            import.meta.env.VITE_RUN_REGISTER_STEP = 'payment';
        }
    }
})
</script>