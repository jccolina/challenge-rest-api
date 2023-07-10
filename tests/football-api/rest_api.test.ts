import Request from "../../core/rest_api/request";

describe("Football REST API", () => {
    let request: Request;
    const baseUrl = process.env.BASE_URL || '';

    beforeAll(() => {
        request = new Request(baseUrl);
    });

    test("GET /matches returns 200", async () => {
        const response = await request.get('/matches');
        expect(response.statusCode).toBe(200);
    })

    test("PUT /areas returns 405", async () => {
        const newData = {
            "name": "Afghanistan",
            "countryCode": "AFG",
            "parentAreaId": 2014,
            "parentArea": "Asia"
        };
        const id = 2000;
        const response = await request.put(`/areas/${id}`, newData);
        expect(response.statusCode).toBe(405);
        expect(response.body.message).toBe('Method not allowed. Use GET method only.');
    })

    test("POST /teams returns 403", async () => {
        const teamsData = {
            "name": "dev football club"
        };
        const response = await request.post('/teams', teamsData);
        expect(response.statusCode).toBe(403);
        expect(response.body.message).toBe('The resource you are looking for is restricted and apparently not within your permissions. Please check your subscription.');
    })
})