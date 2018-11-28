<template>
    <div>
        父亲
        {{info}}
        <child  :title="msg" @info='hand' />
    </div>
</template>
<script>
import child from './son'
export default {
    name:'parent',
    data(){
        return{
            msg:'儿子儿子，我是你爸爸',
            info:''
        }
    },
    components:{
        child
    },
    methods:{
        hand(data){
            this.info = data
        }
    }
}
</script>
<style>

</style>
