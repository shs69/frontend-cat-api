import { type CatImage, parseCatImages } from "../lib/cat-image.ts";

const CAT_API_BASE_URL = "https://api.thecatapi.com/v1";
const CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY?.trim() || "ylX4blBYT9FaoVd6OhvR";

export async function fetchCatsPage(page: number): Promise<CatImage[]> {
	const params = new URLSearchParams({
		limit: "25",
		page: String(page),
		size: "med",
		order: "DESC",
	});

	const response = await fetch(`${CAT_API_BASE_URL}/images/search?${params.toString()}`, {
		headers: CAT_API_KEY ? { "x-api-key": CAT_API_KEY } : undefined,
	});

	if (!response.ok) {
		throw new Error(`TheCatAPI request failed with status ${response.status}`);
	}

	return parseCatImages(await response.json());
}
