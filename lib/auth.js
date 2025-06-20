// import { BASE_URL } from "./api";

// export async function getCurrentUser() {
//   const res = await fetch(`${BASE_URL}/user/profile`, {
//     credentials: "include",
//     cache: "no-store", // force fresh server call
//   });

//   if (!res.ok) return null;

//   const data = await res.json();
//   return data || null; // <- FIXED
// }
// frontend/lib/api.js (or similar)

import { BASE_URL } from "./api"; // Assuming BASE_URL is correctly defined here or elsewhere

export async function getCurrentUser() {
  const res = await fetch(`${BASE_URL}/user/profile`, {
    credentials: "include",
    cache: "no-store", // force fresh server call
  });

  // Handle non-OK responses (e.g., 401 Not Logged In, 500 Server Error)
  if (!res.ok) {
    // You might want to log the status or message for debugging non-200 responses
    console.error(
      `Failed to fetch user profile: ${res.status} ${res.statusText}`
    );
    return null;
  }

  const data = await res.json();
  console.log("Raw API response data:", data); // For debugging: check the actual structure

  // Directly return the data, as the backend sends the user object at the top level
  return data;
}
