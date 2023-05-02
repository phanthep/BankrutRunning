<template>    
    <div>
        <v-app id="inspire">
            <v-app-bar color="teal-darken-4" image="img/Banner.png">        
                <template v-slot:image>
                <v-img
                    gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
                ></v-img>
                </template>  
                <template v-slot:prepend>                    
                <v-avatar :image="user.pictureUrl" @click.stop="drawer = !drawer"></v-avatar>
                <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
                </template>      
            <v-toolbar-title>Bankrut Beach Running</v-toolbar-title>    
            <v-btn            
                v-for="(item,i) in items"          
                :key="i"
                :icon="item.icon"
                variant="text"
                :href="item.link"
                target="_blank">
            </v-btn>        
            </v-app-bar>   
            <v-main class="bg-grey-lighten-2">                
                <div id="nav" v-show="isLogin">                    
                    <router-link to="/">Home</router-link> |
                    <router-link to="/register">Register</router-link> |
                    <router-link to="/about">About</router-link>
                    <br/>                
                    <h3>สวัสดีคุณ : {{user.userName}}</h3>
                    <!--<img :src="user.pictureUrl" alt="Bankrut Running" class="brand-image img-circle elevation-3" style="opacity: .8; border-radius: 50%">
                    <v-avatar image="user.pictureUrl" size="350"></v-avatar>-->
                </div>
                <router-view></router-view> 
            </v-main>
            <!--<v-navigation-drawer
            v-model="drawer"
            temporary
            >    
                <router-link to="/register"></router-link><v-list-item :to="{ name: 'register'}" prepend-icon="mdi-home" title="Register" value="home"></v-list-item>
                <v-list-item :to="{name: 'about'}" prepend-icon="mdi-account-group-outline" title="about" value="about"></v-list-item>
            </v-navigation-drawer>    
            <v-main class="bg-grey-lighten-2">        
                xxxxxxxxxxx    
            </v-main>-->

            <v-footer app class="bg-indigo-lighten-1 text-center d-flex flex-column">  
                <div class="pt-0">
                    ยินดีต้อนรับ
                </div>                  
                <v-divider></v-divider>                  
            <div>
                {{ new Date().getFullYear() }} — <strong>ชมรมธุรกิจท่องเที่ยวบ้านกรูด</strong>
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