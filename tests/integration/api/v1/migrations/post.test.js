import { cleanDatabase } from "../../../../utils/database.js";
import orchestrator from "tests/orchestrator.js";

beforeAll( async () => {
    await orchestrator.waitForAllServices();
    await cleanDatabase();
});

test("POST to /api/v1/migrations should return 201", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST"
    });

    expect(response.status).toBe(201)
    
    const responseBody = await response.json();

    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBeGreaterThan(0); 
})

test("POST to /api/v1/migrations should return 200 in second time return empty array", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST"
    });

    expect(response.status).toBe(200)
    
    const responseBody = await response.json();
    
    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBe(0);
})
