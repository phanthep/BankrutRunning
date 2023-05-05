<template>
    <div v-show="true">
        <v-container class="bg-blue-grey-lighten-1">
            <div class="text-center">
                <!--<v-img src="/img/shirt.jpg"></v-img>-->
                <h3>รอเจ้าหน้าที่ตรวจสอบ หากเกิน 3 วันทำการ กรุณาติดต่อได้ที่เบอร์ 099-9999999</h3>
                <br/>
                <router-link to="/register">                    
                    <v-btn append-icon="mdi-page-next">
                        ขั้นตอนทั้งหมด
                    </v-btn>
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
        }
    }
})
</script>