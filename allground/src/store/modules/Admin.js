export default{
    state: {
        aDrawerBool:true,
        aMenuList:[
            {title:'게시물 관리',to:0,subMenu:[{title:'게시물 보기',to:0},{title:'게시물 쓰기',to:2}]},
            // {title:'문구 관리',to:1,subMenu:[{title:'MAIN',to:1},{title:'SERVICE',to:2},{title:'NEWS',to:3},{title:'APPLY',to:4},{title:'CONTACT',to:5}],},
            {title:'기타 설정',to:3,subMenu:[{title:'setting',to:3}]},
        ],
    },
    getters: {
    },
    mutations: {
        set_aDrawerBool(state,bool){
            state.aDrawerBool = bool;
        },
    },
    actions: {
    },
    modules: {
    }
}