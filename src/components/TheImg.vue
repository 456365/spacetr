<template>
    <div class="box">
        <h2>马威的静态图片</h2>
        <img src="../assets/images/1.jpg">
        <img src="../assets/images/2.jpg">
        <img src="../assets/images/3.jpg">
        <h2>马威的动态图片</h2>
        <img :src="img[0]">
        <img :src="img[1]">
        <h2>批量动态图片</h2>
        <img :src="showPic(v)" v-for="(v,i) in arr" :key="i">

    </div>
    
</template>

<script>
import MyImg from "../assets/images/1.jpg"
import MyImg2 from "../assets/images/2.jpg"
    export default {
        methods: {
            showPic(name){
                return new URL(`../assets/images/${name}`, import.meta.url).href
            }
        },
        data() {
            return {
                img:[MyImg,MyImg2],
                arr:["3.jpg","5.jpg","6.jpg"]   
            }
        },
    }
</script>

<style scoped>

</style>