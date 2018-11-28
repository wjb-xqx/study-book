import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0  //状态 任何组件都可以返回
  },
  mutations:{
    increment(state){
      state.count++;
    },
    decrease(state){
      state.count--;
    }
  },
  actions:{
    //context 承上启下  可以调用commit执行
    increment(context){
      context.commit('increment')
    },
    decrease(context){
      context.commit('decrease')
    }
  },
  getters:{ //判断不能减到超过0
    getSate(state){
      return state.count >0? state.count :0
    }
  }
})
