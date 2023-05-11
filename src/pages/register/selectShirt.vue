<template>
    <div v-show="true">
        <v-container class="bg-blue-grey-lighten-1">
            <div class="text-center">
                <h3>เลือกเสื้อวิ่ง</h3>
                <v-img src="/img/shirt.png"></v-img>
                <br/>
                <router-link class="me-4" to="/register">
                    <v-btn color="blue-darken-4" append-icon="mdi-timeline-check-outline">
                      ขั้นตอนทั้งหมด
                    </v-btn>
                </router-link>
                <router-link to="/register/payment">
                    <v-btn color="blue-darken-4" append-icon="mdi-content-save-move" @click="run.UpdateCurrentStep(4)">ดำเนินการต่อ</v-btn>                
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
            alert(import.meta.env.VITE_RUN_REGISTER_STEP);
            import.meta.env.VITE_RUN_REGISTER_STEP = 'payment';
        }
    }
})
</script>