import {makeAutoObservable} from "mobx";
import UserApi from '../Api/UserApi';

export default class UserState {
    constructor() {
        this._isAuth = false;
        this._user = {};

        makeAutoObservable(this);
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth;
    }

    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    logout() {
        localStorage.clear();

        this.setIsAuth(false);
    }

    async checkIsAuth() {
        this.setIsAuth(await UserApi.check());
        return this.isAuth;
    }
}