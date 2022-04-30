import {host, authInterceptor} from "./Main";
import jwtDecode from "jwt-decode";
import Context from "../Context";

class UserApi {
    static login = async (email, password) => {
        const {data} = await host.post('api/user/login', {email, password});
        localStorage.setItem('token', data.token)

        return data.token;
    }

    static register = async (name, email, password, gender) => {
        const response = await host.post('api/user/registration', {email, password, name, gender, role: 1});

        return response;
    }

    static  check = async () => {

        try {
            const response = await host.get('api/user/check',{});
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                return true
            }

            return false;
        } catch (e) {
            console.log(e);
            return false
        }

    }

    static async update(data) {
        await host.put('api/user/update', data);
    }

    static async getUser(id = false, getTags = false) {
        if (id === false) {
            id = jwtDecode(localStorage.getItem('token')).id;
        }

        if (!id) {
            return false;
        }

        const response = await host.post('api/user/get-by-id', {id, getTags});

        if (response.status !== 200) {
            return false
        }

        return response.data;
    }

    static async getByFilter(filter, getTags) {
        return await host.post('api/user/get-by-filter', {filter, getTags});
    }
}

export default UserApi;