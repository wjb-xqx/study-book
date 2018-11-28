<template>
    <dir>
        外面人{{getCount}}
        <button @click="add">jiajia</button>
    </dir>
</template>
<script>
export default {
    name:'out',
    data(){
        return {

        }
    },
    computed:{
        getCount(){
            return this.$store.getters.getSate;
        }
    },
    methods:{
        add(){
            this.$store.commit('increment')
        }
    }
}
</script>
<style>

</style>
