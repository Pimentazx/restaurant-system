import request from "supertest";
import app from "../app.js";

describe("Restaurant API", () => {

  it("should create a restaurant", async () => {
    const response = await request(app)
      .post("/restaurants")
      .send({
        name: "Teste",
        location: "SP",
        cuisineType: "Italiana",
        capacity: 50
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Teste");
  });

});