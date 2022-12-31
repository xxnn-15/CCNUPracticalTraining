import { createStore } from 'vuex'
import axios from 'axios'
import Qs from 'qs'

import { HostURL } from '@/axios'

export default createStore({
  state: {
    userLogin: false,
    token: "",
    userInfo: {
      email: "",
      nickname: "",
      userImg: ""
    }
  },

  getters: {

  },

  mutations: {
    setToken(state, token){
      state.token = token
    },
    setUserLogin(state, bool) {
      state.userLogin = bool
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    tryAutoLogin({ commit }, token) {
      // console.log(token)
      axios({
        method:'post',
        url: HostURL + 'api/getUserInfo/',
        data: Qs.stringify({
          token: token
        })
      })
      .then((res)=>{
        // console.log(res.data)
        let userInfo = {
          email: res.data.email,
          nickname: res.data.nickname,
          userImg: HostURL + 'upload/' + res.data.userImg
        }
        // 判断是否成功登录
        if(res.data.status == 'available'){
          // 成功登录
          commit('setUserLogin', true)
          commit('setUserInfo', userInfo)
        }
        else {
          // 客户端返回的 status为 unavailable ，代表自动登录失败, 系统进入未登录状态
          commit('setUserLogin', false)
          commit('setUserInfo', userInfo)
        }
      })
    },

    logOut({commit}) {
      // 删除浏览器中的 token ,防止路由守卫自动登录
      localStorage.removeItem('token')
      // 改变 token 的值为空，让app.vue 中的监视器进行自动登录（登录失败）
      commit('setToken', '')
    }
  },

  modules: {

  }
})
