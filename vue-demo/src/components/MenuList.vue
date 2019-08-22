<template>
    <div>
        <a-button type="primary" @click="toggleCollapsed">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-menu
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['sub1']"
                mode="inline"
                theme="light"
                :inlineCollapsed="collapsed"
        >
            <a-menu-item key="1">
                <a-icon type="pie-chart" />
                <span>Option 1</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Button, Menu, Icon} from 'ant-design-vue';
    Vue.use(Button);
    Vue.use(Menu);
    Vue.use(Icon);
    export default {
        name: 'menu-list',
        data () {
            return {
                collapsed: false
            }
        },
        methods: {
            toggleCollapsed () {
                this.collapsed = !this.collapsed
            }
        },
    }
</script>

<style lang="less" scoped>
    .p-sub-layout{
        .ant-menu-inline{
            border-right: 0!important;
        }
        .ant-btn{
            position: absolute;
            right: -48px;
            top: 8px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
</style>