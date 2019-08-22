<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
    html,body {
        width: 100%;
        height: 100%;
    }
    body{
        background-color: #f0f2f5!important;
    }
    #app {
        font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #444;
        height: 100%;
    }
    .p-part{
        background: #fff;
        padding: 0 30px;
    }
</style>
