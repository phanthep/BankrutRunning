<template>
    <div v-show="true">                
        <div class="container-fluid">
        <div class="row">
        </div>
        <br/>
        <div class="text-center">
            <v-img src="/img/Welcome0.png"></v-img>
            <br/>
            <router-link to="/register" class="me-4">                    
                <v-btn append-icon="mdi-timeline-check-outline" color="primary">
                ขั้นตอนทั้งหมด
                </v-btn>
            </router-link>
            <router-link :to="nextStepLink" class="me-4">                    
                <v-btn append-icon="mdi-run-fast" color="primary">
                ลงทะเบียนวิ่ง
                </v-btn>
            </router-link>
            <!--<v-avatar image="/img/BankrutProfileImage.jpg" size="350"></v-avatar>-->            
        </div>
    </div>    
    </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { useRunStore } from '../stores/run'
  export default {         
    setup() {   
      const run = useRunStore()
      const nextStepLink = ref('/register/registerForm')
        return {
            run, nextStepLink          
        }
    },
    mounted() {              
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