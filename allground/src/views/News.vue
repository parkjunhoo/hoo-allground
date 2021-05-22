<template>
<div class="news overflow-hidden" style="background-color:black;">
    <v-carousel
    class="custumCarousel"
    height="100vh"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-soccer black rounded-xl"
    v-model="carouselIndex"
    :touch="{
    down:this.carouselTouchDown,
    up:this.carouselTouchUp
    }"
    :vertical-delimiters="delimitersLocation"
  >
  <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <div class="scrollDiv black " style="height:100%;">
        <v-img class="d-flex align-center" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/news/3.jpg">
          <v-container class="viewContainer" style="height:fit-content;">
              <v-row>
                  <v-col cols="12">
                      <p class="titleSubText">News</p>
                  </v-col>
              </v-row>
              <v-row class="mt-5" no-gutters>
                  <v-col class="py-5" style="background-color:rgba(255,255,255,.6);" cols="10">
                      <p style="color:black;" class="subText">제목</p>
                  </v-col>
                  <v-col class="py-5" style="background-color:rgba(255,255,255,.6);" cols="2">
                      <p style="color:black;" class="subText">날짜</p>
                  </v-col>
              </v-row>
              <v-row no-gutters v-for="(i,index) in boards" :key="index">
                  <v-col class="py-3" style="background-color:rgba(55,133,55,.6); border-bottom:1px solid rgba(0,0,0,.5);" cols="10">
                      <p @click="clickTitle(index)" style="overflow:hidden; text-overflow: ellipsis; white-space:nowrap;" class="newsSubText">{{i.title}}</p>
                  </v-col>
                  <v-col class="py-3" style="background-color:rgba(55,133,55,.5); border-bottom:1px solid rgba(0,0,0,.5);" cols="2">
                      <p class="newsSubText">{{i.regTime.slice(0,10)}}</p>
                  </v-col>
              </v-row>
          </v-container>
        </v-img>
      </div>
  </v-carousel-item>
</v-carousel>

<v-dialog v-model="dialog" width="100%" height="100%">
  <div class="d-flex align-center" style="position:fixed; z-index:2; background-color:rgba(0,0,0,.8); height:50px; width: calc(100% - 58px);">
    <v-row class="d-flex align-center" no-gutters>
      <v-col cols="12" class="d-flex justify-center">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on" style="z-index:99;" class="newsTitleText">
                {{output.title}}
              </span>
            </template>
            <span>{{output.title}}</span>
          </v-tooltip>
      </v-col>
      <v-col class="d-flex justify-end" style="position:absolute;" cols="12">
        <v-btn @click="dialog=false" icon>
          <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <v-card class="d-flex justify-center" rounded="0" style="position:relative;" color="rgba(255,255,255,1)" elevation="0" width="100%" height="100%">
    <v-card elevation="0" class="d-flex justify-center">
      <v-card style="padding-top:60px; padding-bottom:60px;" elevation="0" :width="newsContainer">
        <TipTapView :output="output"/>
      </v-card>
    </v-card>
  </v-card>
</v-dialog>

</div>
</template>

<script>
import bus from '@/utils/bus.js'
import axios from 'axios'
import TipTapView from '@/components/TipTap/TipTapView.vue'
export default {
  components:{
    TipTapView,
  },
  data(){
    return{
      dialog:false,
      carouselIndex:0,
      scrollReady:2,
      boards:null,
      output:{id:null,title:null,contents:null},
    }
  },
  computed:{
    newsContainer(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '100%';
        case 'sm' : return '100%';
        case 'md' : return '80%';
        case 'lg' : return '50%';
        case 'xl' : return '50%';
        default : return '50%';
      }
    },
  },
  created(){
    // this.preload();
    this.findBoards();
  },
  mounted(){
    
    this.$store.commit('set_showTipMessage',false);
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},1000 ); // 로딩이 끝났다는걸 알려주기위한 마운트 된 후 비동기처리 셋타이머 ms인자 500때문에 기본딜레이 500잇음 0하면 페이지 마운트후 로딩) //
    });
  },
  methods:{
    clickTitle(i){
      this.output.id = this.boards[i]._id;
      this.output.title =  this.boards[i].title;
      this.output.contents = this.boards[i].contents;
      this.dialog=true;
    },
    preload(){
      for(var i = 0; i<this.preloadImg.length; i++)
      {
        var preloadImage = new Image();
        preloadImage.src = this.preloadImg[i]
      }
    },
    findBoards(){
      axios.get('api/board/find')
      .then((res)=>{
        this.boards=res.data;
      })
    },

    moveCarousel(i){
      this.carouselIndex = i;
    },
    carouselTouchDown(){
      if(this.areaFocus) return;
      if(this.carouselIndex===0) return;
      if(this.carouselIndex<=2){
        this.$store.commit('set_showTipMessage',false);
        this.carouselIndex--;
      }
    },
    carouselTouchUp(){
      if(this.areaFocus) return;
      if(this.carouselIndex===2) return; 
      if(this.carouselIndex>=0){
        this.$store.commit('set_showTipMessage',false);
        this.carouselIndex++;
      } 
    },
    carouselScroll(e){
      if(this.scrollReady>0)
      {
        this.$store.commit('set_showTipMessage',false);
        if(e.wheelDelta>0){
          this.carouselIndex--;
          this.scrollReady=0;
        }
        else{
          if(this.carouselIndex!=2)
          {
          this.carouselIndex++;
          this.scrollReady=0;
          }
        }
      }
      else this.scrollReady++;
    },
  }
}
</script>



<style scoped>
@import url("../assets/css/unify.css");
</style>
