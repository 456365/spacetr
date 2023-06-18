<template>
    <div class="wrap">
    <h1>马威的首页</h1>
    <div class="link">
        <router-link to="/img">图片</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/mylink">我的</router-link>
        <router-link to="/auto">汽车</router-link>
        <router-link to="/qiche">汽车重定向</router-link> <!-- 不会显示别名 -->
        <router-link to="/car">汽车别名</router-link> <!-- 显示别名 -->
        <router-link to="/xxxx">404</router-link>


    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    h1{
        text-align: center;
        text-shadow: 5px 5px 5px #036;
    }
    .link{
        display: flex;
        flex-wrap: wrap;
        min-width: 1200px;
        margin: 8px;
    }
    .link>a{
        width: 150px;
        line-height: 33px;
        background-color: aquamarine;
        text-align: center;
        margin: 8px;
        font-size: 14px;
        font-weight: bold;
        transition: all .6s;
        overflow: hidden;
        list-style: none;
    }
    .link>a:hover{
        background-color: cadetblue;
        letter-spacing: 16px;
    }
</style>