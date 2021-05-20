<template>
<div class="d-flex justify-center align-center" style="height:100vh;">
    <v-container>
        <v-row  v-if="!logged" class="d-flex justify-center">
            <v-col cols="6">
                <v-text-field color="black" v-model="id" hide-details solo label="아이디"></v-text-field>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col v-if="!logged" cols="6">
                <v-text-field  type="password" v-model="password" hide-details solo label="비밀번호"></v-text-field>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" v-if="!logged" align-self="center" cols="6">
              <v-btn  @click="clickLogin">로그인</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" v-if="logged" align-self="center" cols="6">
              <v-btn  @click="clickLogout">로그아웃</v-btn>
            </v-col>
        </v-row>
        
    </v-container>
</div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  mounted() {
    this.$store.commit('set_showTipMessage',false);
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},0 );
    });
  },
  data(){
    return{
      id:'',
      password:'',
    }
  },
  methods:{
    clickLogin(){
      this.$store.dispatch('post_auth_login',{id:this.id,password:this.password});
    },
    clickLogout(){
      this.$store.dispatch('get_auth_logout');
    },
  },
  computed:{
    logged(){
      this.$store.dispatch('get_auth_check');
      return this.$store.state.Auth.logged;
    },
  },
}
</script>

<style scoped>
@import url("../assets/css/unify.css");
</style>