<template>
<div class="d-flex justify-center align-center" style="height:100vh;">
    <v-container>
        <v-row  v-if="!logged" class="d-flex justify-center">
            <v-col cols="5">
                <v-text-field color="black" v-model="id" hide-details solo label="아이디"></v-text-field>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col v-if="!logged" cols="5">
                <v-text-field  :type="false ? 'text' : 'password'" v-model="password" hide-details solo label="비밀번호"></v-text-field>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" v-if="!logged" align-self="center" cols="6">
              <v-btn  @click="clicked">로그인</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" v-if="logged" align-self="center" cols="4">
              <v-btn  @click="clicked2">로그아웃</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" align-self="center" cols="4">
              <v-btn @click="clicked3">로그인상태체크</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" align-self="center" cols="4">
              <v-btn @click="clicked4(true)" v-if="!applyTab">어플라이탭on</v-btn> 
              <v-btn @click="clicked4(false)" v-if="applyTab">어플라이탭off</v-btn>
            </v-col>
        </v-row>
        
    </v-container>
</div>
</template>

<script>
import bus from '@/utils/bus.js'
import axios from 'axios'
export default {
  mounted() {
    this.checkSetting();
    this.checkSession();
    this.$store.commit('set_showTipMessage',false);
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},0 );
    });
  },
  data(){
    return{
      id:'',
      password:'',
      logged:false,
      applyTab:false,
    }
  },
  methods:{
    checkSession(){
      bus.$emit('start:loading');
      axios.get('api/auth/check')
      .then((res)=>{
        if(res.data.success===true) this.logged=true;
        else this.logged=false;
        bus.$emit('end:loading');
      })
    },
    checkSetting(){
      axios.get('api/setting/find')
      .then((res)=>{
        this.applyTab = res.data[0].applyTab;
      })
    },
    clicked(){
      bus.$emit('start:loading');
      axios.post('api/auth/login',{
        id:this.id,
        password:this.password,
      })
      .then((res)=>{
        bus.$emit('end:loading');
        switch(res.data){
          case 'logged_in' : alert('로그인 되었습니다.'); window.location.reload(); break;
        }
      })
    },
    clicked3(){
      bus.$emit('start:loading');
      axios.get('api/auth/check')
      .then((res)=>{
        bus.$emit('end:loading');
        console.log(res.data);
      })
      // axios.post('http://localhost:8002/api/auth/login',{
      //   id:this.id,
      //   password:this.password,
      // })
      // .then((res)=>{
      //   console.log(res.data);
      // })
      // .catch((err)=>
      // {
      //   console.log(err);
      // });
    },
    clicked4(bool){
      if(bool){
        axios.put('api/setting/edit',{
          id:'6099ee9c12ec2fd58286e8d8',
          applyTab:true
        })
        .then(()=>{
          window.location.reload();
        });
      }
      else{
        axios.put('api/setting/edit',{
          id:'6099ee9c12ec2fd58286e8d8',
          applyTab:false
        })
        .then(()=>{
          window.location.reload();
        })
      }
    },
     clicked2(){
    axios.get('api/auth/logout')
    .then((res)=>{
      alert('로그아웃 되었습니다.');
      this.$router.push('/');
      window.location.reload();
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    });
    },
  },
 
}
</script>

<style>

</style>