<template>
    <div v-show="true">
        <v-container class="bg-blue-grey-lighten-1">
            <h3>เลือกระยะวิ่ง</h3>
            <div class="text-center">
                <v-img src="/img/race.png"></v-img>                
                <br/>
                <v-radio-group inline>
                      <v-radio label="ระยะ 5 กม." value="5"></v-radio>
                      <v-radio label="ระยะ 10 กม." value="10"></v-radio>
                      <v-radio label="VIP" value="vip"></v-radio>
                    </v-radio-group>   
                <router-link class="me-4" to="/register">
                    <v-btn color="blue-darken-4" append-icon="mdi-timeline-check-outline">
                      ขั้นตอนทั้งหมด
                    </v-btn>
                </router-link>
                <router-link to="/register/selectShirt">
                    <v-btn color="blue-darken-4" append-icon="mdi-content-save-move" @click="run.UpdateCurrentStep(3)">ดำเนินการต่อ</v-btn>
                </router-link>
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