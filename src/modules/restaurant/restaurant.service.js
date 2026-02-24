import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createRestaurant = async (data) => {
  return prisma.restaurant.create({ data });
};

export const listRestaurants = async () => {
  return prisma.restaurant.findMany();
};

export const getRestaurantById = async (id) => {
  return prisma.restaurant.findUnique({ where: { id } });
};

export const deleteRestaurant = async (id) => {
  return prisma.restaurant.delete({ where: { id } });
};