<template>
    <div>
        儿子:{{getCount}}
        {{title}}
        <button @click="sendMsg">按钮</button>
        <button @click="min">jianjian</button>
        
    </div>
</template>
<script>
export default {
    name:'son',
    data(){
        return{
            info:'enenen'
        }
    },
    props:{
        title:{
            type:String,
            default:''
        }
    },
    methods:{
        sendMsg(){
            this.$emit('info',this.info)
        },
        min(){
            this.$store.commit('decrease')
        }
        
    },
    computed:{
        getCount(){
            return this.$store.getters.getSate;
        }
    }
}
</script>
<style>

</style>
