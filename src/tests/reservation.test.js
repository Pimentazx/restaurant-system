import request from "supertest";
import app from "../app.js";

describe("Reservations API", () => {

  let restaurantId;

  beforeAll(async () => {

  const restaurant = await request(app)
    .post("/restaurants")
    .send({
      name: "Test Restaurant",
      location: "Test City",
      cuisineType: "Italian",
      capacity: 50
    });

  restaurantId = restaurant.body.id;

});

  it("should create a reservation", async () => {

    const res = await request(app)
      .post("/reservations")
      .send({
        restaurantId,
        customerName: "Guilherme",
        reservationDate: new Date("2026-03-10"),
        numberOfPeople: 2
      });


    expect(res.statusCode).toBe(201);
    expect(res.body.customerName).toBe("Guilherme");

  });

});