<template>
    <div class="p-login">
        <div class="p-div">
            <h2>欢迎登录</h2>
            <a-form
                    id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit">
                <a-form-item>
                    <a-input v-decorator="['userName',{ rules: [{ required: true, message: '用户名不为空 !' }] }]" placeholder="请输入用户名">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="[ 'password',{ rules: [{ required: true, message: '密码不为空 !' }] }]" type="password" placeholder="请输入密码">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox v-decorator="['remember',{valuePropName: 'checked',initialValue: true,}]">记住我</a-checkbox>
                    <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
                </a-form-item>
            </a-form>
            <!--<a-button type="primary" @click="login">登录</a-button>-->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Button, Form, Input, Checkbox} from 'ant-design-vue';
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(Input);
    Vue.use(Checkbox);
    import axios from 'axios';
    import CommonUtils from '../utils/utils';

    export default {
        name: "loginIndex",
        beforeCreate () {
            sessionStorage.removeItem('loginName');
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault();
                let this_ = this;
                this_.form.validateFields((err, values) => {
                    if (!err) {
                        //console.log('Received values of form: ', values);
                        this_.getInfo(values.userName, values.password);
                    }
                });
            },
            getInfo(user,pwd) {
                let this_ = this;
                let requestBody = {
                    'userName': user,
                    'password': pwd
                };
                axios({
                    method: 'POST',
                    url: CommonUtils.mockFn() + '/getInfo',
                    data:requestBody
                }).then(function (response) {
                    if (response.data['return_code'] === 'SUCCESS') {
                        //将用户名放入sessionStorage
                        sessionStorage.setItem('loginName', user);
                        this_.$store.dispatch('setUser', user);
                        this_.$router.push('/index');
                    } else {
                        CommonUtils.simpleNotification('error','网络异常，请稍后重试');
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .p-login{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .p-div {
            min-width: 450px;
            margin: 0 37%;
            background: #fff;
            padding: 45px 35px 25px 35px;
            border-radius: 4px;
            box-shadow: 0 0 0 10px #eee;
            h2{
                text-align: center;
                margin-bottom: 30px;
            }
            button{
                margin-top: 30px;
            }
        }
    }
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
    .ant-input-affix-wrapper .ant-input:not(:first-child) {
        padding-left: 35px!important;
    }
</style>