import {parseCatImages, type CatImage} from "./cat-image.ts";

const FAVORITE_CATS_STORAGE_KEY = "favorite-cats-v1";

export function readFavoriteCats(): CatImage[] {
	const rawValue = localStorage.getItem(FAVORITE_CATS_STORAGE_KEY);
	if (!rawValue) {
		return [];
	}

	try {
		return parseCatImages(JSON.parse(rawValue) as unknown);
	} catch {
		return [];
	}
}

export function writeFavoriteCats(cats: CatImage[]) {
	localStorage.setItem(FAVORITE_CATS_STORAGE_KEY, JSON.stringify(cats));
}
