<template>
<div class="abbout scrollDiv" style="background-color:black;">
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
    <!-- <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      >Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="info"
        v-bind="attrs"
        v-on="on"
      >Next slide</v-btn>
    </template> -->
    
    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" position="center bottom" cover src="@/assets/service/1.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Our service</p>
            </v-col>
            <v-col class="d-flex justify-center mb-6" cols="12">
              <p class="subText">올그라운드는 스포츠 산업을 위한 다양한 서비스를 제공합니다.</p>
            </v-col>
            <v-row class="d-flex justify-center align-center">
              <v-col v-for="i in servicesImg" :key="i" class="d-flex justify-center" cols="auto">
                <v-img :width="iconWitdh" contain :src="i"></v-img>
              </v-col>
            </v-row>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" position="center top" cover src="@/assets/service/2.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center" justify="center">

            <v-col class="d-flex justify-center pb-0 mt-2" cols="12">
              <p class="serviceTitle" style="text-align:center;"><span style="position:absolute;" class="t"></span>#1 Main service<br><span class="serviceSubTitle">에이전트 · 매니지먼트 서비스</span></p>
            </v-col>

            <v-col xl="4" md="5" lg="6" sm="12" cols="12" style="text-align: center" class="pb-0">
              <v-col class="d-flex justify-center" cols="12">
                <v-card :width="tableWidth" rounded="0" elevation="0" color="rgba(0,0,0,.0)">
                  <v-card rounded="0" elevation="0" color="rgba(0,0,0,.8)">
                    <p class="titleSubText"><span style="font-weight: 600;">Player Representation</span> </p>
                  </v-card>
                  <v-card class="d-flex align-center justify-center" :height="tableHeight"  rounded="0" elevation="0" color="rgba(0,0,0,.5)">
                    <p class="tableSubText">이적 또는 임대이적
                      <br>연봉협상
                      <br>프로입단
                      <br>법률 · 세무 상담
                    </p>
                  </v-card>
                </v-card>
              </v-col>
              <v-col class="d-flex justify-center" cols="12">
                <v-card :width="tableWidth" rounded="0" elevation="0" color="rgba(0,0,0,.0)">
                  <v-card rounded="0" elevation="0" color="rgba(0,0,0,.8)">
                    <p class="titleSubText"><span style="font-weight: 600;">Club Representation   </span> </p>
                  </v-card>
                  <v-card class="d-flex align-center justify-center" :height="tableHeight" rounded="0" elevation="0" color="rgba(0,0,0,.5)">
                    <p class="tableSubText">선수 영입 요청
                      <br>선수 분석 / 평가 요청
                      <br>투어링 · 매치
                    </p>
                  </v-card>
                </v-card>
              </v-col>
            </v-col>
            <v-col class="d-flex justify-center pt-0" xl="4" md="5" lg="6" sm="12" cols="12">
              <v-card elevation="0" :width="mainServiceImgWidth1" color="rgba(0,0,0,.0)">
                <v-img contain src="@/assets/service/services/service.png"></v-img>
              </v-card>
            </v-col>
            
            <!-- <v-col class="d-flex justify-center" cols="6">
                <v-img height="40vh" width="40vh" contain src="@/assets/service/services/service2.png"></v-img>
            </v-col> -->
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>


    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" position="center top" cover src="@/assets/service/2.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center" justify="center">

            <v-col class="d-flex justify-center" cols="12">
              <p class="serviceTitle" style="text-align:center;"><span style="position:absolute;" class="t"></span>#2 Main service<br><span class="serviceSubTitle">hiple / 온라인 스카우팅 플랫폼</span></p>
            </v-col>

            <v-col xl="+" md="5" lg="5" sm="12" cols="12" class="d-flex justify-center">
              <v-card elevation="0" :width="mainServiceImgWidth2" color="rgba(0,0,0,.0)">
                <v-img contain src="@/assets/service/services/service2.png"></v-img>
              </v-card>
            </v-col>
            <v-col class="justify-center" xl="6" md="6" lg="6" sm="12" cols="12">
                <p class="subText" style="text-align: left">하이플 서비스는 몇번의 클릭으로 스포츠선수 · 클럽 · 에이전트를 상호 연결해주는 플랫폼입니다.<br><br>스포츠 선수들의 자기 PR의 기회를 제공하여 스포츠 시장의 선순환을 일으킵니다.<br><br>자동번역기술, AI 영상 인터뷰 기술을 도입하여 스포츠 선수의 정량 · 정성적인 데이터를 공급합니다.</p>
                <div style="height: 60px" v-if="!this.$vuetify.breakpoint.smAndDown"></div>
                <v-card width="100%" class="d-flex align-center" color="rgba(0,0,0,.0)" elevation="0" v-if="this.$vuetify.breakpoint.smAndDown === false">
                  <v-col class="d-flex justify-center align-center" cols="4">
                    <v-card @click="dialog=true;" :width="imgWidth"><v-img  width="100%" height="100%"  contain src="@/assets/service/services/windowstore.png"></v-img></v-card>
                  </v-col>
                  <v-col class="d-flex justify-center align-center" cols="4">
                    <v-card @click="dialog=true;" :width="imgWidth"><v-img  width="100%" height="100%"  contain src="@/assets/service/services/googlestore.png"></v-img></v-card>
                  </v-col>
                  <v-col class="d-flex justify-center align-center" cols="4">
                    <v-card @click="dialog=true;" :width="imgWidth"><v-img  width="100%" height="100%"  contain src="@/assets/service/services/applestore.png"></v-img></v-card>
                  </v-col>
                </v-card>
            </v-col>
            
            <v-col class="d-flex justify-center mt-5" cols="12" v-if="this.$vuetify.breakpoint.smAndDown">
              <v-card @click="dialog=true" class="mx-auto"><v-img :width="storeWidth" src="@/assets/service/services/windowstore.png"></v-img></v-card>
              <v-card @click="dialog=true" class="mx-auto"><v-img :width="storeWidth" src="@/assets/service/services/googlestore.png"></v-img></v-card>
              <v-card @click="dialog=true" class="mx-auto"><v-img :width="storeWidth" src="@/assets/service/services/applestore.png"></v-img></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>
  </v-carousel>

    <v-dialog v-model="dialog" width="50%" height="100%">
      <div class="d-flex align-center" style="position:fixed; z-index:203; background-color:rgba(0,0,0,.8); height:50px; width:50%;">
        <div style="position:absolute; z-index:204; width:100%; height:100%; top:0;" class="d-flex justify-center align-center">
          <p class="newsTitleText">Coming Soon</p>
        </div>
        <div class="d-flex justify-end align-center" style="position:absolute; z-index:205; width:100%; height:100%; top:0;">
          <v-btn @click="dialog=false" icon>
            <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
          </v-btn>
        </div>
      </div>
      <v-card class="overflow-hidden" rounded="0" style="position:relative; padding-top:60px;" color="rgba(255,255,255,1)" elevation="0" width="100%" height="100%">
        <v-card class="d-flex justify-center py-10"> <p style="color:black;" class="titleSubText">서비스 준비중입니다.</p></v-card>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  data(){
    return{
      dialog:false,
      carouselIndex:0,
      scrollReady:2,
      servicesImg:[
        require('@/assets/service/services/1.png'),
        require('@/assets/service/services/2.png'),
        require('@/assets/service/services/3.png'),
        require('@/assets/service/services/4.png'),
        require('@/assets/service/services/5.png'),
        require('@/assets/service/services/6.png'),
      ],
      preloadImg:[
        require('@/assets/service/1.jpg'),
        require('@/assets/service/2.jpg'),
        require('@/assets/service/services/1.png'),
        require('@/assets/service/services/2.png'),
        require('@/assets/service/services/3.png'),
        require('@/assets/service/services/4.png'),
        require('@/assets/service/services/5.png'),
        require('@/assets/service/services/6.png'),
      ],
    }
  },
  created(){
    this.preload();
  },
  mounted(){
    this.preload();
    this.$store.commit('set_showTipMessage',true);
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},1000 ); // 로딩이 끝났다는걸 알려주기위한 마운트 된 후 비동기처리 셋타이머 ms인자 500때문에 기본딜레이 500잇음 0하면 페이지 마운트후 로딩) //
    });
  },
  computed:{
    Transition(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "slide-y-transition";
        case 'sm' : return "slide-x-transition";
        case 'md' : return "slide-x-transition";
        case 'lg' : return "slide-x-transition";
        case 'xl' : return "slide-x-transition";
        default : return "slide-x-transition";
      }
    },
    reverseTransition(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "slide-y-reverse-transition";
        case 'sm' : return "slide-x-reverse-transition";
        case 'md' : return "slide-x-reverse-transition";
        case 'lg' : return "slide-x-reverse-transition";
        case 'xl' : return "slide-x-reverse-transition";
        default : return "slide-x-reverse-transition";
      }
    },
    imgWidth(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '30vw';
        case 'sm' : return '30vw';
        case 'md' : return '10vw';
        case 'lg' : return '10vw';
        case 'xl' : return '10vw';
        default : return '10vw';
      }
    },
    storeWidth(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '28vw';
        case 'sm' : return '25vw';
        case 'md' : return '8vw';
        case 'lg' : return '8vw';
        case 'xl' : return '8vw';
        default : return '8vw';
      }
    },
    imgHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '30vw';
        case 'sm' : return '30vw';
        case 'md' : return '10vw';
        case 'lg' : return '10vw';
        case 'xl' : return '10vw';
        default : return '10vw';
      }
    },
    iconWitdh(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '110';
        case 'sm' : return '110';
        case 'md' : return '140';
        case 'lg' : return '170';
        case 'xl' : return '170';
        default : return '170';
      }
    },
    tableHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '11vh';
        case 'sm' : return '11vh';
        case 'md' : return '15vh';
        case 'lg' : return '17vh';
        case 'xl' : return '17vh';
        default : return '17vh';
      }
    },
    tableWidth(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '75vw';
        case 'sm' : return '75vw';
        case 'md' : return '75vw';
        case 'lg' : return '75vw';
        case 'xl' : return '75vw';
        default : return '75vw';
      }
    },
    delimitersLocation(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "right";
        case 'sm' : return "right";
        case 'md' : return null;
        case 'lg' : return null;
        case 'xl' : return null;
        default : return null;
      }
    },
    mainServiceImgWidth1(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '230';
        case 'sm' : return '300';
        case 'md' : return '480';
        case 'lg' : return '530';
        case 'xl' : return '630';
        default : return '630';
      }
    },
    mainServiceImgWidth2(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '280';
        case 'sm' : return '300';
        case 'md' : return '480';
        case 'lg' : return '530';
        case 'xl' : return '630';
        default : return '630';
      }
    },
  },
  methods:{

    preload(){
      for(var i = 0; i<this.preloadImg.length; i++)
      {
        var preloadImage = new Image();
        preloadImage.src = this.preloadImg[i]
      }
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
      {
        this.$store.commit('set_showTipMessage',false);
        if(this.carouselIndex>=0) this.carouselIndex++;
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

.serviceTitle {
  font-size: 2.3rem;
  font-family: 'Russo One', sans-serif;
}
.serviceSubTitle {
  font-size: 1.3rem;
  font-family: 'Noto Sans KR';
}
.titleSubText {
  font-size: 1.8rem;
  font-family: 'Noto Sans KR';
  padding: 7px 0;
}
.subText {
  font-size: 1.3rem;
  color: white;
}
@media (max-width:1000px){
  .serviceTitle {
    font-size: 2.3rem;
    font-family: 'Russo One', sans-serif;
  }
  .serviceSubTitle {
    font-size: 1.3rem;
    font-family: 'Noto Sans KR';
  }
  .titleSubText {
    font-size: 1.8rem;
    font-family: 'Noto Sans KR';
    padding: 7px 0;
  }
}
@media (max-width:680px){
  .serviceTitle {
    font-size: 2.3rem;
    font-family: 'Russo One', sans-serif;
  }
  .serviceSubTitle {
    font-size: 1.3rem;
    font-family: 'Noto Sans KR';
  }
  .titleSubText {
    font-size: 1.8rem;
    font-family: 'Noto Sans KR';
    padding: 7px 0;
  }
}
@media (max-width:520px){
  .serviceTitle {
    font-size: 1.6rem;
    font-family: 'Russo One', sans-serif;
  }
  .serviceSubTitle {
    font-size: 1.1rem;
    font-family: 'Noto Sans KR';
  }
  .titleSubText {
    font-size: 1rem;
    font-family: 'Noto Sans KR';
    padding: 7px 0;
  }
  .subText {
    font-size: .9rem;
    color: white;
  }
  .tableSubText {
    font-size: .8rem;
    font-family: 'Noto Sans KR';
  }
}
</style>