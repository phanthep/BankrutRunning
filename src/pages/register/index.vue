<template>
  <v-container class="bg-blue-grey-lighten-1">
    <h3>ขั้นตอนการลงทะเบียนวิ่ง</h3>
  <v-timeline side="end" align="start">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card>        
        <v-card-title :class="['text-left text-h6', `bg-${item.color}`]">                    
          <v-icon :icon="item.topicId"></v-icon> 
          <v-text class="me-2">{{item.topic}}</v-text>
          <v-avatar :icon="item.done" size="24"></v-avatar>
          <!--<v-avatar color="white" icon="mdi-radiobox-blank" size="22"></v-avatar>-->                    
        </v-card-title>
        <v-card-text class="bg-white">          
          <p>{{item.detail}}</p>
          <div v-show="item.canEdit">
            <router-link :to="item.linkto">
              <v-btn
                :color="item.color"
                variant="outlined">
                แก้ไขข้อมูล
              </v-btn>
            </router-link>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>    
  </v-timeline>
  <div class="text-center">
  <v-card-actions>
    <v-row align="center">
      <v-col>
        <router-link to="/" class="me-4">
        <v-btn append-icon="mdi-home" variant="flat" color="primary">
          กลับหน้าหลัก
        </v-btn></router-link>
        <router-link :to="nextStepLink">
        <v-btn append-icon="mdi-page-next" variant="flat" color="primary">
          ดำเนินการต่อ
        </v-btn></router-link>
      </v-col>
    </v-row>
  </v-card-actions>  
  </div>
  </v-container>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { useRunStore } from '../../stores/run'
  export default {         
    setup() {   
      const run = useRunStore()
      const nextStepLink = ref('/register/registerForm')
        return {
          run, nextStepLink,
          items: [
          {
            color: 'red-lighten-3',
            icon: 'mdi-account-edit',
            topicId: 'mdi-numeric-1-box',
            topic: 'กรอกข้อมูล',
            done: 'mdi-radiobox-blank',
            detail: 'กรุณากรอกข้อมูลของท่านเพื่อเป็นข้อมูลสำหรับลงทะเบียนวิ่ง',
            canEdit:false,
            linkto: '/register/registerForm'
          },
          {
            color: 'teal-lighten-3',
            icon: 'mdi-run-fast',
            topicId: 'mdi-numeric-2-box',
            topic: 'เลือกระยะวิ่ง',
            done: 'mdi-radiobox-blank',
            detail: 'เลือกระยะวิ่งที่ต้องการ',
            canEdit:false,
            linkto: '/register/raceType'
          },
          {
            color: 'yellow-lighten-2',
            icon: 'mdi-tshirt-v-outline',
            topicId: 'mdi-numeric-3-box',
            topic: 'เลือกเสื้อ',
            done: 'mdi-radiobox-blank',
            detail: 'เลือกขนาดและสีเสื้อวิ่ง S, L, XL, XXL, XXXL',
            canEdit:false,
            linkto: '/register/selectShirt'
          },
          {
            color: 'blue-lighten-2',
            icon: 'mdi-currency-usd',
            topicId: 'mdi-numeric-4-box',
            topic: 'ชำระเงิน',
            done: 'mdi-radiobox-blank',
            detail: 'โปรดชำระเงินภายใน 1 วันเพื่อยืนยันการสมัครวิ่ง',
            canEdit:false,
            linkto: '/register/payment'
          },
          {
            color: 'green-lighten-2',
            icon: 'mdi-check-decagram',
            topicId: 'mdi-numeric-5-box',
            topic: 'รอตรวจสอบ',
            done: "mdi-radiobox-blank",
            detail: 'รอเจ้าหน้าที่ตรวจสอบไม่เกิน 3 วันทำการ',
            canEdit:false,
            linkto: '/register/verification'
          }
        ]
      }
    },
    mounted() { 
      let currentStep = this.run.GetStep;
      for (let i = 0; i < currentStep - 1; i++) {
        this.items[i].done = 'mdi-check-circle-outline';        
        this.items[i].canEdit = true;
      }
      
        switch(this.run.GetStep) { 
          case 1: { 
            this.nextStepLink = '/register/registerForm';
              break; 
          } 
          case 2: { 
            this.nextStepLink = '/register/raceType'
              break; 
          } 
          case 3: { 
            this.nextStepLink = '/register/selectShirt'
              break; 
          } 
          case 4: { 
            this.nextStepLink = '/register/payment'
              break; 
          } 
          case 5: { 
            this.nextStepLink = '/register/verification'
              break; 
          } 
          default: { 
            this.nextStepLink = '/register/registerForm';
              break; 
          } 
        }        
    }
  }    
</script>