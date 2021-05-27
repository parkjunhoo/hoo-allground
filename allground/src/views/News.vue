<template>
<div class="news" style="background-color:black;">
    <v-carousel
    class="custumCarousel"
    height="100%"
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
    delimiter-icon="mdi-soccer black rounded-xl"
    v-model="carouselIndex"
    :touch="{
    down:this.carouselTouchDown,
    up:this.carouselTouchUp
    }"
    :vertical-delimiters="delimitersLocation"
  >
  <v-carousel-item @mousewheel="carouselScroll" :reverse-transition="reverseTransition" :transition="Transition">
    <v-img class="viewContainer" gradient="to bottom, rgba(0,0,0,1),rgba(0,0,0,.7), rgba(0,0,0,1)" width="100%" height="100%" cover src="@/assets/news/3.jpg">
    <v-container class="d-flex justify-center" style="padding-botton:5px;">
      <div :style="{width:listContainer}">
        <v-row class="d-flex justify-center">
          <v-col class="d-flex justify-center" cols="12">
            <p class="titleText">News</p>
          </v-col>
          <v-col cols="12">
            <v-row class="d-flex justify-center">
              <v-col class="d-flex align-center" cols="10" sm="12" md="6" lg="6" xl="6">
                <v-text-field @keypress.enter="clickSearch" hide-details v-model="search" label="검색" solo-inverted></v-text-field>
                <v-btn style="height:90%;" class="mx-3 px-2" @click="clickSearch" color="green darken-2" dark ><v-icon >mdi-magnify</v-icon></v-btn>
              </v-col>
              <v-col class="d-flex align-center" cols="auto">
                <v-btn-toggle background-color="transparent" class="mx-3 d-flex align-end" v-model="boardType" mandatory>
                  <v-btn small :value="0">
                    <v-icon small>mdi-bulletin-board</v-icon>
                  </v-btn>
                  <v-btn small :value="1">
                    <v-icon small>mdi-format-align-center</v-icon>
                  </v-btn>
                </v-btn-toggle>
                <!-- <v-checkbox class="mx-1" v-model="titleCheck" label="제목" color="success" hide-details></v-checkbox>
                <v-checkbox class="mx-1" v-model="contentCheck" label="내용" color="success" hide-details></v-checkbox> -->
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      
    </v-container>

    <v-container class="d-flex justify-center align-start" style="padding-top:5px;">
      <div :style="{width:listContainer}" class="scrollDiv" style="height:65vh; background-color:rgba(0,0,0,.2);">
        <v-row v-if="boardType===0" no-gutters>
          <v-col class="mt-5" v-for="(i,index) in boardsResult" :key="index" cols="12" sm="12" md="4" lg="3" xl="3">
            <v-card width="90%" class="mx-auto mt-5 pa-2" color="rgba(22,22,22,.4)" style="border:1px solid rgba(255,255,255,.1);" elevation="10">
              <v-row no-gutter>

                <v-col class="pa-3" cols="12">
                  <p style="text-align:right;" class="listSubText px-3 pt-2">{{i.regTime.slice(0,10)}}</p>
                </v-col>

                <v-col class="d-flex align-center" cols="12">
                  <v-hover v-slot="{ hover }">
                    <v-card width="100%" class="hovercard" :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                      <v-card width="100%" height="25vh">
                        <v-img style="cursor:pointer; border:1px solid rgba(255,255,255,.2);" @click="clickTitle(index)" width="100%" height="100%" :src="i.thumb" >
                          <div @click="clickTitle(index)" v-if="hover" class="d-flex justify-center align-center" style="width:100%; height:100%; background-color:rgba(0,0,0,.8); cursor:pointer;">
                            <p class="titleSubText">전체보기 <v-icon x-large>mdi-fullscreen</v-icon></p>
                          </div>
                        </v-img>
                      </v-card>
                    </v-card>
                  </v-hover>
                </v-col>

                <v-col class="pa-3" cols="12">
                  <p @click="clickTitle(index)" style="overflow:hidden; text-overflow: ellipsis; cursor:pointer;" class="listTitleText px-3 cardListTitle">{{i.title}}</p>
                </v-col>
                <v-col class="pa-3 d-flex align-center" cols="12">
                  <p class="listSubText align-self-start px-3">{{i.pretext}}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-5" no-gutters v-if="boardType===1">
        <v-col class="d-flex justify-center" cols="12">
          <div :style="{width:listContainer}" class="scrollDiv" style="height:65vh; background-color:rgba(0,0,0,.2);">
            <v-row no-gutters>
                <v-col class="py-1" style="background-color:rgba(255,255,255,.3); border-bottom:1px solid rgba(0,0,0,.6);" cols="2">
                </v-col>
                <v-col class="py-1" style="background-color:rgba(255,255,255,.3); border-bottom:1px solid rgba(0,0,0,.6);" cols="8">
                    <p style="color:white;" class="subText">제목</p>
                </v-col>
                <v-col class="py-1" style="background-color:rgba(255,255,255,.3); border-bottom:1px solid rgba(0,0,0,.6);" cols="2">
                    <p style="color:white;" class="subText">날짜</p>
                </v-col>
            </v-row>
            <v-row no-gutters v-for="(i,index) in boardsResult" :key="index">
                <v-col class="py-3" style="background-color:rgba(0,0,0,.5); border-bottom:1px solid rgba(255,255,255,.4);" cols="2">
                  <v-img width="100%" height="50px" :src="i.thumb"></v-img>
                </v-col>
                <v-col class="py-3 d-flex align-center justify-center" style="background-color:rgba(0,0,0,.6); border-bottom:1px solid rgba(255,255,255,.6);" cols="8">
                    <p @click="clickTitle(index)" style="overflow:hidden; text-overflow: ellipsis; white-space:nowrap; cursor:pointer;" class="listTitleText">{{i.title}}</p>
                </v-col>
                <v-col class="py-3 d-flex align-center justify-center" style="background-color:rgba(0,0,0,.5); border-bottom:1px solid rgba(255,255,255,.4);" cols="2">
                    <p class="newsSubText">{{i.regTime.slice(0,10)}}</p>
                </v-col>
            </v-row>
          </div>
        </v-col>
        </v-row>
      </div>

    </v-container>
    </v-img>
  </v-carousel-item>
</v-carousel>

<v-dialog v-model="dialog" width="100%" height="100%">
  <div class="d-flex align-center" style="position:fixed; z-index:203; background-color:rgba(0,0,0,.8); height:50px; width:100%;">
      <div style="position:absolute; z-index:204; width:100%; height:100%; top:0;" class="d-flex justify-center align-center">
          <v-tooltip v-if="!this.$vuetify.breakpoint.smAndDown" bottom>
            <template v-slot:activator="{ on, attrs }">
              <span  v-bind="attrs" v-on="on" style="z-index:99;" class="newsTitleText">
                {{output.title}}
              </span>
            </template>
            <span>{{output.title}}</span>
          </v-tooltip>
          <v-tooltip v-if="this.$vuetify.breakpoint.smAndDown" bottom>
            <template v-slot:activator="{ on, attrs }">
              <span  v-bind="attrs" v-on="on" style="z-index:99;" class="newsTitleText">
                News
              </span>
            </template>
            <span>{{output.title}}</span>
          </v-tooltip>
      </div>
      <div class="d-flex justify-end align-center" style="position:absolute; z-index:205; width:100%; height:100%; top:0;">
        <v-btn @click="dialog=false" icon>
          <v-icon class="mr-5" style="color:white; z-index:100;">mdi-close-thick</v-icon>
        </v-btn>
      </div>
  </div>
  <v-card class="scrollDiv" :style="{paddingRight:newsContainer,paddingLeft:newsContainer}" style="top:50px; padding-top:10px; padding-bottom:60px;" width="100%" height="80vh" elevation="0">
    <JoditView :output="output"/>
  </v-card>
</v-dialog>

</div>
</template>

<script>
import bus from '@/utils/bus.js'
import axios from 'axios'
import JoditView from '@/components/Jodit/JoditView.vue'
export default {
  components:{
    JoditView,
  },
  data(){
    return{
      search:'',
      boardType: 0,
      titleCheck: true,
      contentCheck: true,
      dialog:false,
      carouselIndex:0,
      scrollReady:2,
      boards:null,
      boardsResult:null,
      output:{id:null,title:null,contents:null},
    }
  },
  computed:{
    listContainer(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '100%';
        case 'sm' : return '100%';
        case 'md' : return '80%';
        case 'lg' : return '80%';
        case 'xl' : return '80%';
        default : return '100%';
      }
    },
    newsContainer(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs' : return '5%';
        case 'sm' : return '5%';
        case 'md' : return '10%';
        case 'lg' : return '20%';
        case 'xl' : return '20%';
        default : return '0%';
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
  watch:{
  },
  methods:{
    clickSearch(){
      if(this.search.trim===''){
        this.boardsResult = this.boards;
        return;
      }
      if(this.titleCheck===false&&this.contentCheck===false){
        alert('제목 또는 내용을 선택해주세요.')
        return;
      }
      if(this.titleCheck&&this.contentCheck)
      {
        this.boardsResult = 
        this.boards.filter (x => {
          return x.title.toLowerCase().includes(this.search.toLowerCase()) || x.contents.replace(/(<([^>]+)>|&nbsp;)/ig," ").toLowerCase().includes(this.search.toLowerCase())
        })
        return;
      }
      if(this.titleCheck)
      {
        this.boardsResult = 
        this.boards.filter (x => {
          return x.title.toLowerCase().includes(this.search.toLowerCase())
        })
        return;
      }
      if(this.contentCheck)
      {
        this.boardsResult = 
        this.boards.filter (x => {
          return x.contents.replace(/(<([^>]+)>|&nbsp;)/ig," ").toLowerCase().includes(this.search.toLowerCase())
        })
        return;
      }

    },
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
    findThumb(){
      for(var i = 0; i<this.boards.length; i++){
        if(this.boards[i].contents.includes('<img')){
          var tagIndex = this.boards[i].contents.indexOf('<img');
          var tagSrcIndex = this.boards[i].contents.indexOf('src="',tagIndex+4);
          var tagEndIndex = this.boards[i].contents.indexOf('"',tagSrcIndex+5);
          this.boards[i].thumb = this.boards[i].contents.slice(tagSrcIndex+5,tagEndIndex);
        }
      }
    },
    findPretext(){
      for(var i = 0; i<this.boards.length; i++){
        this.boards[i].pretext = this.boards[i].contents.replace(/(<([^>]+)>|&nbsp;)/ig," ").slice(0,50)+('...');
      }

    },
    findBoards(){
      axios.get('api/board/find')
      .then((res)=>{
        this.boards=res.data;
        this.findThumb();
        this.findPretext();
        this.boardsResult=this.boards;
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
.hovercard {
  transition: opacity .4s ease-in-out;
  opacity: .7;
}

.hovercard:not(.on-hover) {
  opacity: 1;
}

@import url("../assets/css/unify.css");
img{
  max-width: 100% !important;
}
.listTitleText{
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-size:16px;
}
.listTitleText:hover{
    color: green;
    font-family: 'Noto Sans KR', sans-serif;
    font-size:16px;
}
.listSubText{
    color:grey;
    font-family: 'Noto Sans KR', sans-serif;
    font-size:14px;
}

@media (max-width:1270px){
  .listTitleText{
      font-size:16px;
  }
  .listSubText{
      font-size:14px;
  }
}
@media (max-width:1000px){
  .listTitleText{
      font-size:16px;
  }
  .listSubText{
      font-size:14px;
  }
}
@media (max-width:680px){
  .listTitleText{
    font-size:15px;
  }
  .listSubText{
    font-size:13px;
  }
}
@media (max-width:520px){
  .listTitleText{
    font-size:14px;
  }
  .listSubText{
    font-size:12px;
  }
}
</style>
