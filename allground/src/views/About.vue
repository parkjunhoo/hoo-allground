<template>
<div class="about overflow-hidden" style="background-color:black; position:absolute;">
    <v-carousel
    class="custumCarousel"
    height="100vh"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-soccer"
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
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/about/1.png">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="align-center" justify="center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>About Us</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" style="border-radius: 25px 25px 25px 25px; background-color:rgba(25,25,25,.5);" >
              <p class="subText">스포츠의 모든 순간과 함께 하는 올그라운드 입니다.
                <br><br>올그라운드는 혁신적은 스포츠 패러다임이라는 명목으로 스포츠 산업을 선도하며 가슴 뛰는 목표를 가지고 있습니다.
                <br v-if="!this.$vuetify.breakpoint.smAndDown">프로와 아마추어의 벽을 허물어 누구나 동등한 기회를 제공 받을 수 있고, 투명하고 공정한 평가를 위해 서비스를 공급하는 것이 올그라운드의 존재 이유입니다.
                <br><br>노력과 실력을 있는 그대로 평가받을 수 있다는 것은 축복이자 행복입니다.
                <br v-if="!this.$vuetify.breakpoint.smAndDown">올그라운드는 바로 그 행복한 순간들을 만들어가는 회사입니다.
                <br><br>스포츠가 있는 곳이라면 어디든 함께하겠습니다. 스포츠가 있는 곳에는 도전과 열정 그리고 시작이 있기 때문입니다.
                <br v-if="!this.$vuetify.breakpoint.smAndDown">올그라운드는 육하원칙을 따지지 않고 ‘누구든, 언제든, 어디서든, 무엇이든, 어떻게든, 어떤 이유에서든’
                <br><br>스포츠를 사랑하는 당신을 위해 끝까지 동행하겠습니다.
                <br><br>앞으로도 올그라운드는 ‘스포츠계의 선한 영향력’ 이라는 비전을 실현하기 위해 불철주야 달려가겠습니다.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>
    
    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" position="left top" src="@/assets/about/2.png">
        <v-container class="d-flex align-center viewContainer">
          <v-row no-gutters class="align-center justify-center">
            <v-col cols="2" v-if="!this.$vuetify.breakpoint.smAndDown"><v-spacer></v-spacer></v-col>
            <v-col class="d-flex justify-center mb-6 removeMargin" cols="10"> 
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>CEO Greeting</p>
            </v-col>
            <v-col class="d-flex" cols="auto">
              <v-card :width="photoBreakPoint" :height="photoBreakPoint" elevation="0" class="transparent" ><v-img contain src="@/assets/about/대표님.png"></v-img></v-card>
            </v-col>
            <v-col cols="12" sm="12" lg="8" xl="auto" class="d-flex justify-center mt-6 removeMargin">
              <v-card :width="pWitdh" elevation="0" color="rgba(0,0,0,.0">
               <p style="text-align:left;" class="subText">현 시대의 선수들은 좋은팀에서 운동할 권리가 있습니다.
                  <br>하지만, 많은 선수들이 다양한 사회적요소에 의해 입단이 어려운 실정입니다.
                  <br><br>특히 미디어의 상용화가 되지 않은 국내 하부리그의 선수들은 좋은 선수임에도 불구하고 단지 검증되지 않았다는
                  <br v-if="this.$vuetify.breakpoint.smAndDown === false">이유 하나로 좋은팀으로 갈 수 있는 기회를 박탈당하고 있습니다. 이런 어려움을 조금이나마 해결해 주고자
                  <br v-if="this.$vuetify.breakpoint.smAndDown === false">올데이풋볼은 구단과 선수를 최적으로 연결해 주는 플랫폼을 개발, 지속적으로 서비스를 제공하고 있습니다.
                  <br><br>첫 시작 아래 결심한 신념은 "선수들의 의한 선수들을 위한 일" 입니다.
                  <br v-if="this.$vuetify.breakpoint.smAndDown === false">여러분, 설레는 마음으로 올데이풋볼을 방문해 주십시오, 여러분이 어떤 구단을 원하던 그 구단을 올데이풋볼에서
                  <br>쉽고, 즐겁게 찾을 수 있도록 다양한 서비스를 선보이겠습니다.
                  <br><br>여러분이 찾는 구단을 올데이풋볼에서 기다리고 있습니다.
                  <br><span><p class="signText">CEO 이학진</p></span>
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>



    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/about/3.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row no-gutters class="d-flex align-center justify-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;">Mission &amp; Vision</p>
            </v-col>
            <v-col cols="10">
              <v-card class="pa-5 mb-3" color="rgba(55,55,55,.4)">
                <p class="haedText mb-3" style="text-align:center;">VISION</p>
                <v-row>
                  <v-col xl="6" md="6" lg="6" sm="12" cols="12">
                    <p style="text-align:center;" class="titleSubText">선수와 구단이 함께 발전하는 시장의 선순환</p>
                  </v-col>
                  <v-col xl="6" md="6" lg="6" sm="12" cols="12">
                    <p style="text-align:center;" class="titleSubText">축구계의 선한 영향력으로 한국 축구의 발전</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="10">
              <v-card class="pa-5" color="rgba(55,55,55,.4)">
                <p class="haedText mb-3" style="text-align:center; ">MISSION</p>
                <v-row>
                  <v-col cols="6" class="mb">
                    <p style="text-align:center;" class="titleSubText">우리의 일</p>
                    <p style="text-align:center;" class="subText">‘선수의 꿈을 일이 되게하고 구단의 일이 꿈이 되게 하는 것’</p>
                  </v-col>
                  <v-col cols="6" class="mb-3">
                    <p style="text-align:center;" class="titleSubText">우리의 사명</p>
                    <p style="text-align:center;" class="subText">‘좋은 선수와 구단의 연결이며 선수와 구단의 잠재력 개발’</p>
                  </v-col>
                  <v-col cols="6" class="mb-3">
                    <p style="text-align:center;" class="titleSubText">우리의 자산</p>
                    <p style="text-align:center;" class="subText">‘선수, 구단, 기업, 사회에 대한 진정성이며 현재에 대한 집요한 혁신’</p>
                  </v-col>
                  <v-col cols="6" class="mb-3">  
                    <p style="text-align:center;" class="titleSubText">우리의 목표</p>
                    <p style="text-align:center;" class="subText">‘누구나 새로운 기회를 창조할 수 있는 최고의 플랫폼’</p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/about/4.jpg">
        <v-container class="d-flex align-center viewContainer" >
          <v-row class="align-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Four Core Values</p>
            </v-col>
            <v-col xl="6" md="6" lg="6" sm="12" cols="12" >
              <v-card class="d-flex justify-center align-center" :height="fourCoreValuesHeight" color="rgba(0,0,0,.4)"><p class="subText" style="text-align:center;">
                <span class=" titleSubText" >규율위의 자유</span><br><br>우리는 규율 위에 세운 자율적인 문화를 지향합니다.</p></v-card>
            </v-col>
            <v-col xl="6" md="6" lg="6" sm="12" cols="12">
              <v-card class="d-flex justify-center align-center" :height="fourCoreValuesHeight" color="rgba(0,0,0,.4)"><p class="subText" style="text-align:center;">
                <span class=" titleSubText" >스타보다 팀웍</span><br><br>회사란 평범한 사람들이 모여 비범한 성과를 내는 곳!<br>
                천재 한 사람에 의지한 조직이 아닌, 팀웍을 통해 성과를 내는 조직을 지향합니다.</p></v-card>
            </v-col>
            <v-col xl="6" md="6" lg="6" sm="12" cols="12">
              <v-card class="d-flex justify-center align-center" :height="fourCoreValuesHeight" color="rgba(0,0,0,.4)"><p class="subText" style="text-align:center;">
                <span class=" titleSubText" >진지함과 위로</span><br><br>일에 대한 진지함을 잃지 않으면서도, 쉽고 명확하고 위트있게 문제를 풀어나갑니다.</p></v-card>
            </v-col>
            <v-col xl="6" md="6" lg="6" sm="12" cols="12">
              <v-card class="d-flex justify-center align-center" :height="fourCoreValuesHeight" color="rgba(0,0,0,.4)"><p class="subText" style="text-align:center;">
                <span class=" titleSubText" >열심만큼 성과</span><br><br>열심히 하는 것은 중요합니다. 하지만, 성과를내는 것은 더욱 중요합니다.<br>
                과정과 결과는 둘 중 어느 하나만 선택하거나, 우선시할 수 없는 문제입니다.</p></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <!-- <v-carousel-item @mousewheel="carouselScroll" reverse-transition="slide-x-reverse-transition" transition="slide-x-transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.5), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/about/5.jpg">
        <v-container class="d-flex align-center " style="padding-top:70px; height:100%;">
          <v-row class="align-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Team Culture</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>이 부분은 뺏으면 좋겟다싶음.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item> -->


  </v-carousel>
  <!-- <v-container style="padding-top:70px;">
    <p style="color:white;">메인</p>
  </v-container> -->
</div>
</template>

<script>
import bus from '@/utils/bus.js'
export default {
  data(){
    return{
      carouselIndex:0,
      scrollReady:2,
        preloadImg:[
        require('@/assets/about/1.png'),
        require('@/assets/about/2.png'),
        require('@/assets/about/3.jpg'),
        require('@/assets/about/4.jpg'),
        require('@/assets/about/5.jpg'),
        require('@/assets/about/대표님.png'),
        require('@/assets/about/sign.png'),
      ]
    }
  },

  mounted(){
    this.preload();
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
    carouselTouchDown(){
      if(this.areaFocus) return;
      if(this.carouselIndex===0) return;
      if(this.carouselIndex<=3) this.carouselIndex--;
    },
    carouselTouchUp(){
      if(this.areaFocus) return;
      if(this.carouselIndex===3) return; 
      if(this.carouselIndex>=0) this.carouselIndex++;
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
          if(this.carouselIndex!=3)
          {
          this.carouselIndex++;
          this.scrollReady=0;
          }
        }
      }
      else this.scrollReady++;
    },
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
    photoBreakPoint(){
      switch(this.$vuetify.breakpoint.name){
        case'xl': return 400;
        case'lg': return 330;
        case'md': return 270;
        case'sm': return 180;
        case'xs': return 180;
        default : return 180;
      }
    },
    pWitdh(){
      switch(this.$vuetify.breakpoint.name){
        case'xl': return "70%";
        case'lg': return "70%";
        case'md': return "70%";
        case'sm': return "95%";
        case'xs': return "95%";
        default : return "70%";
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
    fourCoreValuesHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return "12vh";
        case 'sm' : return "13vh";
        case 'md' : return "20vh";
        case 'lg' : return "20vh";
        case 'xl' : return "20vh";
        default : return "20vh";
      }
    }
  }
}
</script>

<style scoped>
@import url("../assets/css/unify.css");
.haedText {
  font-family: 'Russo One';
  font-size: 2rem;
}
.titleSubText {
  font-size: 2rem;
  margin-bottom: 10px;
}
.signText{
  font-family: 'East Sea Dokdo', cursive;
  font-size:5.5rem;
  text-align: right;
}
.subText {
  word-spacing: 3px;
}
@media (max-width:1000px){
  .signText{
    font-size:3.7rem;
  }
  .titleSubText {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .subText{
    font-size: 1rem;
  }
  .titleText {
    font-size: 2.6rem;
  }
}
@media (max-width:680px){
  .removeMargin{
    margin:0  !important;
  }
  .signText{
    font-size:2.7rem;
  }
  .titleSubText {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  .titleText {
    font-size: 2.3rem
  }
  .subText{
    font-size: .8rem;
  }
}
@media (max-width:520px){
  .signText{
  font-size:2.2rem;
  }
  .titleSubText {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .haedText {
    font-size: 1.5rem;
  }
  .subText{
    font-size: .8rem;
  }
}
</style>