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
  <v-container class="viewContainer d-flex justify-center">
    <v-card color="black" :width="newsPageContainer" style="padding-bottom:10vh;">
      <v-row style="position:relative;" class="fill-height" no-gutters>
        <v-col class="mt-5 d-flex justify-center" cols="12">
          <p class="titleSubText">축구선수를 위한 '올데이풋볼', 
          <br v-if="this.$vuetify.breakpoint.smAndDown">온라인 축구 스카우팅 서비스 출시
          </p>
        </v-col>
        <v-col style="position:absolute;" class="d-flex justify-end mt-16" cols="12">
          <p class="newsSubText">2021.02.23</p>
        </v-col>
        <v-col cols="12">
          <v-card elevation="0" color="transparent">
            <v-img class="mx-auto" height="50vh" contain src="https://cdn.epnc.co.kr/news/photo/202102/201905_201769_347.jpg"></v-img>
            <p style="text-align:left;" class="newSubText mt-10">
            현재 베타서비스를 운영중인 축구선수 스카우팅 플랫폼 ‘올데이풋볼’이 오는 3월 8일 
            <br>공식 서비스를 오픈한다고 밝혔다.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-center mt-5">
          <v-btn @click="dialog=true" color="grey darken-2"><v-icon>mdi-plus</v-icon>전체보기</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</v-carousel-item>

<v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
  <v-container class="viewContainer d-flex justify-center">
    <v-card color="black" :width="newsPageContainer" style="padding-bottom:10vh;">
      <v-row style="position:relative;" class="fill-height" no-gutters>
        <v-col class="mt-5 d-flex justify-center" cols="12">
          <p class="titleSubText">EY한영 임직원 107명, 
          <br v-if="this.$vuetify.breakpoint.smAndDown">창업 꿈나무 위해 재능기부
          </p>
        </v-col>
        <v-col style="position:absolute;" class="d-flex justify-end mt-16" cols="12">
          <p class="newsSubText">2021.04.22</p>
        </v-col>
        <v-col cols="12">
          <v-card elevation="0" color="transparent">
            <v-img class="mx-auto" height="50vh" contain src="https://image.newsis.com/2021/04/22/NISI20210422_0000731946_web.jpg?rnd=20210422101900"></v-img>
            <p style="text-align:left;" class="newSubText mt-10">
            글로벌 회계·컨설팅 법인 EY한영의 임직원 107명이 미래의 창업 꿈나무와 컨설턴트 지망생들을 위한 재능기부를 실천했다.
            <br>이번 대회는 코로나19 감염 위험을 최소화하기 위해 전체 비대면으로 진행됐다.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-center mt-5">
          <v-btn @click="dialog2=true" color="grey darken-2"><v-icon>mdi-plus</v-icon>전체보기</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</v-carousel-item>

<v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
  <v-container class="viewContainer d-flex justify-center">
    <v-card color="black" :width="newsPageContainer" style="padding-bottom:10vh;">
      <v-row style="position:relative;" class="fill-height" no-gutters>
        <v-col class="mt-5 d-flex justify-center" cols="12">
          <p class="titleSubText">세종대 캠퍼스타운, 창업경진대회 진행
          </p>
        </v-col>
        <v-col style="position:absolute;" class="d-flex justify-end mt-16" cols="12">
          <p class="newsSubText">2021.05.01</p>
        </v-col>
        <v-col cols="12">
          <v-card elevation="0" color="transparent">
            <v-img class="mx-auto" height="50vh" contain src="http://www.sejongpr.ac.kr/dataview/sejong_pr/temp/DEI20210503090556.jpg"></v-img>
            <p style="text-align:left;" class="newSubText mt-10">
            세종대학교(총장 배덕효) 캠퍼스타운은 4월 14일 집현관 소회의실에서 창업경진대회를 진행했다.
            <br>대회는 총 60여 팀이 신청서를 제출했다. 1차 서류 심사는 창업 전문가 5인이 창의성, 고용 연계성 등의 기준에 따라 심사했고, 심사결과 총 6개 팀이 선정됐다.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-center mt-5">
          <v-btn @click="dialog3=true" color="grey darken-2"><v-icon>mdi-plus</v-icon>전체보기</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</v-carousel-item>

  </v-carousel>

    <v-dialog v-model="dialog" width="100%" height="100%">
        <div class="d-flex align-center" style="position:fixed; z-index:2; background-color:rgba(0,0,0,.8); height:50px; width: calc(100% - 58px);">
          <v-row class="d-flex align-center" no-gutters>
            <v-col cols="12">
              <p class="newsTitleText mx-auto" v-if="!this.$vuetify.breakpoint.smAndDown">축구선수를 위한 ‘올데이풋볼’, 온라인 축구 스카우팅 서비스 출시</p>
              <p class="newsTitleText mx-auto" v-if="this.$vuetify.breakpoint.smAndDown">기사내용</p>
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
          <v-card elevation="0" :width="newsContainer">
            <p class="newsSubText pa-16" style="color:black; text-align:left;">
              <v-img  :height="newsImgHeight" contain src="https://cdn.epnc.co.kr/news/photo/202102/201905_201768_319.jpg"></v-img>
              [테크월드뉴스=방제일 기자] 현재 베타서비스를 운영중인 축구선수 스카우팅 플랫폼 ‘올데이풋볼’이 오는 3월 8일 공식 서비스를 오픈한다고 밝혔다.
              <br><br>
              올데이풋볼은 축구선수들의 프로필, 경기영상, 구단의 모집공고 등의 정보를 온라인으로 공유하여 선수·구단·에이전트를 상호 연결하는 스카우팅 서비스다.
              <br><br>
              기존의 축구 시장은 이름을 알린 소수의 선수들에게는 자연스레 많은 에이전트들의 접촉이 이루어지고 그에 따라 보다 나은 환경으로 이적과 진학이 당연시되지만, 대다수의 일반적인 선수들에게는 꿈으로만 머무르게 되는 것이 현실이다.
              <br><br>
              하지만 올데이풋볼의 서비스는 축구선수라면 나이와 실력을 불문하고 누구나 본인의 프로필을 등록하여 전세계에 자신을 알릴 수 있는 동등한 기회를 제공받을 수 있으며, COVID19로 인해 침체된 축구 이적시장을 비대면으로 해소할 수 있는 것이 특장점이다.
              <br><br>
              이들은 현재 유럽, 아프리카, 남아메리카 측 에이전트들과 협의중에 있으며, 해외 선수들의 관심 대상으로 떠오르고 있다. 또한, 이를 위해 국문에서 영문으로 자동 번역이 가능한 번역기술을 도입하였고 향후 독일어, 스페인어, 이탈리아어, 중국어 등 다양한 언어로의 자동 번역 시스템이 확대될 예정이다.
              <br><br>
              <v-img :height="newsImgHeight" contain src="https://cdn.epnc.co.kr/news/photo/202102/201905_201769_347.jpg"></v-img>
              대한축구협회 중개인이자 올데이풋볼 대표 이학진은 “선수 생활시절 축구만 열심히 하면 당연히 좋은 선수로서 좋은 팀에 진출할 수 있을 줄 알았지만
              <br>
              노력과 실력의 별개로 하부 리그에 주어지는 관심도는 너무나도 저조했고, 결과적으로 환경적인 요소들이 문제가 된다는 것을 깨달았다.
              <br>
              따라서, 이적과 진학을 하기 위한 정보의 비대칭과 언어적 제한점으로 인해 어려움을 겪는 선수들을 돕는 것을 최우선적으로
              <br>생각을 하며 이를 토대로 구단·에이전트와 협업 관계를 통해 궁극적으로 한국 축구 발전을 기대한다”고 표명했다.
              <br><br>
              한편, 올데이풋볼은 수차례 테스트를 통해 취합한 정보를 반영하여 다양한 선수들의 정보를 등록하는 것에 집중하는 등 서비스의 완성도를 높이기 위해 박차를 가하고 있다.
              <br><br>
              올데이풋볼 서비스와 관련된 자세한 정보와 상담 및 제휴 문의 등은 웹사이트를 통해 확인할 수 있다.
              <br><br><br><br>
            </p>
          </v-card>
        </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" width="100%" height="100%">
        <div class="d-flex align-center" style="position:fixed; z-index:2; background-color:rgba(0,0,0,.8); height:50px; width: calc(100% - 58px);">
          <v-row class="d-flex align-center" no-gutters>
            <v-col cols="12">
              <p class="newsTitleText mx-auto" v-if="!this.$vuetify.breakpoint.smAndDown">EY한영 임직원 107명, 창업 꿈나무 위해 재능기부</p>
              <p class="newsTitleText mx-auto" v-if="this.$vuetify.breakpoint.smAndDown">기사내용</p>
            </v-col>
            <v-col class="d-flex justify-end" style="position:absolute;" cols="12">
              <v-btn @click="dialog2=false" icon>
                <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
              </v-btn>
            </v-col>
            <v-col style="position:absolute;" cols="12">
              <a style="z-index:100;" class="ml-5 newsSubText" href="https://newsis.com/view/?id=NISX20210422_0001415879&cID=10401&pID=10400" target="_blank">기사 원문 보기</a>
            </v-col>
          </v-row>
        </div>
        <v-card class="d-flex justify-center" rounded="0" style="position:relative;" color="rgba(255,255,255,1)" elevation="0" width="100%" height="100%">
          <v-card elevation="0" :width="newsContainer">
            <p class="newsSubText pa-16" style="color:black; text-align:left;">
              <v-img  :height="newsImgHeight" contain src="https://image.newsis.com/2021/04/22/NISI20210422_0000731946_web.jpg?rnd=20210422101900"></v-img>
                [서울=뉴시스] 류병화 기자 = 글로벌 회계·컨설팅 법인 EY한영의 임직원 107명이 미래의 창업 꿈나무와 컨설턴트 지망생들을 위한 재능기부를 실천했다. 
                <br>이번 대회는 코로나19 감염 위험을 최소화하기 위해 전체 비대면으로 진행됐다.
                <br><br>
                EY한영은 대학생 대상 사업계획 경연대회인 'EY한영-JA 그로쓰 투 프로페셔널'을 마무리했다고 22일 밝혔다. 
                <br>그로쓰 투 프로페셔널은 미래 세대인 대학생들이 향후 전문가로 성장할 수 있도록 지원하는 것을 목표로 기획됐다.
                <br><br>
                그로쓰 투 프로페셔널은 학생들에게 비즈니스 노하우와 기술을 습득할 기회와 EY한영 현직 컨설턴트와 재무 자문 전문가들로부터 멘토링을 받을 수 있는 기회를 제공한다. 
                <br>글로벌 비영리 청소년 교육 단체인 JA코리아가 대회를 공동 주최했다.
                <br><br>
                이번 대회에는 2년 전 열린 대회 대비 2배 많은 학생들이 참여했다. 
                <br>EY한영은 더 많은 학생들에게 기회를 제공하기 위해 참가 가능 규모를 기존 30명에서 60명으로 확대했다.
                <br> 36개 대학교에 재학중인 학생 60명이 3대 1의 경쟁률을 뚫고 최종 합격했다.
                <br><br>
                참가 학생들은 약 3주간 다양한 프로그램을 소화했다.
                <br>특히 컨설턴트 업무 소개, 산업 트렌드에 대한 이해, 사업계획서 작성 방법, 프레젠테이션 기술 등 강의를 이수했다.
                <br><br>
                또 조별로 나뉘어 EY한영 현직 컨설턴트, 재무자문 전문가들과 한 팀이 돼 사업을 기획하는 프로젝트를 진행하고 이를 조별로 발표했다.
                <br>이 과정에서 107명의 EY한영 임직원들이 학생 멘토, 강사 등으로 참여하며 재능 기부를 실천했다.
                <br><br>
                올해 사업계획 발표 주제는 ▲디지털(4차 산업혁명) ▲코로나19 ▲ESG(환경·사회·지배구조) 등이었다.
                <br><br>
                발표대회 최우수상은 세제 등 가정 생활용품의 내용물만 리필해주는 서비스를 제안한 '쏙(SOK) 딜리버리' 팀에게 돌아갔다. 생활용품의 용기는 교체하지 않고 계속 활용하면서 내용물만 리필해주는 서비스로, '제로 웨이스트' 트렌드를 사업 모델로 발전시켰다는 평가를 받았다. 해당 팀은 상금 총 120만원을 받았다.
                <br><br><br><br>
            </p>
          </v-card>
        </v-card>
    </v-dialog>

    <v-dialog v-model="dialog3" width="100%" height="100%">
        <div class="d-flex align-center" style="position:fixed; z-index:2; background-color:rgba(0,0,0,.8); height:50px; width: calc(100% - 58px);">
          <v-row class="d-flex align-center" no-gutters>
            <v-col cols="12">
              <p class="newsTitleText mx-auto" v-if="!this.$vuetify.breakpoint.smAndDown">세종대 캠퍼스타운, 창업경진대회 진행</p>
              <p class="newsTitleText mx-auto" v-if="this.$vuetify.breakpoint.smAndDown">기사내용</p>
            </v-col>
            <v-col class="d-flex justify-end" style="position:absolute;" cols="12">
              <v-btn @click="dialog3=false" icon>
                <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
              </v-btn>
            </v-col>
            <v-col style="position:absolute;" cols="12">
              <a style="z-index:100;" class="ml-5 newsSubText" href="http://www.sejongpr.ac.kr/sejongnewspaperview.do?currentPage=1&searchField=&searchValue=%EC%BA%A0%ED%8D%BC%EC%8A%A4%ED%83%80%EC%9A%B4&boardType=4&pkid=29076" target="_blank">기사 원문 보기</a>
            </v-col>
          </v-row>
        </div>
        <v-card class="d-flex justify-center" rounded="0" style="position:relative;" color="rgba(255,255,255,1)" elevation="0" width="100%" height="100%">
          <v-card elevation="0" :width="newsContainer">
            <p class="newsSubText pa-16" style="color:black; text-align:left;">
              <v-img  :height="newsImgHeight" contain src="http://www.sejongpr.ac.kr/dataview/sejong_pr/temp/DEI20210503090556.jpg"></v-img>
              세종대학교(총장 배덕효) 캠퍼스타운은 4월 14일 집현관 소회의실에서 창업경진대회를 진행했다.
              <br><br>
              이번 대회는 창업지원 공간과 지원금 등을 제공하여 창업의 저변확대를 위해 마련됐다.
              <br>대회는 총 60여 팀이 신청서를 제출했다. 1차 서류 심사는 창업 전문가 5인이 창의성, 고용 연계성 등의 기준에 따라 심사했고,
              <br> 심사결과 총 6개 팀이 선정됐다.
              <br><br>
              대회 당일에는 1차 심사를 통과한 6개팀의 2차 발표 심사가 진행됐다.
              <br> 발표 팀들은 약 10분 동안 사업 계획을 소개하고 심사위원 질의에 답변했다.
              <br>
              최종 수상자는 ‘주간감성’, ‘인졀미’, 그리고 ‘올데이풋볼’ 팀이 선정됐다. 
              <br>
              ‘주간감성’은 세종대 졸업생 조민지 대표와 재학생으로 구성된 팀이다. 
              <br>팀은 아트 전통주를 월간 구독할 수 있는 플랫폼을 만들었다. ‘인졀미’ 팀은 문지명 대표가 비대면 AI로 비만을 해결하는 게임 우주두잇을 개발했다.
              <br>
              ‘올데이풋볼’ 팀은 이학진 대표와 팀원 모두 세종대 재학생으로 구성됐다. 축구 선수들의 경기 영상과 프로필 정보를 구단과 에이전시에 제공하는 플랫폼을 개발했다.
              <br>
              수상한 3개 팀은 창업지원금 각 100만 원을 받게 된다. 이외에도 창업활동비로 한 달에 50만 원씩 1년간 총 600만 원을 지원받는다.
              <br><br>
              이학진(체육학과·14학번) 학생은 “개발한 서비스는 스포츠계의 정보 비대칭을 해소하고 모든 선수에게 동등한 기회를 제공하기 위해 만들었다. 
              <br>현재에 안주하지 않고 서비스를 더욱 발전시켜 축구계에 선한 영향력을 발휘하고 싶다”라고 말했다.
              <br><br><br><br>
            </p>
          </v-card>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import bus from '@/utils/bus.js'
import axios from 'axios'
export default {
  data(){
    return{
      dialog:false,
      dialog2:false,
      dialog3:false,
      carouselIndex:0,
      scrollReady:2,
      boards:[],
      fourBoards:[],
        preloadImg:[
        require('@/assets/notice/1.jpg'),
      ],
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
    newsPageContainer(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '100%';
        case 'sm' : return '100%';
        case 'md' : return '70%';
        case 'lg' : return '50%';
        case 'xl' : return '50%';
        default : return '50%';
      }
    },
    newsImgHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '200px';
        case 'sm' : return '200px';
        case 'md' : return '300px';
        case 'lg' : return '400px';
        case 'xl' : return '500px';
        default : return '500px';
      }
    },
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
  created(){
    this.preload();
  },
  mounted(){
    // this.findBoards();
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
        this.fourBoards=this.boards.slice(0,4);
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
