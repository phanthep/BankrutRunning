<template>
    <div v-show="true">
        <v-container class="bg-blue-grey-lighten-1">
            <div class="text-center">
                <v-img src="/img/race.jpg"></v-img>
                
                <br/>
                <router-link to="/register" class="me-4">                    
                    <v-btn append-icon="mdi-page-next">
                        TimeLine
                    </v-btn>
                </router-link>                                
                <v-btn @click="run.ChangeStep('shirt')">Next Step</v-btn>
                <div>Current Register Step: {{ run.GetStep }}</div>
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
            //alert(run.$state);        
        }
    }
})
</script>