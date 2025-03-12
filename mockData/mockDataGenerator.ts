import { Client } from "@/src/types/client";
import { faker } from "@faker-js/faker";

export function createRandomClient(): Client {
  return {
    id: faker.string.uuid(),
    firstName: faker.name.firstName(),
    email: faker.internet.email(),
    lastName: faker.name.lastName(),
    phone: faker.phone.number(),
    address: faker.address.streetAddress(),
    notes: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    assignedToUserId: faker.string.uuid(),
  };
}

export const generateNumberOfClients = (numberOfClients: number): Client[] => {
  return faker.helpers.multiple(createRandomClient, {
    count: numberOfClients,
  });
};
