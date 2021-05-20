<template>
<div class="main overflow-hidden" style="background-color:black;">
    <v-carousel
    class="custumCarousel"
    height="100%"
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
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/main/1.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row no-gutters>
            <v-col data-aos="flip-up" class="d-flex justify-center" cols="12">  
              <p class="titleText">ALLGROUND</p>
            </v-col>
            <v-col data-aos-delay="500" data-aos="fade-up" class="d-flex justify-center" cols="12">
              <p class="titleSubText" style="font-family: 'Courgette', cursive;">If you do nothing,<br v-if="this.$vuetify.breakpoint.smAndDown">nothing will happen</p>
            </v-col>
            <v-col data-aos-delay="700" data-aos="fade-up" class="d-flex justify-center" cols="12">
              <v-btn to="/about" class="mt-5" outlined>MORE ABOUT ALLGROUND</v-btn>
            </v-col>
            <v-col data-aos-delay="1000" data-aos="fade-up" class="d-flex justify-center" cols="12">
              <v-icon large>mdi-minus</v-icon>
            </v-col>
            <v-col data-aos-delay="1000" data-aos="fade-up" class="d-flex justify-center" cols="12">
              <p class="subText">스포츠, 그 이상의 가치를 만들고 있습니다.<br></p>
            </v-col>
            <v-col data-aos-delay="1000" data-aos="fade-up" class="d-flex justify-center mt-1" cols="12">
              <p class="subText">스포츠 에이전시, 스포츠 플랫폼, 스포츠 브랜드의 시장 활성화를 통해<br>스포츠산업을 선도하여 선한 영향력을 발휘하겠습니다.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>


    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/main/2.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;">Who We Are</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="subText">올그라운드는 혁신적인 스포츠 패러다임이라는 명목으로
                <br><span class="goaltext">스포츠 산업을 선도하며 가슴이 뛰는 목표를 가지고 있습니다.</span></p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <v-btn large outlined to="/about" elevation="10"><p>About</p></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/main/3.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText"><span style="position:absolute;" class="t"></span>What We Do</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="subText">올그라운드는 ‘스포츠계의 선한 영향력’ 이라는 비전을 실현하기 위해
                <br>스포츠를 사랑하는 당신의 여정을 끝까지 동행하겠습니다.
                </p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <v-btn large outlined to="/service" elevation="10"><p>Service</p></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/main/4.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText"><span style="position:absolute;" class="t"></span>The News</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="subText">올그라운드의 ‘새로운 소식’ 을 전합니다.</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <v-btn large outlined to="/news" elevation="10"><p>News</p></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

      <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/main/5.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText"><span style="position:absolute;" class="t"></span>Contact Us</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="subText">올그라운드는 성공적인 비지니스를 위해 <br v-if="this.$vuetify.breakpoint.smAndDown === true">‘당신의 소중한 의견과 제안’ 을 받습니다. </p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <v-btn large outlined to="/contact" elevation="10"><p>Contact</p></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/main/7.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center justify-center mb-16">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="margin-bottom:5vh;">MOU</p>
            </v-col>
            <v-col cols="12" class="pa-0" style="position:relative;">
              <div @click="dialog=true" style="height:70px; width:100%; position:absolute; left:0; cursor:zoom-in;">
                <div class="d-flex mx-auto" style="height:70px; width:700px; overflow:hidden;">
                    <v-img class="flow" width="70px" height="70px" style="margin: 0 15px;" contain v-for="i in mouImg" :key="i" :src="i"></v-img>
                    <v-img class="flow" width="70px" height="70px" style="margin: 0 15px;" contain v-for="i in mouImg" :key="i" :src="i"></v-img>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>


  </v-carousel>
  <!-- <v-container style="padding-top:70px;">
    <p style="color:white;">메인</p>
  </v-container> -->
      <v-dialog v-model="dialog" width="100%" height="100%">
      <div class="d-flex align-center" style="background-color:rgba(55,100,55,1);">
        <p class="titleSubText">올그라운드와 함께하는 기업</p>
        <v-spacer></v-spacer>
      <v-btn @click="dialog=false" icon>
        <v-icon style="color:white;">mdi-export</v-icon>
      </v-btn>
      </div>
      <v-card class="overflow-hidden" rounded="0" style="position:relative;" color="rgba(255,255,255,1)" elevation="0" width="100%" height="100%">
        <v-row>
          <v-col v-for="i in mouImg" :key="i.title" class="d-flex align-center justify-center" cols="12" sm="12" md="6" lg="6" xl="6">
            <v-card rounded="0"  elevation="0" class="transparent"  height="100px" width="100px"><v-img height="100%" width="100%" contain :src="i.src" ></v-img></v-card>
          </v-col>
        </v-row>
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
      mouImg:[
        // {src:require('@/assets/main/mou/kfa.png'),title:'대한축구협회',link:'https://www.kfa.or.kr/'},
        {src:require('@/assets/main/mou/J&M.png'),title:'J&M 풋볼 매니지먼트',link:''},
        {src:require('@/assets/main/mou/PTA.png'),title:'PTA',link:''},
        {src:require('@/assets/main/mou/라틴아메리카.png'),title:'라틴아메리칸 스포츠 매니지먼트',link:''},
        // {src:require('@/assets/main/mou/비주얼스포츠.png'),title:'비주얼 스포츠',link:'https://www.visualsports.co.kr/'},
        {src:require('@/assets/main/mou/스톤스포츠.png'),title:'스톤 스포츠 매니지먼트',link:'https://www.stonesportsmanagement.co.uk/'},
        {src:require('@/assets/main/mou/카나스포츠.png'),title:'KANA 스프츠협회',link:'https://www.facebook.com/Kana-Acad%C3%A9mie-Jeunesse-Sportive-de-Sanoyah-118049230036779/'},
        {src:require('@/assets/main/mou/킹슬리스포츠.png'),title:'킹슬리 스포츠',link:'https://en.kingsleysports.com/'},
        {src:require('@/assets/main/mou/탈렌티로고.png'),title:'TFG',link:'https://www.talentifuorigioco.it/'},
        // {src:require('@/assets/main/mou/풋볼아웃라인.png'),title:'풋볼아웃라인',link:'https://www.instagram.com/football_outline/?hl=ko'},
      ],
      preloadImg:[
        require('@/assets/main/1.jpg'),
        require('@/assets/main/2.jpg'),
        require('@/assets/main/3.jpg'),
        require('@/assets/main/4.jpg'),
        require('@/assets/main/5.jpg'),
        require('@/assets/main/6.jpg'),
        require('@/assets/main/7.jpg'),
        // require('@/assets/main/mou/kfa.png'),
        require('@/assets/main/mou/J&M.png'),
        require('@/assets/main/mou/PTA.png'),
        require('@/assets/main/mou/라틴아메리카.png'),
        // require('@/assets/main/mou/비주얼스포츠.png'),
        require('@/assets/main/mou/스톤스포츠.png'),
        require('@/assets/main/mou/카나스포츠.png'),
        require('@/assets/main/mou/킹슬리스포츠.png'),
        require('@/assets/main/mou/탈렌티로고.png'),
        // require('@/assets/main/mou/풋볼아웃라인.jpg'),
      ]
    }
  },
  created(){
    this.preload();
  },
  mounted(){
    this.$store.commit('set_showTipMessage',true);
    this.$nextTick(()=>{
      setTimeout( ()=>{bus.$emit('end:loading')},3000 ); // 로딩이 끝났다는걸 알려주기위한 마운트 된 후 비동기처리 셋타이머 ms인자 500때문에 기본딜레이 500잇음 0하면 페이지 마운트후 로딩) //
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
    mobileFlowSlide(){
        switch(this.$vuetify.breakpoint.name){
          case 'xs' : return "80%";
          case 'sm' : return "80%";
          case 'md' : return "70%";
          case 'lg' : return "50%";
          case 'xl' : return "50%";
          default : return "80%";
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
  },
  methods:{
    mouClick(link){
      window.open(link);
    },
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
      if(this.carouselIndex<=5)
      { 
        this.$store.commit('set_showTipMessage',false);
        this.carouselIndex--;
      }
    },
    carouselTouchUp(){
      if(this.areaFocus) return;
      if(this.carouselIndex===5) return; 
      if(this.carouselIndex>=0) 
      {
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
          if(this.carouselIndex!=5)
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
@media (max-width:520px){
  .subText {
    font-size: .7rem;
  }
}
.flow{
  animation: f 30s linear infinite;
}
@keyframes f {
  0%{
    left:0vw;
  }
  100%{
    left:-100%;
  }
}
</style>
