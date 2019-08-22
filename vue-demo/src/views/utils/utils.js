import {notification} from 'ant-design-vue';

const CommonUtils = {
    /*
    * mock模拟数据公共头部
    * */
    mockFn : function () {
        return 'https://www.easy-mock.com/mock/5d254865bdbb760a45265fb9/test01';
    },
    /*
    * 提示浮层
    * */
    simpleNotification : function (type, title, msg) {
        return notification[type]({
            message: title,
            description: msg,
            duration: 3
        });
    },
}
export default CommonUtils;