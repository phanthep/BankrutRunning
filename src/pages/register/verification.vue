<template>
    <div v-show="true">
        <v-container class="bg-blue-grey-lighten-1">
            <div class="text-center">
                <!--<v-img src="/img/shirt.jpg"></v-img>-->
                Verifycation
                <br/>
                <router-link to="/register">                    
                    <v-btn append-icon="mdi-page-next">
                        TimeLine
                    </v-btn>
                </router-link>
                <div>Current Register Step: {{ run.GetStep }}</div>
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
        }
    }
})
</script>