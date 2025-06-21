export const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://adoptnest-server.onrender.com/api";

// export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Get Banner
export async function getBannerItems() {
  const res = await fetch(`${BASE_URL}/ui/banners`, {
    // next: { revalidate: 60 }, // cache for 60s, or use { cache: 'no-store' } to disable
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch banner items");
  }
  return res.json();
}

// Get Category
export async function getCategoryItems() {
  const res = await fetch(`${BASE_URL}/ui/category`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch category items");
  }
  return res.json();
}

// Get Category By ID
export async function getCategoryDetails(categoryId) {
  const res = await fetch(`${BASE_URL}/ui/category/${categoryId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch category Details");
  }
  return res.json();
}

// Get Public Pet Data
export async function getPetItems() {
  const res = await fetch(`${BASE_URL}/pets/home`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch pets");
  }
  return res.json();
}

// Get Pet by Category ID
export async function getPetsByCategory(categoryId, page = 1) {
  try {
    const res = await fetch(
      `${BASE_URL}/ui/pet/category/${categoryId}?page=${page}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch pets");
    const data = await res.json();
    return { petsData: data };
  } catch (error) {
    console.error(error.message);
    return { petsData: null };
  }
}

// Get Pet Details
export async function getPetDetails(petId) {
  try {
    const res = await fetch(`${BASE_URL}/ui/pet/${petId}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch pet details");
    const data = await res.json();
    return { petData: data };
  } catch (error) {
    console.error(error.message);
    return { petData: null };
  }
}

// Get all Pet grouped by Category
export async function getAllPetByCategory() {
  const res = await fetch(`${BASE_URL}/ui/pets/grouped-by-category`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
}
