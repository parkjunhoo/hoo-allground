<template>
<div class="main overflow-hidden contact" style="background-color:black;">
    <v-carousel
    class="custumCarousel"
    height="100vh"
    :show-arrows="false"
    hide-delimiter-background
    delimiter-icon="mdi-soccer black rounded-xl"
    v-model="carouselIndex"
    :touch="{
    down: this.carouselTouchDown,
    up: this.carouselTouchUp
    }"
    :vertical-delimiters="delimitersLocation"
  >
    <v-carousel-item v-if="!this.$vuetify.breakpoint.smAndDown" @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/contact/1.jpg">
        <v-container class="d-flex align-center" style="padding-top:70px; padding-left:25px; padding-right:25px; height:100%;">
          <v-row class="d-flex">
             <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Contact Us</p>
            </v-col>
            <v-col class=" justify-center" cols="6">
              <p class="doubleTitleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Address</p>
              
            </v-col>
            <v-col class="d-flex justify-center" cols="6">
              <p class="doubleTitleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Send Mail</p>
            </v-col>

            <v-col class="d-flex justify-center" cols="6">
              <v-card :width="mapHeight" height="38vh">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.8342680606725!2d126.89337031564983!3d37.653
              100226922916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c975564a8049d%3A0xe1337ec378777c1c!2z7IK87Iah7J
              et7ZiE64yA7Zek66as7JeH!5e0!3m2!1sko!2skr!4v1619678132310!5m2!1sko!2skr" width="100%" height="100%"></iframe>
              <p class="subText" style="text-align:center;"><br>주소: 경기도 고양시 덕양구 삼송로 222 현대헤리엇 335호 (주) 올그라운드 본사</p>
              <v-row>
                <v-col cols="12">
                  <p class="subText" style="margin-top: 10px">전화: 02-6953-0618 | 팩스: 02-6944-9018</p>
                </v-col>
              </v-row>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-container class="overflow-hidden">
                <v-card elevation="0" ref="form" class="transparent">
                  <v-row class="fill-height">
                    <v-col class="mx-auto pa-0"  cols="9">
                      <v-text-field ref="title" solo placeholder="제목" v-model="title" :rules="[rules.required]"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto pa-0"  cols="9">
                      <v-text-field ref="email"  solo placeholder="e-mail" v-model="email" :rules="[rules.required, rules.email]"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto pa-0"  cols="9">
                      <v-textarea @focusout="areaFocus=false;" @focus="typing" ref="contents"  height="200" solo placeholder="내용" v-model="contents" :rules="[rules.required]"></v-textarea>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="d-flex justify-center" cols="12">
                      <v-btn outlined color="white" @click="submit"><p>메일 보내기</p></v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item v-if="this.$vuetify.breakpoint.smAndDown" @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/contact/1.jpg">
        <v-container class="d-flex align-center" style="padding-top:70px; padding-left:25px; padding-right:25px; height:100%;">
          <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Contact Us</p>
            </v-col>
            <v-col class=" justify-center" cols="12">
              <p class="doubleTitleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Address</p>
              
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <v-card :width="mapHeight" height="40vh">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.8342680606725!2d126.89337031564983!3d37.653
              100226922916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c975564a8049d%3A0xe1337ec378777c1c!2z7IK87Iah7J
              et7ZiE64yA7Zek66as7JeH!5e0!3m2!1sko!2skr!4v1619678132310!5m2!1sko!2skr" width="100%" height="100%"></iframe>
              </v-card>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="subText" style="text-align:center;">주소: 경기도 고양시 덕양구 삼송로 222 현대헤리엇 335호 <br>(주) 올그라운드 본사</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="subText" style="text-align:center;">전화: 02-6953-0618 | 팩스: 02-6944-9018</p>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-carousel-item>

    <v-carousel-item v-if="this.$vuetify.breakpoint.smAndDown" @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
      <v-img gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.1), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/contact/2.jpg">
        <v-container class="d-flex align-center" style="padding-top:70px; padding-left:25px; padding-right:25px; height:100%;">
          <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="12">
              <p class="titleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Contact Us</p>
            </v-col>
            <v-col class="d-flex justify-center" cols="12">
              <p class="doubleTitleText" style="text-align:center;"><span style="position:absolute;" class="t"></span>Send Mail</p>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" >
              <v-container style="padding-right:10%; padding-left:10%;" class="overflow-hidden">
                <v-card elevation="0" ref="form" class="pa-3 transparent">
                  <v-row class="fill-height">
                    <v-col class="mx-auto pb-0"  cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-text-field ref="title" solo placeholder="제목" v-model="title" :rules="[rules.required]"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto py-0"  cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-text-field ref="email"  solo placeholder="e-mail" v-model="email" :rules="[rules.required, rules.email]"></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="mx-auto py-0"  cols="12" sm="12" md="6" lg="6" xl="6">
                      <v-textarea @focusout="areaFocus=false;" @focus="typing" ref="contents"  height="140" solo placeholder="내용" v-model="contents" :rules="[rules.required]"></v-textarea>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="d-flex justify-center" cols="12">
                      <v-btn outlined color="white" @click="submit"><p>메일 보내기</p></v-btn>
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
      preloadImg:[
        require('@/assets/contact/1.jpg'),
        require('@/assets/contact/2.jpg'),
      ],
      carouselIndex:0,
      scrollReady:2,
      areaFocus:false,


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
      formHasErrors: false,
      rules: {
        required: value => !!value || '입력이 필요합니다.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '올바른 이메일 형식이 아닙니다.'
        },
      },
       // 이메일 보내기 관련 변수들 ㅇㅅㅇ //

    }
  },
  created(){
    this.preload();
  },
  mounted(){
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
    pageCount(){
        switch(this.$vuetify.breakpoint.name){
          case 'xs' : return "1";
          case 'sm' : return "1";
          case 'md' : return 0;
          case 'lg' : return 0;
          case 'xl' : return 0;
          default : return 0;
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
        title: this.title,
        email: this.email,
        contents: this.contents,
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
    carouselScroll(e){
      if(this.areaFocus) return;
      if(this.scrollReady>0)
      {
        this.$store.commit('set_showTipMessage',false);
        if(e.wheelDelta>0){
          this.carouselIndex--;
          this.scrollReady=0;
        }
        else{
          if(this.carouselIndex!=this.pageCount)
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
      if(this.carouselIndex>=1){
        this.carouselIndex--;
        this.$store.commit('set_showTipMessage',false);
      } 
    },
    carouselTouchUp(){
      if(this.areaFocus) return;
      if(this.carouselIndex===1) return; 
      if(this.carouselIndex<1){
        this.carouselIndex++;
        this.$store.commit('set_showTipMessage',false);
      } 
    },

    sendEmail(){
    var tem = {
      title:this.title, email:this.email, contents:this.contents,
    }
    setTimeout( ()=>{bus.$emit('start:loading')},0 );
    emailjs.send('contact_allground', 'template_f3qobkq',tem,'user_oVKTMpvtsG0Qm6m521s60')
      .then(() => {
          alert("메일이 발송되었습니다."); 
          location.reload();
          setTimeout( ()=>{bus.$emit('end:loading')},800 );
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
.contact .v-messages__message{
  color:white;
}
.contact .theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
  background-color:rgba(25,25,25,.7);
}
</style>

<style scoped>
.subText {
  font-size: 1.2rem;
}
@import url("../assets/css/unify.css");
.doubleTitleText{
  font-size:1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
  color:white;
}
@media (max-width:1000px){
}
@media (max-width:680px){
}
@media (max-width:520px){
    .subText {
      font-size: .8rem;
    }
    .titleText {
      font-size: 2.5rem;
    }
}
</style>
