import axios from 'axios'
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    state:{
        applyTab:false,
    },
    mutations:{
        set_applyTab(state,bool){
            state.applyTab = bool;
        },
    },
    actions:{
        get_setting_find(m){
            axios.get('api/setting/find')
            .then((res)=>{
                if(res.data[0].applyTab) m.commit('set_applyTab',true);
                else m.commit('set_applyTab',false);
            })
        },
        put_setting_edit(m,opt1){
            axios.put('api/setting/edit',{
                id:'6099ee9c12ec2fd58286e8d8',
                applyTab:opt1
            })
            .then((res)=>{
                if(res.data==='not_logged'||res.data==='not_admin'){
                    alert('권한이 없습니다.');
                    return;
                }
                if(res.data==='updated'){
                    alert('적용 되었습니다.');
                    return;
                }
            })
        }
    },
}