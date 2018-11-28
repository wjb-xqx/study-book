<template>
    <h2>post</h2>
</template>
<script>
import qs from 'qs'

export default {
    data(){
        return{}
    },
    //post请求注意axios接收的post请求参数的格式是form-data：？name=iwen&age=20格式，
    //x-www-form-urlencoded：{name：‘iwen’，age：20}
    //解决就引入第三方库import qs from 'qs'
    created(){
        this.$axios.post('/sxtstu/blueberrypai/login.php',
        qs.stringify({
            username:'iwen@qq.com',
            password:'iwen123'
        }))
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style>

</style>
