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
