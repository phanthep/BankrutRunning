<template>    
    <div>
        <v-app id="inspire">
            <v-app-bar color="teal-darken-4" image="img/Banner.png">        
                <template v-slot:image>
                <v-img
                gradient="to top right, rgba(2, 56, 110,.8), rgba(204, 249, 255,.8)"
                    
                ></v-img>
                <!--gradient="to top right, rgba(240, 116, 112,.8), rgba(204, 249, 255,.8)"
                    gradient="to top right, rgba(31, 31, 255,.8), rgba(204, 249, 255,.8)"-->
                </template>  
                <template v-slot:prepend>                    
                <v-avatar size="49" :image="user.pictureUrl" @click.stop="drawer = !drawer && isLogin"></v-avatar>
                <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
                </template>      
            <v-toolbar-title>
                <div>
                    <strong>Bankrut Beach Running</strong>
                </div>                
                <div class="pt-0" v-show="isLogin">
                    สวัสดีคุณ : {{user.userName}}
                </div>
            </v-toolbar-title>                            
            <v-btn            
                v-for="(item,i) in items"          
                :key="i"                
                :icon="item.icon"
                variant="text"
                :href="item.link"
                target="_blank">
            </v-btn>        
            </v-app-bar>   
            <v-main class="bg-blue-lighten-4">
                <v-container>
                    <router-view></router-view> 
                </v-container>
            </v-main>
            <v-navigation-drawer v-model="drawer" temporary>      
                <v-list-item :to="{name: 'home'}" prepend-icon="mdi-home" title="หน้าหลัก" value="้home"></v-list-item>
                <v-list-item :to="{name: 'register'}" prepend-icon="mdi-run-fast" title="ลงทะเบียนวิ่ง" value="register"></v-list-item>
                
                <v-divider></v-divider>
                <br/>                
                <v-btn prepend-icon="mdi-exit-run" color="blue-darken-4" @click="CloseApplication">ออกจากโปรแกรม</v-btn>
            </v-navigation-drawer>    
            
            <v-footer app class="bg-blue-lighten-1 text-center d-flex flex-column">  
                <div class="pt-0">                    
                    บ้านกรูด ยินดีต้อนรับ🙏
                </div>                  
                <v-divider></v-divider>
            <div>
                <strong>ชมรมธุรกิจท่องเที่ยวบ้านกรูด (ช.ท.บก.)</strong>
                 <!--<strong>Bankrut Tourism Business Club (B.T.B.C.)</strong>-->
            </div>
            </v-footer>
        </v-app>
    </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import liff from "@line/liff";
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const user = reactive({
    userId: "",
    userName: "?",
    pictureUrl: "/img/RunningLogo.png",     
})

export default defineComponent({
  data() {
    return {
        drawer: true,
        user,
        isLogin: true, 
        message: "",
        error: "",
        items: [
            {
            icon: 'mdi-facebook',
            link: 'https://www.facebook.com/bankruttourism'},
            {
            icon: 'mdi-youtube',
            link: 'https://www.youtube.com/channel/UC1CdH3dPvc3wxd78uzGegMA'
            }
        ]
    };
  },
  methods: {
    CloseApplication() {
        liff.closeWindow();
        window.close();
    }
  },
  mounted() {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
        //withLoginOnExternalBrowser: true
      })
      .then(async () => {
        this.message = "LIFF init succeeded.";
        const profile = await liff.getProfile();
        this.user.pictureUrl = (profile.pictureUrl)? profile.pictureUrl : "";
        this.user.userId = profile.userId;
        this.user.userName = profile.displayName;
        this.isLogin = true;
      })
      .catch((e: Error) => {
        this.message = "LIFF init failed.";
        this.error = `${e}`;
      });
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
</style>