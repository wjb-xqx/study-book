<template>
    <div>
        <img v-lazy="imgObj" />
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgObj: {
                // 正常图片 错误图片  加载中图片
        src: require('../assets/22188.jpg'),
        error: require('../assets/psb (1).jpg'),
        loading: require('../assets/logo.png')
      }
        }
    }
}
</script>
<style>

</style>
