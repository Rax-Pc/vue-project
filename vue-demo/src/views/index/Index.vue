<template>
    <a-layout class="p-layout">
        <HeadPart/>
        <a-layout class="p-sub-layout">
            <a-layout-sider>
                <MenuList/>
            </a-layout-sider>
            <a-layout-content>
                <ContentIndex/>
            </a-layout-content>
        </a-layout>
        <FootPart/>
    </a-layout>
</template>

<script>
    import Vue from 'vue';
    import HeadPart from '@/components/HeadPart';
    import MenuList from '@/components/MenuList';
    import ContentIndex from '@/components/ContentIndex';
    import FootPart from '@/components/FootPart';
    import {Layout} from 'ant-design-vue';

    Vue.use(Layout);
    export default {
        name: "index",
        components: {
            HeadPart,
            MenuList,
            ContentIndex,
            FootPart
        }
    }
</script>

<style lang="less" scoped>
    .p-sub-layout{
        .ant-layout-content{
            padding: 0 20px;
            min-height: 500px;
        }
        .ant-layout-sider{
            background: #fff;
            position: relative;
            flex: 0 0 auto!important;
            max-width: initial!important;
            min-width: auto!important;
            width: auto!important;
        }
    }
</style>