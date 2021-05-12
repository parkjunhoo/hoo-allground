<template>
    <v-navigation-drawer
    app
    z-index="12"
    disable-resize-watcher
    v-model="drawerBool"
    temporary
    right
    color="black"
    width="100%"
    style="opacity:.8;"
    >
    <!-- 로고 부분 (to /main) ㅇㅅㅇ -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-card @click="drawerBool=false;" class="transparent d-flex justify-end"><v-icon x-large color="white">mdi-exit-to-app</v-icon></v-card>
            <v-card height="100px" class="ma-0 pa-0" color="transparent" to="/"><v-img height="100%" contain src="@/assets/logo/logo_white.png"></v-img></v-card>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    <!-- 로고 부분 (to /main) ㅇㅅㅇ -->
      <v-divider style="background-color:white;"></v-divider>
    
    <!-- 메뉴 부분 ㅇㅅㅇ -->
      <v-list nav>
        <v-list-item
          v-for="item in menuList"
          :key="item.title"
          link
          :to="item.to"
        >

          <v-list-item-content>
            <v-list-item-title class="Font">{{ item.name }}</v-list-item-title>
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
    }
  },
  computed:{
    menuList(){ // 메뉴 리스트를 vuex에서 받아오는거 ㅇㅅㅇ //
      return this.$store.state.menuList;
    },
    drawerBool:{ // 드로우불로 v-if 되있음. ㅇㅅㅇ //
      get(){
        return this.$store.state.drawerBool;
      },
      set(bool){
        return this.$store.commit('set_drawerBool',bool);
      },
    },
},

}
</script>

<style scoped>
.Font{
    color:white;
    text-align: center;
    font-family: 'Shrikhand', cursive; 
}
</style>
