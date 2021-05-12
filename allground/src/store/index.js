import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showTipMessage:true,
    loading:true, // 로딩vue에 v-if처리 되있는 변수 ㅇㅅㅇ //
    menuList:[   // 메뉴 리스트임 ㅇㅅㅇ... //
      { name:'About', title: 'About', icon: 'mdi-alpha-a', to:'/about'},
      { name:'Service', title: 'Service', icon: 'mdi-alpha-b', to:'/service'},
      { name:'News', title: 'News', icon: 'mdi-alpha-n', to:'/news'},
      { name:'Apply', title: 'Apply', icon: 'mdi-alpha-a', to:'/apply'},
      { name:'Contact', title: 'Contact', icon: 'mdi-alpha-c', to:'/contact'},
    ],
    drawerBool:false,
  },
  mutations: {
    set_drawerBool(state,bool){
      state.drawerBool = bool;
    },
    set_showTipMessage(state, bool){
      state.showTipMessage = bool;
    },
    set_loading(state,bool){
      state.loading = bool;
    },
    set_applyTab(state){
      // if(bool) state.menuList = [
      //   { name:'About', title: 'About', icon: 'mdi-alpha-a', to:'/about'},
      //   { name:'Service', title: 'Service', icon: 'mdi-alpha-b', to:'/service'},
      //   { name:'The News', title: 'News', icon: 'mdi-alpha-n', to:'/news'},
      //   { name:'Apply', title: 'Apply', icon: 'mdi-alpha-a', to:'/apply'},
      //   { name:'Contact', title: 'Contact', icon: 'mdi-alpha-c', to:'/contact'},
      // ]
      state.menuList = state.menuList.filter((element)=> element.name !== 'Apply');
    }
  },
  actions: {
  },
  modules: {
  }
})
