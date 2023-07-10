import * as request from "supertest";

export default class Request {
    baseUrl = '';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public get(route: string): request.Test {
        return request(this.baseUrl)
            .get(route);
    }

    public post(route: string, body: object): request.Test {
        return request(this.baseUrl)
            .post(route)
            .send(body);
    }

    public put(route: string, body: object): request.Test {
        return request(this.baseUrl)
            .put(route)
            .send(body);
    }
}