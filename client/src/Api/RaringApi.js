import {host, authInterceptor} from "./Main";
import jwtDecode from "jwt-decode";
import Context from "../Context";

class RatingApi {
    static async getUserRating(mentorId) {
        const {data} = await host.post('api/rating/get-user-rating', {mentorId});

        return data;
    }

    static async setRating(mentorId, ratingVal) {
        const {data} = await host.post('api/rating/set-rating', {mentorId, ratingVal});

        return data;
    }
}

export default RatingApi;