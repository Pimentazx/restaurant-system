import { prisma } from "../../config/postgres.js";

export const create = (data) =>
  prisma.reservation.create({ data });

export const list = () =>
  prisma.reservation.findMany();