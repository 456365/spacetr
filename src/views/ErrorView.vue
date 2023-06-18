<template>
    <div class="box">
        <h1>马威的404页面</h1>
        <h4>您访问的页面不存在。</h4>
        <router-link to="/">返回首页</router-link>
        <img src="../assets/images/404.jpg">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .box{
        margin: 8px;
        padding: 6px;
    }
    .box a{
        list-style: none;
    }
    .box img{
        width: 100%;
    }
</style>