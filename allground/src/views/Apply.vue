<template>
<div class="main overflow-hidden apply" style="background-color:black;">
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
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/apply/1.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>With Us</p>
            </v-col>
            <v-col cols="12">
              <p class="subText">저희 올그라운드와 함께 하실 인재를 모집합니다.</p>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn @click="carouselIndex=1" large outlined elevation="10"><p style="width:100px" class="">마켓팅팀</p></v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn @click="carouselIndex=2" large outlined elevation="10"><p style="width:100px" class="">디자인팀</p></v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-btn @click="carouselIndex=3" large outlined elevation="10"><p style="width:100px" class="">개발팀</p></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/apply/2.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Marketing Team</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
               <v-tabs style="border-radius: 100px 100px 0 0;" fixed-tabs hide-slider background-color="rgba(55,55,55,.4)" color="green">
                    <!-- 탭부분 -->
                    <v-tab>
                      <p class="ma-0 tabtext"> <v-icon>mdi-account-tie</v-icon><br>당담업무</p>
                    </v-tab>
                    <v-tab>
                      <p  class="ma-0 tabtext"><v-icon>mdi-badge-account-horizontal</v-icon><br>자격요건</p>
                    </v-tab>
                    <v-tab>
                      <p  class="ma-0 tabtext"><v-icon>mdi-account-group</v-icon><br>근무환경</p>
                    </v-tab>
                    <!-- 탭부분 -->

                    <!-- 탭 아이템 -->
                    <v-tab-item transition="scroll-y-transition">
                        <v-row class="d-flex justify-center">
                            <v-col cols="12">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 주요 업무 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>올그라운드 브랜드를 위한 전반적인 업무</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>고객 유치를 위한 온/오프라인 홍보 활동</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>고객과의 커뮤니케이션 활동</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>사업의 글로벌화를 위한 활동</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>시장조사 및 경쟁사 분석</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>투자 및 매출에 대한 관리</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>

                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 우대 사항 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>SNS 마켓팅 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>영어/중국어 등 외국어 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>데이터 기반 애널리스트 업무 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>커뮤니케이션 능력</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>


                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 근무 환경 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>협의 후 결정</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>
                    <!-- 탭 아이템 -->

                  </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/apply/3.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Design Team</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
               <v-tabs style="border-radius: 100px 100px 0 0;" fixed-tabs hide-slider background-color="rgba(55,55,55,.4)" color="green">
                    <!-- 탭부분 -->
                    <v-tab>
                      <p class="ma-0 tabtext"> <v-icon>mdi-account-tie</v-icon><br>당담업무</p>
                    </v-tab>
                    <v-tab>
                      <p  class="ma-0 tabtext"><v-icon>mdi-badge-account-horizontal</v-icon><br>자격요건</p>
                    </v-tab>
                    <v-tab>
                      <p  class="ma-0 tabtext"><v-icon>mdi-account-group</v-icon><br>근무환경</p>
                    </v-tab>
                    <!-- 탭부분 -->

                    <!-- 탭 아이템 -->


                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 주요 업무 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>브랜드에 필요한 전반적인 디자인 업무</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>웹페이지·어플리케이션의 UX·UI 디자인</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>

                    
                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 우대 사항 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>포토샵·일러스트 활용 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>동영상 편집 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>HTML·CSS에 대한 이해도를 겸비하신분</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>

                    
                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 근무 환경 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>협의 후 결정</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>
                    <!-- 탭 아이템 -->

                  </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/apply/4.jpg">
        <v-container class="d-flex align-center viewContainer">
          <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Development Team</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
               <v-tabs style="border-radius: 100px 100px 0 0;" fixed-tabs hide-slider background-color="rgba(55,55,55,.4)" color="green">
                    <!-- 탭부분 -->
                    <v-tab>
                      <p class="ma-0 tabtext"> <v-icon>mdi-account-tie</v-icon><br>당담업무</p>
                    </v-tab>
                    <v-tab>
                      <p  class="ma-0 tabtext"><v-icon>mdi-badge-account-horizontal</v-icon><br>자격요건</p>
                    </v-tab>
                    <v-tab>
                      <p  class="ma-0 tabtext"><v-icon>mdi-account-group</v-icon><br>근무환경</p>
                    </v-tab>
                    <!-- 탭부분 -->

                    <!-- 탭 아이템 -->

                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 주요 업무 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>자사의 웹·어플리케이션 서버 구축 및 유지보수</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>기업의 정보자산 보호를 위한 보안</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>이미지프로세싱 기반 데이터 수집·제공</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>자사에 필요한 기술력 구현</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>

                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 우대 사항 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>웹·모바일 어플 개발자 경력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>OpenCv/YOLO 기반 이미지 프로세싱 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>데이터 베이스 관리 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>머신러닝·AI 기술 개발 능력</p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>정보보안 관련 능력</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>


                    <v-tab-item transition="scroll-y-transition">
                          <v-row class="d-flex justify-center">
                            <v-col cols="12" class="d-flex align-center justify-center">
                              <v-card height="50vh" class="transparent d-flex align-center justify-center" outlined>
                                <div>
                                <p class="subText"><v-icon class="subText">mdi-check-bold</v-icon> 근무 환경 </p>
                                <p class="subText"><v-icon class="subText">mdi-circle-small</v-icon>협의 후 결정</p>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                    </v-tab-item>
                    <!-- 탭 아이템 -->

                  </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>


    <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/contact/2.jpg">
        <v-container class="d-flex align-start viewContainer">
          <v-row  class="d-flex justify-center">
            <v-col v-if="!this.$vuetify.breakpoint.smAndDown" class="d-flex justify-center" cols="12">
              <p class="titleText ma-0" style="text-align:center;"><span style="position:absolute;" class="t"></span>Apply Mail</p>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" >
              <v-container class="overflow-hidden">
                <v-card elevation="0" ref="form" class="transparent">
                  <v-row>
                    <v-col class="mx-auto"  cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-select ref="team" item-color="black" color="black" v-model="team" :items="selectionTeam" label="지원부서 선택" solo :rules="[rules.requireds]"></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto"  cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-text-field ref="title" solo placeholder="제목" v-model="title" :rules="[rules.required]"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto" cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-text-field ref="phone"  solo placeholder="연락처" v-model="phone" :rules="[rules.required]"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto"  cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-text-field ref="email"  solo placeholder="e-mail" v-model="email" :rules="[rules.required, rules.email]"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto"  cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-textarea @focusout="areaFocus=false;" @focus="typing" ref="contents"  height="75" solo placeholder="내용" v-model="contents" :rules="[rules.required]"></v-textarea>
                      <v-btn style="width:100%" outlined color="white" @click="submit"><p>메일 보내기</p></v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>


  </v-carousel>
  <!-- 메일보내기전 캡챠  ㅇㅅㅇ -->
    <v-dialog
      v-model="dialog"
      persistent
      width="50vw"
    >
      <v-card class="yellow darken-3" elevation="0" width="50vw">
        <p style="text-align:center">정답을 골라주세요!!</p>
        <p style="text-align:center">{{q0}} + {{q1}} = ???</p>

        <v-card class="pa-0 ma-0" elevation="0">
          <v-row no-gutters>
            <v-col cols="5">
              <input type="text">
            </v-col>
          </v-row>

          <v-row class="pa-5" no-gutters>
            <v-col v-for="i in b" :key="i.index" class="d-flex justify-center mb-3" cols="12" sm="12" md="3" lg="3" xl="3">
              <v-btn @click="btnClick(i.r)" color="green">{{i.n}}</v-btn>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" sm="12" md="3" lg="3" xl="3">
              <v-btn color="red" @click="dialog=false;">닫기</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-dialog>
<!-- 메일보내기전 캡챠  ㅇㅅㅇ -->
</div>
</template>

<script>
import emailjs from 'emailjs-com';
import bus from '@/utils/bus.js'
export default {
  data(){
    return{
      areaFocus:false,
      preloadImg:[
        require('@/assets/apply/1.jpg'),
        require('@/assets/apply/2.jpg'),
        require('@/assets/apply/3.jpg'),
        require('@/assets/apply/4.jpg'),
      ],
      carouselIndex:0,
      scrollReady:2,
      selectionTeam:['마켓팅팀','디자인팀','개발팀'],


      // 캡챠 관련 변수들 ㅇㅅㅇ //
      q0:0,
      q1:0,

      b:[
      {n:0,r:false},
      {n:0,r:false},
      {n:0,r:false},
      ],

      dialog: false,
      // 캡챠 관련 변수들 ㅇㅅㅇ //

      // 이메일 보내기 관련 변수들 ㅇㅅㅇ //
      title:null,
      email:null,
      contents:null,
      phone:null,
      team:null,
      formHasErrors: false,
      rules: {
        required: value => !!value || '입력이 필요합니다.',
        requireds: value => !!value || '지원부서 선택이 필요합니다.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '올바른 이메일 형식이 아닙니다.'
        },
      },
       // 이메일 보내기 관련 변수들 ㅇㅅㅇ //

    }
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
    mapHeight(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' :return '90vw'
        case 'sm' :return '90vw'
        case 'md': return '40vw'
        case 'lg': return '40vw'
        case 'xl': return '40vw'
        default: return '40vw'
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
        // 랜덤값 받아오는 애들 ㅇㅅㅇ //
    r0(){    
      return Math.floor(Math.random()*(3))+1;
    },
    r1(){
      return Math.floor(Math.random()*(10))+1;
    },
    r2(){
      return Math.floor(Math.random()*(10))+1;
    },
    answer(){ //캡챠의 정답값 // 
      return Math.floor(Math.random()*(20))+1;
    },
    // 랜덤값 받아오는 애들 ㅇㅅㅇ //
        form(){ //  메일보낼때 form   //
      return{
        team: this.team,
        title: this.title,
        email: this.email,
        phone: this.phone,
        contents: this.contents,
      }
    },
  },
  methods:{
    carouselScroll(e){
      if(e.path[0].placeholder ==='내용') return;
      if(this.scrollReady>0)
      {
        this.$store.commit('set_showTipMessage',false);
        if(e.wheelDelta>0){
          this.carouselIndex--;
          this.scrollReady=0;
        }
        else{
          if(this.carouselIndex!=4)
          {
          this.carouselIndex++;
          this.scrollReady=0;
          }
        }
      }
      else this.scrollReady++;
    },
    typing(e){
      this.areaFocus = e.isTrusted;
    },
    carouselTouchDown(){
      if(this.areaFocus) return;
      if(this.carouselIndex===0) return;
      if(this.carouselIndex<=4){
        this.carouselIndex--;
        this.$store.commit('set_showTipMessage',false);
      } 
    },
    carouselTouchUp(){
      if(this.areaFocus) return;
      if(this.carouselIndex===4) return; 
      if(this.carouselIndex>=0){
        this.carouselIndex++;
        this.$store.commit('set_showTipMessage',false);
      } 
    },
    preload(){
      for(var i = 0; i<this.preloadImg.length; i++)
      {
        var preloadImage = new Image();
        preloadImage.src = this.preloadImg[i]
      }
    },
    sendEmail(){
      var tem = {
        team:this.team, title:this.title, email:this.email, phone:this.phone, contents:this.contents,
      }
      setTimeout( ()=>{bus.$emit('start:loading')},0 );
      emailjs.send('contact_allground', 'template_g7aeqeq',tem,'user_oVKTMpvtsG0Qm6m521s60')
        .then(() => {
            alert("메일이 발송되었습니다."); 
            setTimeout( ()=>{bus.$emit('end:loading')},800 );
            location.reload();
        }, (error) => {
            alert(`시스템에 에러가 있어 메일발송이 실패했습니다. contactallground@gmail.com로 보내주세요! ${error.text}`); 
            setTimeout( ()=>{bus.$emit('end:loading')},800 );
        });
    },
    


    capcha(){ // 캡챠 숫자 랜덤으로 뿌려주는 함수 ㅇㅅㅇ // 
      let r1 = this.r1;
      let r2 = this.r2;
      if(r1===this.answer) r1++;
      if(r2===this.answer) r2++;
      if(r1===r2) r1++;
      this.q0 = this.answer - r1;
      this.q1 = r1;
      for(var i =0; i<3; i++)
      {
        this.b[i].r=false;
      }
      switch(this.r0){
        case 1: {this.b[0].r=true; this.b[0].n=this.answer; this.b[1].n=r1; this.b[2].n=r2;}  break;
        case 2: {this.b[1].r=true; this.b[1].n=this.answer; this.b[0].n=r1; this.b[2].n=r2;}  break;
        default: {this.b[2].r=true; this.b[2].n=this.answer; this.b[0].n=r1; this.b[1].n=r2;}  break;
      }
    },

    btnClick(bool){ // 캡챠 버튼 클릭시 메소드. ㅇㅅㅇ //
      if(bool) { 
        this.dialog=false; 
        this.sendEmail();
      }
      else alert("오답입니다.");
    },

    submit(){ // 메일보내기 버튼 메소드 ㅇㅅㅇ  //
      this.formHasErrors = false
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      Object.keys(this.form).forEach(f => {
          if (!this.form[f]) {
            this.formHasErrors = true;
          }
          this.$refs[f].validate(true)
      })
      if(!this.formHasErrors&&pattern.test(this.email)) {
        this.capcha();
        this.dialog=true;
      }
    },

  }
}
</script>

<style>
.apply .v-messages__message{
  color:white;
}
.apply .theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
  background-color:rgba(25,25,25,.7);
}
.apply .v-slide-group__prev{
  display:none !important;
  width: 0px !important;
}
.apply .theme--light.v-tabs-items{
  background-color:rgba(55,55,55,.4);
  border-radius: 0 0 100px 100px;
}
.apply .v-messages__message{
  color:grey;
}
.apply .subText > .v-icon{
  color:white;
}
</style>

<style scoped>
@import url("../assets/css/unify.css");
</style>
