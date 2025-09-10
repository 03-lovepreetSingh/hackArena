"use server";

import { db } from "../db/index"; // adjust to your db instance path
import { users } from "@/db/schema"; // adjust to your schema path
import { eq } from "drizzle-orm";

// Create a new user
export async function createUser(data: {
  email: string;
  name: string;
  avatar?: string;
  githubLink?: string;
  twitterLink?: string;
  telegramHandle?: string;
  wechatHandle?: string;
  walletAddress?: string;
  role?: string;
}) {
  try {
    const [user] = await db
      .insert(users)
      .values({
        email: data.email,
        name: data.name,
        avatar: data.avatar,
        githubLink: data.githubLink,
        twitterLink: data.twitterLink,
        telegramHandle: data.telegramHandle,
        wechatHandle: data.wechatHandle,
        walletAddress: data.walletAddress,
        role: data.role ?? "participant",
      })
      .returning();

    return user;
  } catch (err) {
    console.error("Error creating user:", err);
    throw new Error("Failed to create user");
  }
}

// Get a user by ID
export async function getUserById(id: string) {
  try {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user ?? null;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw new Error("Failed to fetch user");
  }
}

// Get a user by email
export async function getUserByEmail(email: string) {
  try {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user ?? null;
  } catch (err) {
    console.error("Error fetching user by email:", err);
    throw new Error("Failed to fetch user");
  }
}

// Update a user
export async function updateUser(
  id: string,
  data: Partial<typeof users.$inferInsert>
) {
  try {
    const [updated] = await db
      .update(users)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
      .returning();

    return updated;
  } catch (err) {
    console.error("Error updating user:", err);
    throw new Error("Failed to update user");
  }
}

// Delete a user
export async function deleteUser(id: string) {
  try {
    const [deleted] = await db
      .delete(users)
      .where(eq(users.id, id))
      .returning();
    return deleted;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw new Error("Failed to delete user");
  }
}

// List all users
export async function listUsers() {
  try {
    const result = await db.select().from(users).orderBy(users.createdAt);
    return result;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Failed to list users");
  }
}
