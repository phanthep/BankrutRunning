<template>
    <div v-show="true">          
      <!--#385F73-->
      <v-card color="white">
        <v-card-title class="text-h6">
          <h3>กรอกข้อมูลลงทะเบียน</h3>
        </v-card-title>      
        <!--<v-sheet width="400" class="mx-auto">-->
        <form @submit.prevent="submit">
            <!--bg-blue-grey-lighten-1-->
            <v-container class="white">
              <!--<v-row>
                <v-col>
                    <v-radio-group inline>
                      <v-radio label="ฉันสมัครเอง" v-model="runner.registerFor" value="me"></v-radio>
                      <v-radio label="สมัครให้เพื่อน" v-model="runner.registerFor" value="friend"></v-radio>                    
                    </v-radio-group>                                          
                </v-col>
              </v-row>-->
              
                  <v-text-field
                    name="peopleId"
                    class="form-input"
                    v-model.trim="peopleId.value.value"
                    :counter="13"
                    :error-messages="peopleId.errorMessage.value"
                    label="เลขบัตรประจำตัวประชาชน"                        
                ></v-text-field>
              
                  <v-text-field
                    name="name"
                    v-model.trim="name.value.value"
                    color="secondary lighten-4"
                    :counter="50"                    
                    :error-messages="name.errorMessage.value"
                    label="ชื่อ [ตามหน้าบัตรประจำตัวประชาชน]"                        
                ></v-text-field>
              
                  <v-text-field
                    name="surName"
                    v-model.trim="surName.value.value"
                    :counter="50"              
                    :error-messages="surName.errorMessage.value"      
                    label="นามสกุล [ตามหน้าบัตรประจำตัวประชาชน]"                    
                  ></v-text-field>  
              
                    <v-radio-group label="กรุณาระบุเพศของท่าน" inline>
                      <v-radio label="ชาย" v-model="runner.registerFor" value="male"></v-radio>
                      <v-radio label="หญิง" v-model="runner.registerFor" value="female"></v-radio>
                      <v-radio label="อื่นๆ" v-model="runner.registerFor" value="other"></v-radio>
                    </v-radio-group>                                          
                            
                    <v-text-field
                        v-model="phoneNo.value.value"
                        :counter="10"
                        :error-messages="phoneNo.errorMessage.value"
                        label="เบอร์โทรศัพท์ [ที่สามารถติดต่อได้]">
                    </v-text-field>                  
                
                    <v-text-field
                        v-model.trim="email.value.value"
                        placeholder="example@gmail.com"
                        :error-messages="email.errorMessage.value"
                        label="อีเมล (E-mail)">
                    </v-text-field>                  
                
                    <v-select
                        v-model="bloodType.value.value"
                        :items="items"
                        :error-messages="bloodType.errorMessage.value"
                        label="กรุณาระบุหมู่เลือดของท่าน">
                    </v-select>                  

                    <v-text-field
                        v-model.trim="disease.value.value"
                        :counter="50"
                        :error-messages="disease.errorMessage.value"
                        label="โรคประจำตัว">
                    </v-text-field>                                    
                    <v-text-field
                        v-model.trim="emergencyContactName.value.value"
                        :counter="50"
                        :error-messages="emergencyContactName.errorMessage.value"
                        label="ผู้ติดต่อฉุกเฉิน">
                    </v-text-field>                  
                
                    <v-text-field
                        v-model="emergencyPhoneNo.value.value"
                        :counter="10"
                        :error-messages="emergencyPhoneNo.errorMessage.value"
                        label="เบอร์โทรศัพท์ฉุกเฉิน [ที่สามารถติดต่อได้]">
                    </v-text-field>
              <v-row>
                <v-col>                  
                  <router-link class="me-1" to="/register">
                    <v-btn color="blue-darken-4" append-icon="mdi-timeline-check-outline">
                      ขั้นตอนทั้งหมด
                    </v-btn>
                  </router-link>                  
                  <v-btn class="me-1" color="blue-darken-4" append-icon="mdi-content-save-move" @click="handleReset">เริ่มใหม่</v-btn>
                  <!--<v-btn color="blue-darken-4" type="submit" append-icon="mdi-content-save-move">ต่อไป</v-btn>-->
                  <router-link to="/register/raceType">
                    <v-btn color="blue-darken-4" append-icon="mdi-content-save-move" @click="run.UpdateCurrentStep(2)">ต่อไป</v-btn>
                  </router-link>
                  
                </v-col>
              </v-row>              
            </v-container>
          </form>
        </v-card>
    </div>                                         
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { reactive } from 'vue'    
  //import { useLocalStorage } from '@vueuse/core';  
  import { useForm, useField } from 'vee-validate';
  import * as yup from 'yup';
  import { useRunStore } from '../../stores/run'
  import { useRouter } from 'vue-router';      
  export default {
    setup () {       
      const run = useRunStore() 
      const router = useRouter()    

      const schema = yup.object({
        runer: yup.object({
          name: yup.string().required().min(2),
          surName: yup.string().required().min(2),
        })
      });

      const { handleSubmit, handleReset } = useForm({        
        validationSchema: {
          peopleId (value :any) {
            if (value?.length > 12 && /[0-9-]+/.test(value)) return true            
            return 'เลขบัตรประจำตัวประชาชน ไม่ถูกต้อง'
          },
          name (value: any) {
            if (value?.length >= 2) return true            
            return 'กรุณาป้อนชื่อ [ตามหน้าบัตรประจำตัวประชาชน] ให้ถูกต้อง'
          },
          surName (value: any) {
            if (value?.length >= 2) return true            
            return 'กรุณาป้อนนามสกุล [ตามหน้าบัตรประจำตัวประชาชน] ให้ถูกต้อง'
          },
          phoneNo (value :any) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true            
            return 'หมายเลขโทรศัพท์ไม่ถูกต้อง'
          },
          email (value :any) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'E-mail ไม่ถูกต้อง'
          },
          bloodType (value :any) {
            if (value) return true
            return 'กรุณาระบุหมู่เลือดของท่าน.'
          },
          emergencyContactName (value: any) {
            if (value?.length >= 2) return true            
            return 'กรุณาป้อนข้อมูลผู้ติดต่อฉุกเฉินให้ถูกต้อง เพื่อประโยชน์ของท่าน'
          },
          emergencyPhoneNo (value :any) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true            
            return 'หมายเลขโทรศัพท์ฉุกเฉินไม่ถูกต้อง'
          }
          /*checkbox (value :any) {
            if (value === '1') return true

            return 'Must be checked.'
          },*/
        },
      })      

      const initialRunner = {
        registerFor: 'me',
        name: '',
        surName: '',
        phoneNo: '',
        email: '',
        bloodType: '',
        disease: 'ไม่มี',
        emergencyContactName: '',
        emergencyPhoneNo: ''
      }
      const runner = reactive({ ...initialRunner})

      const peopleId = useField('peopleId')
      const name = useField('name')
      const surName = useField('surName')
      const phoneNo = useField('phoneNo');
      const email = useField('email')
      const bloodType = useField('bloodType')
      const disease = useField('disease')      
      const emergencyContactName = useField('emergencyContactName')
      const emergencyPhoneNo = useField('emergencyPhoneNo');

      const items = ref(['A', 'B', 'AB', 'O'])

      const submit = handleSubmit(values => {
        //alert(JSON.stringify(values, null, 2));
        run.UpdateCurrentStep(2);
        router.push({ path: '/register/raceType' });
      })      
      return { router, run, runner, peopleId, name, surName, phoneNo, email, bloodType, disease, emergencyContactName, emergencyPhoneNo,
         items, submit, handleReset }
    },
    method :{
      NextStep() {
        //alert(JSON.stringify(values, null, 2));
        this.run.UpdateCurrentStep(2);
        this.router.push({ path: '/register/raceType' });
      }
    }
  }
</script>