import axios from 'axios'
export default {
    state:{
        boards:null,
    },
    mutations:{
        set_boards(state,object){
            state.boards = object;
        },
    },
    actions:{
        get_board_find(m){
            axios.get('api/board/find')
            .then((res)=>{
                m.commit('set_boards',res.data);
            })
        },
        post_board_delete(_id){
            axios.post('api/board/delete',{
                id:_id
            })
            .then((res)=>{
                if(res.data==='not_logged'||res.data==='not_admin'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='deleted'){
                    alert('삭제되었습니다.');
                    return;
                }
            })
        },
        post_board_write(title,contents){
            axios.post('api/board/write',{
                title:title,
                contents:contents
            })
            .then((res)=>{
                if(res.data==='not_logged'||res.data==='not_admin'){
                    alert('권한이 없습니다.')
                    return;
                }
                if(res.data==='uploaded'){
                    alert('업로드 되었습니다.');
                    return;
                }
            })
        },
        put_board_edit(_id,title,contents){
            axios.put('api/board/edit',{
                id:_id,
                title:title,
                contents:contents
            })
            .then((res)=>{
                if(res.data==='not_logged'||res.data==='not_admin'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='uploaded'){
                    alert('수정되었습니다.')
                    return;
                }
            })
        },
    },
}