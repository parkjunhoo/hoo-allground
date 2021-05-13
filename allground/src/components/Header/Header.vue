<template>
<div id="header">
    <v-app-bar
    :height="headerHeight"
    color="transparent"
    absolute
    flat
    style="z-index:5;"
    >
        <v-row class="d-flex align-center">
            <v-col class="d-flex align-center" cols="auto">
                <router-link to="/"><v-card :ripple="false" class="transparent" elevation="0" :width="logoWidth" :height="logoHegiht"><v-img contain width="100%" height="100%" src="@/assets/logo/white_wide_logo_resize.png" ></v-img></v-card></router-link>
            </v-col>
            <v-spacer></v-spacer>
            <v-col v-if="!this.$vuetify.breakpoint.smAndDown" cols="auto">
                <v-tabs hide-slider fixed-tabs color="white" background-color="transparent">
                    <v-tab :to="i.to" class="headerTab mx-5" :ripple="false" v-for="i in menuList" :key="i.title">
                        <p style="white-space:nowrap;" class="headerTitle">{{i.name}}</p>
                        <span class="activespan"></span>
                        <span class="hoverspan"></span>
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0" cols="auto" v-if="!this.$vuetify.breakpoint.mdAndDown">
                <v-card elevation="0" class="d-flex transparent">
                <a href="https://www.facebook.com/Alldayfootballer/" target="_blank"><v-img class="mx-3" height="20px" width="20px" contain src="@/assets/main/sns/facebook.png"></v-img></a>
                <v-divider style="background-color:white; opacity:.2;" vertical></v-divider>
                <a href="https://www.instagram.com/allground.official/" target="_blank"><v-img class="mx-3" height="20px" width="20px" contain src="@/assets/main/sns/instagram.png"></v-img></a>
                <v-divider style="background-color:white; opacity:.2;" vertical></v-divider>
                <a href="https://blog.naver.com/alldayfootball" target="_blank"><v-img class="mx-3" height="20px" width="20px" contain src="@/assets/main/sns/blog.png"></v-img></a>
              </v-card>
            </v-col>
            <v-col v-if="this.$vuetify.breakpoint.smAndDown" cols="auto">
                <v-app-bar-nav-icon color="white" @click="OpenDrawer"></v-app-bar-nav-icon>
            </v-col>
            <!-- <v-col v-if="!this.$vuetify.breakpoint.smAndDown" cols="auto" class="d-flex align-center">
                <p class="headerTitle">LANGUAGE</p>
            </v-col>  -->
            <!-- <v-col v-if="!this.$vuetify.breakpoint.smAndDown" cols="auto" class="d-flex align-center">
                <div style="background-color:transparent;" id="google_translate_element" class="hd_lang"></div>
            </v-col> -->
            <hr style="background-color:white; opacity:.3; position:absolute; width:100%; left:0px; top:100%; height:1px;">
        </v-row>
    </v-app-bar>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
        }
    },
    beforeCreate(){
        axios.get('api/setting/find')
        .then((res)=>{
            if(!res.data[0].applyTab)this.$store.commit('set_applyTab');
            console.log(this.$store.state.menuList);
            console.log(!res.data[0].applyTab);
        })
    },
    methods:{
        OpenDrawer(){ // drawer를 띄우는 메소드 ㅇㅅㅇ //
            this.$store.commit('set_drawerBool',!this.$store.state.drawerBool);
        },
        tabEffect(routeName){
            if(!this.$vuetify.breakpoint.smAndDown)
            {
                if(this.$route.name==='Main')
                {
                    for(var a=0; a<this.menuList.length; a++){
                        document.getElementsByClassName('headerTab')[a].style.backgroundColor = "transparent";
                        document.getElementsByClassName('headerTab')[a].style.borderRadius = "0px 0px 0px 0px";
                    }
                    return;
                }
                for(var i =0; i<this.menuList.length; i++){
                    if(this.menuList[i].title!=routeName){
                        document.getElementsByClassName('headerTab')[i].style.backgroundColor = "transparent";
                        document.getElementsByClassName('headerTab')[i].style.borderRadius = "0px 0px 0px 0px";
                    }
                    else{
                        document.getElementsByClassName('headerTab')[i].style.backgroundColor = "rgba(86,245,105,.2)";
                        document.getElementsByClassName('headerTab')[i].style.borderRadius = "20px 0px 20px 0px";
                    }
                }
            }
        },
    },
    computed:{
        menuList(){
            return this.$store.state.menuList;
        },
        headerHeight(){
            switch(this.$vuetify.breakpoint.name){
            case 'xs' : return "35";
            case 'sm' : return "35";
            case 'md' : return "60";
            case 'lg' : return "60";
            case 'xl' : return "60";
            default : return "60";
            }
        },
        logoWidth(){
            switch(this.$vuetify.breakpoint.name){
            case 'xs' : return "120";
            case 'sm' : return "150";
            case 'md' : return "150";
            case 'lg' : return "150";
            case 'xl' : return "150";
            default : return "150";
            }
        },
        logoHegiht(){
            switch(this.$vuetify.breakpoint.name){
            case 'xs' : return "30";
            case 'sm' : return "30";
            case 'md' : return "60";
            case 'lg' : return "60";
            case 'xl' : return "60";
            default : return "60";
            }
        },
    },
    watch:{
        $route(to){
            switch(to.name){
                case 'Main': this.tabEffect('Main'); break;
                case 'About': this.tabEffect('About'); break;
                case 'Service': this.tabEffect('Service'); break;
                case 'Contact': this.tabEffect('Contact'); break;
                case 'News': this.tabEffect('News'); break;
                case 'Apply': this.tabEffect('Apply'); break;
                default: break;
            }
        }
    },
}
</script>

<style>
#header .v-card--link:before , .v-tab:before {
    background-color: transparent !important;
}
</style>

<style scoped>
.headerHolder{
    max-width:1400px;
    display: flex;
    justify-content: center;
}
.headerTitle{
    transition:800ms ease all;
    font-size:16px;
    font-family: 'Russo One', sans-serif;
    color:rgba(255,255,255,.7);
}

.v-tab:hover .hoverspan {
    width:80%;
    opacity:1;
}
.hoverspan{
    background-color:white;
    bottom:3px; left:10%; width:0; height:2px;
    position:absolute;
    transition: all .8s;
    z-index:2;
    opacity:0;
}
.activespan{
    background-color:white;
    bottom:3px; left:10%; width:0; height:2px;
    position:absolute;
    transition: all .8s;
    z-index:2;
    opacity:0;
}

.headerTab:hover .headerTitle{
    color:white;
}
</style>