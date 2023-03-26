<template>
  <div v-show="isLogin">        
        <!--<img src="https://docs.google.com/uc?id=1bfRT8hQhMyGmknQ-S8PHST2CIzf5QmLc" alt="">-->        
        <div class="container-fluid">
        <div class="row">
        </div>        
        <!--<section class="vh-100" style="background-image: url(https://docs.google.com/uc?id=1bfRT8hQhMyGmknQ-S8PHST2CIzf5QmLc)">-->
        <section class="vh-200" style="background-image: url(/img/BankrutProfileImage.jpg)">
            <div class="container py-3 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem; opacity: 0.9;">
                            <div class="card-body p-5">     
                                <div class="text-center">
                                    <img src="/img/RunningLogo.png" alt="Bankrut Running" class="brand-image img-circle elevation-3" style="opacity: .8">
                                    <h2>เมนูลงทะเบียน</h2>
                                </div>
                                <form @submit.prevent="SaveData" id="account" class="was-validated" novalidate>
                                    <hr />     
                                    <div class="d-flex text-center">
                                        <div class="form-check col-6">
                                        <input class="form-check-input" type="radio" id="me" v-model="runner.registerFor" value="me" checked>
                                        <label class="form-check-label" for="idSelf">
                                            <h6>ฉันสมัครเอง</h6>
                                        </label>
                                        </div>  
                                        <div class="form-check col-6">
                                        <input class="form-check-input" type="radio" id="friend" v-model="runner.registerFor" value="friend">
                                        <label class="form-check-label" for="idFriend">
                                            <h6>สมัครให้เพื่อน</h6>
                                        </label>
                                        </div>            
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="runnerName" v-model.trim="runner.name" required>
                                        <label for="runnerName" class="form-label">ชื่อ [ตามหน้าบัตรประจำตัวประชาชน]</label>                                        
                                    </div>
                                    <div class="form-floating">                                        
                                        <input type="text" class="form-control" id="runnerSurname" v-model.trim="runner.surName" required>
                                        <label for="runnerSurname">นามสกุล [ตามหน้าบัตรประจำตัวประชาชน]</label>
                                    </div>
                                    <div class="form-floating">                                        
                                        <input type="text" class="form-control" id="runnerPhoneNo" v-model.trim.number="runner.phoneNo" required>
                                        <label for="runnerPhoneNo">เบอร์โทรศัพท์ [ที่สามารถติดต่อได้]</label>
                                    </div>
                                    <div class="form-floating">                                        
                                        <input type="text" class="form-control" id="nunnerEmail" v-model="runner.email">
                                        <label for="nunnerEmail">อีเมล</label>
                                    </div>
                                    <div class="form-floating">                                        
                                        <select class="form-control" v-model="runner.bloodType" id="nunnerBloodType" required>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>AB</option>
                                            <option>O</option>
                                        </select>
                                        <label for="nunnerBloodType">กรุณาระบุหมู่เลือดของท่าน</label>
                                    </div>
                                    <div class="form-floating">                                        
                                        <input type="text" class="form-control" id="nunnerDisease" v-model="runner.disease">
                                        <label for="nunnerDisease">โรคประจำตัว</label>
                                    </div>
                                    <div class="form-floating">                                        
                                        <input type="text" class="form-control" id="emergencyContactName" v-model="runner.emergencyContactName" required>
                                        <label for="emergencyContactName">ผู้ติดต่อฉุกเฉิน</label>
                                    </div>
                                    <div class="form-floating">                                        
                                        <input type="text" class="form-control" id="emergencyPhoneNo" v-model="runner.emergencyPhoneNo" required>
                                        <label for="emergencyPhoneNo">เบอร์โทรศัพท์ [ที่สามารถติดต่อได้]</label>
                                    </div>
                                    <!--แนบรูปสลิปการโอนชำระเงิน
                                    <div class="form-floating">
                                        <label for="formFile" class="form-label"></label>
                                        <input class="form-control" type="file" id="formFile">
                                    </div>-->
                                    <hr/>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-lg btn-primary"><span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>บันทึก</button>
                                    </div>
                                </form>                                  
                                <div class="text-center">                
                                    <!--<button class="btn btn-lg btn-primary" @click="Save()">บันทึก</button> |
                                    <button class="btn btn-lg btn-primary" @click="GotoDetail()">รายละเอียด</button>
                                    <div>runner for : {{ runner.registerFor }}</div>
                                    <div>runner name : {{ runner.name }}</div>
                                    <div>runner sur-name : {{ runner.surName }}</div>
                                    <div>runner blood-type : {{ runner.bloodType }}</div>
                                    <div>runner disease : {{ runner.disease }}</div>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>          
        </section>
    </div>    
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import liff from "@line/liff";
import { reactive } from 'vue'
import Swal from 'sweetalert2'

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

export default defineComponent({
  data() {
    return {
      runner,
      isLogin: false, 
      message: "",
      error: ""
    };
  },
  mounted() {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
        withLoginOnExternalBrowser: true
      })
      .then(async () => {
        this.message = "LIFF init succeeded.";
        const profile = await liff.getProfile();
        this.runner.pictureUrl = (profile.pictureUrl)? profile.pictureUrl : "";
        this.runner.userId = profile.userId;
        this.runner.userName = profile.displayName;
        this.isLogin = true;
      })
      .catch((e: Error) => {
        this.message = "LIFF init failed.";
        this.error = `${e}`;
      });
  },
  methods:{
    SaveData() {
        if ((runner.name.trim() != "") && (runner.surName.trim() != "")) {
        Swal.fire({
            title: "บันทึกข้อมูลเรียบร้อย<br/>ยินดีต้อนรับ",
            html: 'คุณ: ' + runner.name + ' ' + runner.surName + 
                  '<br/><br/><h3>กรุณาชำระเงินจำนวน 500 บาท</h3>' +
                  '<br/><h5>แล้วส่งรูปสลิบมาที่อีเมล</h5>' +
                  '<br/><h6>BankrutTourismBusinessClub@gmail.com</h6>' +
                  '<br/><h3>ขอบคุณครับ🙏</h3>',
            imageUrl: runner.pictureUrl
          })
          .then(() => {
            liff.closeWindow();
          });
        }
        else {
            Swal.fire({
          title: "ข้อมูลไม่เรียบร้อย!",
          html: 'กรุณาป้อนข้อมูลให้เรียบร้อยก่อนกดปุ่มบันทึก<br/>ขอบคุณครับ🙏',
          imageUrl: "/img/Warning.png"
        });
        }
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

img {
    width:50%;
    border-radius: 50%;
}
</style>