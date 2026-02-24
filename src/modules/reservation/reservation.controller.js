import * as service from "./reservation.service.js";

export const createReservation = async (req, res) => {
  const reservation = await service.create(req.body);
  res.status(201).json(reservation);
};

export const listReservations = async (req, res) => {
  const reservations = await service.list();
  res.json(reservations);
};