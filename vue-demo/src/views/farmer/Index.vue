<template>
    <div>
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        <a-breadcrumb>
            <a-breadcrumb-item v-for="item in items">
                <a href={item.url}>{{item.name}}</a>
            </a-breadcrumb-item>
        </a-breadcrumb>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <!--<BreadList/>-->
        <MenuList/>
    </div>
</template>

<script>
    import Vue from 'vue';
    //import BreadList from '@/components/BreadList';
    import MenuList from '@/components/MenuList';
    import { Button,Breadcrumb } from 'ant-design-vue';
    Vue.use(Button);
    Vue.use(Breadcrumb);
    export default {
        name: "farmerIndex",
        components: {
            //BreadList,
            MenuList
        },
        data() {
            return {
                items: [{
                    'name': 'Home',
                    'url': ''
                },{
                    'name': 'About',
                    'url': 'http://www.baidu.com'
                },{
                    'name': 'Help',
                    'url': 'http://www.baidu.com'
                },{
                    'name': 'Contact',
                    'url': ''
                }]
            }
        }
    }
</script>

<style scoped>

</style>