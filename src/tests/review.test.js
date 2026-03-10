import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";
import { connectMongo } from "../config/mongo.js";
import { jest } from "@jest/globals";

jest.setTimeout(15000);

describe("Reviews API", () => {

  const restaurantId = "test-restaurant-id";

  beforeAll(async () => {
    await connectMongo();
  });

  it("should create a review", async () => {

    const res = await request(app)
      .post("/reviews")
      .send({
        restaurantId,
        userName: "Tester",
        rating: 5,
        comment: "Great place",
        visitDate: "2026-03-01"
      });

    expect(res.statusCode).toBe(201);

  });

});

afterAll(async () => {
  await mongoose.connection.close();
});