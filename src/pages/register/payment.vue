<template>
    <div v-show="true">
        <v-container class="bg-blue-grey-lighten-1">
            <div class="text-center">
                <v-img src="/img/payment.jpg"></v-img>
                <h3>หลังจากยืนยันการชำระเงินแล้ว จะไม่สามารถแก้ไขข้อมูลก่อนหน้าได้ กรุณาตรวจสอบความถูกต้องอีกครั้งก่อนยืนยันชำระเงิน</h3>
                <br/>
                <router-link to="/register" class="me-4">
                    <v-btn append-icon="mdi-page-next">
                        ขั้นตอนทั้งหมด
                    </v-btn>
                </router-link>
                <router-link to="/register/verification">
                    <v-btn @click="run.UpdateCurrentStep(5)">ดำเนินการต่อ</v-btn>                
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
            import.meta.env.VITE_RUN_REGISTER_STEP = 'verify';
        }
    }
})
</script>