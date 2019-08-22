<template>
    <a-breadcrumb>
        <a-breadcrumb-item v-for="item in items":key="item.path" :to="item.path">
            {{item.name}}
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
    import Vue from 'vue';
    import { Breadcrumb } from 'ant-design-vue';
    Vue.use(Breadcrumb);
    export default {
        name: "breadList",
        data() {
            return {
                items: []
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created(){
            this.getBreadcrumb()
        },
        methods:{
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name);
                const first = matched[0];
                console.log(first);
                if (first && first.name.trim().toLocaleLowerCase() !== 'FarmerIndex'.toLocaleLowerCase()) {
                    matched = [{ path: '/farmerIndex', meta: { title: 'farmerIndex' }}].concat(matched)
                }
                this.items = matched
            }
        }
    };
</script>

<style scoped>

</style>