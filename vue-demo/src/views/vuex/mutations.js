//更改用户状态信息
export const userStatus = (state, user) => {
    if (user) {
        state.currentName = user;
    } else if (user === null) {
        //退出的时候清空sessionStorage里的东西
        sessionStorage.setItem('loginName',null);
        state.currentName = null;
    }
}