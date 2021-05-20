<template>
    <div class="admin" style="height:100%; width:100%; padding-top:70px;">
        <AdminDrawer/>
        <v-row no-gutters>
            <v-col class="my-5 ml-5" cols="12">
                <v-app-bar-nav-icon v-show="!aDrawerBool" @click="aDrawerBool=true" style="position:absolute; z-index:2;" large color="white"></v-app-bar-nav-icon>
            </v-col>
            <v-col cols="12">
                <v-carousel v-model="carouselIndex" height="100%" hide-delimiters :show-arrows="false">

                    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
                        <div class="scrollDiv black" style="height:100%;">
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
                                        <p @click="clickTitle(index)" style="overflow:hidden;" class="newsSubText">{{i.title}}</p>
                                    </v-col>
                                    <v-col class="blue lighten-2" cols="2">
                                        <p class="newsSubText">{{i.regTime.slice(0,10)}}</p>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col class="d-flex justify-end" cols="12">
                                        <v-btn @click="carouselIndex=2">글쓰기</v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-carousel-item>

                    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
                        <div class="scrollDiv black" style="height:100%;">
                            <v-container class="viewContainer d-flex">
                                <v-row>
                                    <v-col cols="12">
                                        <TipTapEdit :output.sync="output" @carouselMove="carouselMove" />
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-carousel-item>

                    <v-carousel-item transition="fade-transition" reverse-transition="fade-transition">
                        <div class="scrollDiv black" style="height:100%;">
                            <v-container class="viewContainer d-flex">
                                <v-row>
                                    <v-col cols="12">
                                        <TipTapWrite @carouselMove="carouselMove" />
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
import TipTapEdit from '@/components/TipTap/TipTapEdit.vue'
import TipTapWrite from '@/components/TipTap/TipTapWrite.vue'

export default {
    components:{
        AdminDrawer,
        TipTapEdit,
        TipTapWrite,
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
            this.output.id = this.boards[i]._id;
            this.output.title =  this.boards[i].title;
            this.output.contents = this.boards[i].contents;
            console.log(this.output);
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
