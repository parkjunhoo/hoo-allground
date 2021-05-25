import axios from 'axios'
import router from '../../../router';
axios.defaults.headers['Pragma'] = 'no-cache';
export default {
    state:{
        logged:false,
        admin:false,
    },
    mutations:{
        set_logged(state,bool){
            state.logged = bool;
        },
        set_admin(state,bool){
            state.admin = bool;
        },
    },
    actions:{
        get_auth_check(m){
            axios.get('api/auth/check')
            .then((res)=>{
                if(res.data==='not_logged'){
                    m.commit('set_logged',false);
                    return;
                }
                if(res.data.success){
                    m.commit('set_logged',true);
                }
                if(res.data.admin) m.commit('set_admin',true);
            })
        },
        get_auth_logout(m){
            axios.get('api/auth/logout')
            .then((res)=>{
                if(res.data==='logged_out'){
                    m.commit('set_logged',false);
                    alert('로그아웃 되었습니다.');
                }
            })
        },
        post_auth_login(m,input){
            axios.post('api/auth/login',{
                id:input.id,
                password:input.password
            })
            .then((res)=>{
                if(res.data==='already_logged_in'){
                    alert('이미 로그인 되어있습니다.');
                    return;
                }
                if(res.data==='logged_in'){
                    m.commit('set_logged',true);
                    alert('로그인 되었습니다.');
                    router.push('/admin');
                    return;
                }
                if(res.data==='not_password'){
                    alert('비밀번호가 틀립니다.');
                    return;
                }
                alert('아이디를 다시 확인해주세요.');
            })
        },
    },
    modules:{
        
    },
}