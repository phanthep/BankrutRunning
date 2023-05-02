<template>
    <div v-show="true">         
        <h2>เมนูลงทะเบียน</h2>
        <!--<v-sheet width="400" class="mx-auto">-->
        <form @submit.prevent="submit">
            <v-container d-flex flex-column>  
                <v-sheet class="mx-auto">              
                    <v-radio-group inline>
                        <v-radio label="ฉันสมัครเอง" v-model="runner.registerFor" value="me"></v-radio>
                        <v-radio label="สมัครให้เพื่อน" v-model="runner.registerFor" value="friend"></v-radio>                    
                    </v-radio-group>                                          
                    <v-text-field
                        v-model.trim="runner.name"
                        :counter="50"
                        :error-messages="name.errorMessage.value"
                        label="ชื่อ [ตามหน้าบัตรประจำตัวประชาชน]">
                    </v-text-field>                    
                    <v-text-field
                        v-model.trim="runner.surName"
                        :counter="50"
                        :error-messages="name.errorMessage.value"
                        label="นามสกุล [ตามหน้าบัตรประจำตัวประชาชน]">
                    </v-text-field>                            
                    <v-text-field
                        v-model="runner.phoneNo"
                        :counter="7"
                        :error-messages="phone.errorMessage.value"
                        label="เบอร์โทรศัพท์ [ที่สามารถติดต่อได้]">
                    </v-text-field>
                    <v-text-field
                        v-model.trim="runner.email"
                        :error-messages="email.errorMessage.value"
                        label="อีเมล (E-mail)">
                    </v-text-field>
                    <v-select
                        v-model="runner.bloodType"
                        :items="items"
                        :error-messages="select.errorMessage.value"
                        label="กรุณาระบุหมู่เลือดของท่าน">
                    </v-select>
                    <v-text-field
                        v-model.trim="runner.disease"
                        :counter="50"
                        :error-messages="name.errorMessage.value"
                        label="โรคประจำตัว">
                    </v-text-field>
                    <v-text-field
                        v-model.trim="runner.emergencyContactName"
                        :counter="50"
                        :error-messages="name.errorMessage.value"
                        label="ผู้ติดต่อฉุกเฉิน">
                    </v-text-field>
                    <v-text-field
                        v-model="runner.emergencyPhoneNo"
                        :counter="7"
                        :error-messages="phone.errorMessage.value"
                        label="เบอร์โทรศัพท์ฉุกเฉิน [ที่สามารถติดต่อได้]">
                    </v-text-field>
                    
                    <v-btn class="me-4" type="submit">submit</v-btn>
                    <v-btn @click="handleReset">clear</v-btn>
                </v-sheet>
            </v-container>
        </form>        
    </div>                                         
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { reactive } from 'vue'
  import { useField, useForm } from 'vee-validate'

  const runner = reactive({
    userId: "",
    userName: "?",
    pictureUrl: "/img/RunningLogo.png", 
    registerFor: 'me',
    name: '',
    surName: '',
    phoneNo: '',
    email: '',
    bloodType: '',
    disease: 'ไม่มี',
    emergencyContactName: '',
    emergencyPhoneNo: ''
    })

  export default {
    setup () {        
      const { handleSubmit, handleReset } = useForm({        
        validationSchema: {
          name (value :any) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
          },
          phone (value :any) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
          },
          email (value :any) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
          },
          select (value :any) {
            if (value) return true

            return 'Select an item.'
          },
          checkbox (value :any) {
            if (value === '1') return true

            return 'Must be checked.'
          },
        },
      })
      const name = useField('name')
      const phone = useField('phone')
      const email = useField('email')
      const select = useField('select')
      const checkbox = useField('checkbox')

      const items = ref(['A', 'B', 'AB', 'O'])

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { runner, name, phone, email, select, checkbox, items, submit, handleReset }
    },
  }
</script>