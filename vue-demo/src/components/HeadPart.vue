<template>
    <div class="p-part head-part">
        <a-row>
            <a-col :span="12">
                <div class="p-left">
                    <img src="../assets/logo.png" />
                    <em>|</em>
                    <span>vue服务平台</span>
                </div>
            </a-col>
            <a-col :span="12">
                <div class="p-right">
                    <a-dropdown>
                        <a class="ant-dropdown-link">
                            <a-icon type="down" />{{this.$store.state.currentName}}
                        </a>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;" @click="loginOut()">退出</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Row,Col,Dropdown} from 'ant-design-vue';
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Dropdown);
    export default {
        name: "headPart",
        created (){
            this.isLogo()
        },
        methods:{
            loginOut(){
                this.$router.push('/loginIndex');
            },
            isLogo() {
                if (sessionStorage.getItem('loginName')) {
                    this.$store.commit('userStatus',sessionStorage.getItem('loginName'))
                }else{
                    this.$router.push('/loginIndex');
                }
            }
        }
    }
</script>

<style lang ="less" scoped>
    .p-left{
        text-align: left;
        height: 65px;
        line-height: 50px;
        padding: 10px 0;
        img{
            display: inline-block;
            height: 100%;
        }
        em{
            font-style: normal;
            display: inline-block;
            margin: 0 10px;
        }
        span{
            display: inline-block;
            font-weight: 600;
        }
    }
    .p-right{
        text-align: right;
        height: 65px;
        .ant-dropdown-link{
            color: #444;
            font-weight: 600;
            line-height: 65px;
        }
    }
</style>