import {host, authInterceptor} from "./Main";
import jwtDecode from "jwt-decode";
import Context from "../Context";

class EmailApi {
    static async send(to) {
        const {data} = await host.post('api/email/send', {to});

        return data;
    }

    static async sendQuestions(name, email) {
        const {data} = await host.post('api/email/send-questions', {name, email});

        return data;
    }
}

export default EmailApi;