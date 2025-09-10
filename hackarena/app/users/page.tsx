"use client";

import { useState, useEffect } from "react";
import { createUser, listUsers, deleteUser, updateUser } from "@/actions/users"; // adjust path
import { users } from "@/db/schema"; // <-- import your schema

// ✅ Use Drizzle’s inferred type (no more mismatches)
type User = typeof users.$inferSelect;

export default function UsersPage() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "participant",
  });

  async function fetchUsers() {
    setLoading(true);
    try {
      const result = await listUsers();
      setUsersList(result); // ✅ now result matches User[]
    } catch (err) {
      console.error(err);
      alert("Failed to fetch users");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();
    try {
      await createUser(formData);
      setFormData({ email: "", name: "", role: "participant" });
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    }
  }

  async function handleDeleteUser(id: string) {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Error deleting user");
    }
  }

  async function handleUpdateUser(id: string) {
    try {
      await updateUser(id, { name: "Updated Name" });
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Error updating user");
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Users Management</h1>

      {/* Create user form */}
      <form
        onSubmit={handleCreateUser}
        className="p-4 border rounded space-y-3 w-96"
      >
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            className="border p-2 w-full rounded"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label className="block text-sm">Name</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm">Role</label>
          <select
            className="border p-2 w-full rounded"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="participant">Participant</option>
            <option value="judge">Judge</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create User
        </button>
      </form>

      {/* User list */}
      <div>
        <h2 className="text-xl font-semibold">All Users</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="divide-y">
            {usersList.map((user) => (
              <li key={user.id} className="py-2 flex justify-between">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-xs">Role: {user.role}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleUpdateUser(user.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
