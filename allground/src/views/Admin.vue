<template>
    <div class="admin" style="height:100%; width:100%;">
        <AdminDrawer/>
        <v-row no-gutters>
            <v-col class="my-5 ml-5" cols="12">
                <v-app-bar-nav-icon v-show="!aDrawerBool" @click="aDrawerBool=true" style="position:absolute; z-index:2;" large color="white"></v-app-bar-nav-icon>
            </v-col>
            <v-col cols="12">
                <v-carousel v-model="carouselIndex" height="100%" show-arrows-on-hover hide-delimiters>

                    <v-carousel-item>
                        <div class="scrollDiv" style="height:100%;">
                            <v-container class="viewContainer">
                                <v-row>
                                    <v-col cols="12">
                                        <p class="titleSubText">게시글</p>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="green" cols="10">
                                        <p class="subText">제목</p>
                                    </v-col>
                                    <v-col class="green lighten-2" cols="2">
                                        <p class="subText">날짜</p>
                                    </v-col>
                                </v-row>

                                <v-row v-for="(i,index) in boards" :key="index">
                                    <v-col class="blue" cols="10">
                                        <p @click="clickTitle(index)" style="overflow:hidden;" class="subText">{{i.title}}</p>
                                    </v-col>
                                    <v-col class="blue lighten-2" cols="2">
                                        <p class="subText">{{i.regTime.slice(0,10)}}</p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-carousel-item>

                    <v-carousel-item>
                        <div class="scrollDiv" style="height:100%;">
                            <v-container class="viewContainer d-flex">
                                <v-row>
                                    <v-col cols="12">
                                        <TipTab :output.sync="output" @carouselMove="carouselMove" />
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-carousel-item>


                </v-carousel>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import bus from '@/utils/bus.js'
import AdminDrawer from '@/components/Admin/AdminDrawer.vue'
import TipTab from '@/components/TipTap/TipTap.vue'

export default {
    components:{
        AdminDrawer,
        TipTab,
    },
    data(){
        return{
            today:'',
            userData:'',
            carouselIndex:0,
            output:{id:null,title:null,contents:null}
        }
    },
    mounted() {
        this.$store.dispatch('get_board_find');
        this.$store.commit('set_showTipMessage',false);
        this.$nextTick(()=>{
        setTimeout( ()=>{bus.$emit('end:loading')},1500 );
        });
    },
    methods:{
        carouselMove(i){
            this.carouselIndex = i;
        },
        clickTitle(i){
            this.output.id = this.boards[i].id;
            this.output.title =  this.boards[i].title;
            this.output.contents = this.boards[i].contents;
            this.carouselIndex=1;
        },
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
        boards(){
            return this.$store.state.Board.boards;
        },
    },

}
</script>

<style scoped>
@import url("../assets/css/unify.css");
</style>
