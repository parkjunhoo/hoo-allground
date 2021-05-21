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
    <v-container class="viewContainer d-flex justify-center">
      <v-btn @click="dialog=true">전체보기</v-btn>
    </v-container>
  </v-carousel-item>
</v-carousel>

    <v-dialog v-model="dialog" width="100%" height="100%">
        <div class="d-flex align-center" style="position:fixed; z-index:2; background-color:rgba(0,0,0,.8); height:50px; width: calc(100% - 58px);">
          <v-row class="d-flex align-center" no-gutters>
            <v-col cols="12">
              <p class="newsTitleText mx-auto" v-if="!this.$vuetify.breakpoint.smAndDown">title</p>
              <p class="newsTitleText mx-auto" v-if="this.$vuetify.breakpoint.smAndDown">title</p>
            </v-col>
            <v-col class="d-flex justify-end" style="position:absolute;" cols="12">
              <v-btn @click="dialog=false" icon>
                <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
              </v-btn>
            </v-col>
            <v-col style="position:absolute;" cols="12">
              <a style="z-index:100;" class="ml-5 newsSubText" href="http://www.epnc.co.kr/news/articleView.html?idxno=201905" target="_blank">기사 원문 보기</a>
            </v-col>
          </v-row>
        </div>
        <v-card class="d-flex justify-center" rounded="0" style="position:relative;" color="rgba(255,255,255,1)" elevation="0" width="100%" height="100%">
          <v-card style="padding-top:60px;" elevation="0" :width="newsContainer">
            <TipTapView :input="boards[0].contents"/>
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
      dialog2:false,
      dialog3:false,
      carouselIndex:0,
      scrollReady:2,
      boards:null,
    }
  },
  computed:{

  },
  created(){
    // this.preload();
  },
  mounted(){
    this.findBoards();
    this.$store.commit('set_showTipMessage',true);
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},1000 ); // 로딩이 끝났다는걸 알려주기위한 마운트 된 후 비동기처리 셋타이머 ms인자 500때문에 기본딜레이 500잇음 0하면 페이지 마운트후 로딩) //
    });
  },
  methods:{
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
<style lang="scss">
img{
  max-width: 100% !important;
  height: auto !important;
}

p{
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    font-size:1.2rem;
}
p{
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    font-size:1rem;
}

@media (max-width:1000px){
    h1,h2,h3,h4,h5,h6{
        font-size:1.2rem;
    }
    p{
        font-size:.8rem;
    }
}
@media (max-width:680px){
    h1,h2,h3,h4,h5,h6{
        font-size:1rem;
    }
    p{
        font-size:.75rem;
    }
}
@media (max-width:520px){
    
    h1,h2,h3,h4,h5,h6{
    font-size:1rem;
    }
    p{
        font-size:.7rem;
    }
}

</style>
<style scoped>
@import url("../assets/css/unify.css");



.newsTitleText{
    color:rgba(255,255,255,1);
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    font-size:1.2rem;
}
.newsSubText{
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    font-size:1rem;
}

@media (max-width:1000px){
    .newsTitleText{
        font-size:1.2rem;
    }
    .newsSubText{
        font-size:.8rem;
    }
}
@media (max-width:680px){
    .newsTitleText{
        font-size:1rem;
    }
    .newsSubText{
        font-size:.75rem;
    }
}
@media (max-width:520px){
    
    .newsTitleText{
    font-size:1rem;
    }
    .newsSubText{
        font-size:.7rem;
    }
}

</style>
