import * as request from "supertest";
const baseUrl = process.env.BASE_URL;

export default class Request {
    baseUrl = '';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public get(route: string): request.Test {
        return request(baseUrl)
            .get(route);
    }

    public post(route: string, body: object): request.Test {
        return request(baseUrl)
            .post(route)
            .send(body);
    }

    public put(route: string, body: object): request.Test {
        return request(baseUrl)
            .put(route)
            .send(body);
    }
}