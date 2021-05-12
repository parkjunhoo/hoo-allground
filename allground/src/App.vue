<template>
  <v-app>
    <Header/>
    <Drawer/>
    <v-main style="width:100%; height:100%;" class="overflow-hidden">
      <transition style="width:100%; height:100%;" name="slide-fade">
        <router-view style="position:absolute; width:100%; height:100%;"/>
      </transition>
    </v-main>
    <Loading/>
    <TipMessage v-show="showTipMessage"></TipMessage>
  </v-app>
</template>

<script>
import bus from '@/utils/bus.js'
import Loading from '@/components/Loading.vue'
import Drawer from '@/components/Drawer.vue'
import Header from '@/components/Header/Header.vue'
import TipMessage from '@/components/TipMessage.vue'
export default {
  name: 'App',
  components:{
    Header,
    Drawer,
    TipMessage,
    Loading,
  },
  data: () => ({

  }),
  created(){
    bus.$on('start:loading',()=>{this.loading=true; }); // 빈껍떼기 bus.js에 메소드를 심어준다 . ㅇㅅㅇ // 
    bus.$on('end:loading',()=>{this.loading=false}); // 같은 ㅇㅇ  ㅇㅅㅇ //
  },
  beforeDestroy(){ 
    bus.$off('start:loading'); // 빈껍데기 bus.js에 메소드 심은거 빼는거 ㅇㅅㅇ // 
    bus.$off('end:loading');
  },
  computed:{
    showTipMessage(){
      return this.$store.state.showTipMessage;
    },
    loading:{ // 로딩 스토어에서 불러오는거 ㅇㅅㅇ //
      get(){
        return this.$store.state.loading;
      },
      set(bool){
        this.$store.commit('set_loading',bool);
      },
    },
  },
};
</script>

<style scoped>
.v-main{
  background-color: black;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(30px);
  opacity: 0;
}


</style>
