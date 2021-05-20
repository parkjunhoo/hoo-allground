<template>
    <v-navigation-drawer
    :value="aDrawerBool"
    z-index="4"
    height="100%"
    dark
    app
    stateless
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <div class="d-flex justify-end"><v-icon large @click="aDrawerBool=false;">mdi-exit-to-app</v-icon></div>
            <v-card elevation="0" height="100px" class="ma-0 pa-0" color="transparent" to="/"><v-img height="100%" contain src="@/assets/logo/logo_white.png"></v-img></v-card>
            <p class="subText mt-5" style="color:white;">{{date}}</p>
            <p class="subText" style="color:rgb(100,250,80);">{{today}}</p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider style="background-color:white;"></v-divider>
    
    <!-- 메뉴 부분 ㅇㅅㅇ -->
      <v-list nav>
        <v-list-item>
          <v-list-item-content>
            <v-expansion-panels class="my-2" v-for="i in aMenuList" :key="i.title">
              <v-expansion-panel>
                <v-expansion-panel-header color="grey darken-1">
                  <p class="subText">{{i.title}}</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="grey darken-1" v-for="(s,sindex) in i.subMenu" :key="sindex">
                  <v-divider></v-divider>
                  <p @click="carouselMove(s.to)" class="subText d-flex"><v-icon small class="mx-1">mdi-pencil-box-outline</v-icon>{{s.title}}</p>
                  <v-divider></v-divider>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    <!-- 메뉴 부분 ㅇㅅㅇ -->
    </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      today:'',
      date:'',
    }
  },
  mounted(){
    setInterval(this.t,1000);
  },
  computed:{
    aDrawerBool:{
      get(){
        return this.$store.state.Admin.aDrawerBool;
      },
      set(bool){
        this.$store.commit('set_aDrawerBool',bool);
      },
    },
    aMenuList(){
      return this.$store.state.Admin.aMenuList;
    },
  },
  methods:{
    carouselMove(sto){
      this.$emit('carouselMove',sto);
    },
      t(){
          let t = new Date();
          
          let y = t.getFullYear();
          let mt = t.getMonth();
          if(mt<10) mt="0"+mt;
          let dt = t.getDate();
          if(dt<10) dt="0"+dt;
          let d = t.getDay();
          switch(d){
            case 1: d = '월요일'; break;
            case 2: d = '화요일'; break;
            case 3: d = '수요일'; break;
            case 4: d = '목요일'; break;
            case 5: d = '금요일'; break;
            case 6: d = '토요일'; break;
            case 7: d = '일요일'; break;
          }

          let h = t.getHours();
          if(h<10) h="0"+h;
          let m = t.getMinutes();
          if(m<10) m ="0"+ m;
          let s = t.getSeconds();
          if(s<10) s ="0"+ s;
          this.today = h+":"+m+":"+s;
          this.date = y+'-'+mt+'-'+dt+"-"+d;
      },
  },

}
</script>

<style scoped>
.Font{
    color:white;
    font-family: 'Noto Sans KR', sans-serif;
}
</style>
