<template>
  <div>
   <!-- tenplate中必须有一个div包裹全部数据，有且只有一个 -->
    <!-- 读取数据，必须在data中定义，
   1. 双括号-插值表达式可以来读取数据，花括号里面只能存在单行语句不能为中文，
    用中文引用必须用引号，里面可以进行数字加减，三元表达式<h1>{{ msg }}</h1>
    2. v-html指令 渲染文本 <h2 v-html="msg"></h2>
    3. v-text 渲染文本  <h2 v-text="msg"></h2>-->
    <!-- v-bind 绑定 <span :class="haha"></span> 可以让属性变活-->
    <!-- vue中v-开的都是内置指令 -->

    <!-- 条件渲染
    v-if条件是true就出现 是以创建删除元素显隐 v-else 
    v-show  是以隐藏 显示   频繁切换就用此
     <h2 v-if="show">
      <span>haha</span>
    </h2>
    <h2 v-else>else</h2>
     -->

     <!-- 列表渲染（循环）
     循环数组li v-for="(item,i) in list" v-key="i">{{item}}</li>
     循环对象:<li v-for="(item,index) in user" v-key="index">{{item.name}}{{item.age}}</li>
      -->
    <!-- 事件监听
    v-on -->
  <!-- <button @click="show">按钮</button>

  <input type="text" placeholder="事件监听" @keyup="getww"> -->


  <!-- axios发送请求
  npm i axios
  引包import Axios  from 'axios'
  Vue.prototype.$axios = Axios
http://www.wwtliu.com/sxtstu/可以在这个去找后台服务地址
 -->
   <!-- <ul>
     <li v-for="news in names">
       <p>{{news.content}}</p>
       <p>{{news.title}}</p>
       <img :src="news.img" alt="">
     </li>
   </ul> -->



  </div>


</template>

<script>
export default {
  data () {
    return {
       names:[]
    }
  },
  methods:{
    show(){
      alert('1')
    },
    getww(){
      console.log('8')
    }
  },
  created(){
    //组件被创建时候执行
    //获取数据
    // this.$axios("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
    // .then(res=>{
    //   console.log(res.data)
    //   this.names=res.data.banner
    // })
    // .catch(error=>{
    //   console.log(error.data)
    // })
    // 请求有参数1
  //   this.$axios("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php？type=junshi&count=30")
  //   .then(res=>{
  //     console.log(res.data)
  //   })
  //   .catch(error=>{
  //     console.log(error.data)
  //   })
  // }
  // 请求有参数2,推荐使用
  // this.$axios("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php？",{
  //   params:{
  //     type:'junshi',
  //     count:30
  //   }
  // })
  //   .then(res=>{
  //     console.log(res.data)
  //   })
  //   .catch(error=>{
  //     console.log(error.data)
  //   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
