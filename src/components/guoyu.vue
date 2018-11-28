<template>
    <h2>post</h2>
</template>
<script>
export default {
    data(){
        return{}
    },
    //post请求注意axios接收的post请求参数的格式是form-data：？name=iwen&age=20格式，
    //x-www-form-urlencoded：{name：‘iwen’，age：20}
    //解决就引入第三方库import qs from 'qs'
    created(){
        var url = this.HOST+"/getallbanner";
        console.log(url)
        this.$axios.get(url,{
            params:{
                count:10,
                start:0
            }
        })
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
