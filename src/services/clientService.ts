import { get, ref, remove, set, update } from "firebase/database";

import { Client } from "../types/client";
import { db } from "../config/firebase";

export const clientService = {
  async createClient(client: Client): Promise<void> {
    try {
      await set(ref(db, `clients/${client.id}`), client);
    } catch (error) {
      throw new Error(`Failed to create client: ${error}`);
    }
  },

  async getClientById(clientId: string): Promise<Client | null> {
    try {
      const snapshot = await get(ref(db, `clients/${clientId}`));
      return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
      throw new Error(`Failed to get client: ${error}`);
    }
  },

  async getAllClients(): Promise<Client[]> {
    try {
      const snapshot = await get(ref(db, "clients"));
      return snapshot.exists() ? Object.values(snapshot.val()) : [];
    } catch (error) {
      throw new Error(`Failed to get clients: ${error}`);
    }
  },

  async updateClient(
    clientId: string,
    updates: Partial<Client>
  ): Promise<void> {
    try {
      await update(ref(db, `clients/${clientId}`), updates);
    } catch (error) {
      throw new Error(`Failed to update client: ${error}`);
    }
  },

  async deleteClient(clientId: string): Promise<void> {
    try {
      await remove(ref(db, `clients/${clientId}`));
    } catch (error) {
      throw new Error(`Failed to delete client: ${error}`);
    }
  },
};

export const mockClients: Client[] = [
  {
    id: "client-1",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "+1-555-0001",
    address: "123 Oak Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    createdAt: new Date(),
    updatedAt: new Date(),
    assignedToUserId: "user-1",
  },
  {
    id: "client-2",
    firstName: "Emma",
    lastName: "Johnson",
    email: "emma.j@example.com",
    phone: "+1-555-0002",
    address: "456 Maple Ave",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    createdAt: "2023-01-02T09:00:00Z",
    updatedAt: "2023-01-02T09:00:00Z",
    assignedToUserId: "user-2",
  },
  {
    id: "client-3",
    firstName: "Michael",
    lastName: "Brown",
    email: "m.brown@example.com",
    phone: "+1-555-0003",
    address: "789 Pine Road",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    createdAt: "2023-01-03T10:00:00Z",
    updatedAt: "2023-01-03T10:00:00Z",
    assignedToUserId: "user-1",
  },
  {
    id: "client-4",
    firstName: "Sarah",
    lastName: "Davis",
    email: "sarah.d@example.com",
    phone: "+1-555-0004",
    address: "321 Cedar Lane",
    city: "Houston",
    state: "TX",
    zipCode: "77001",
    createdAt: "2023-01-04T11:00:00Z",
    updatedAt: "2023-01-04T11:00:00Z",
    assignedToUserId: "user-3",
  },
  {
    id: "client-5",
    firstName: "David",
    lastName: "Wilson",
    email: "d.wilson@example.com",
    phone: "+1-555-0005",
    address: "654 Birch Blvd",
    city: "Phoenix",
    state: "AZ",
    zipCode: "85001",
    createdAt: "2023-01-05T12:00:00Z",
    updatedAt: "2023-01-05T12:00:00Z",
    assignedToUserId: "user-2",
  },
];
