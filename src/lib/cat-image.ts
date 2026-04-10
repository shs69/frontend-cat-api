export type CatImage = {
	id: string;
	url: string;
	width?: number;
	height?: number;
};

export function parseCatImages(payload: unknown): CatImage[] {
	if (!Array.isArray(payload)) {
		return [];
	}

	const cats: CatImage[] = [];

	for (const item of payload) {
		if (
			typeof item !== "object" ||
			item === null ||
			!("id" in item) ||
			!("url" in item) ||
			typeof item.id !== "string" ||
			typeof item.url !== "string"
		) {
			continue;
		}

		const nextItem: CatImage = {
			id: item.id,
			url: item.url,
		};

		if ("width" in item && typeof item.width === "number") {
			nextItem.width = item.width;
		}

		if ("height" in item && typeof item.height === "number") {
			nextItem.height = item.height;
		}

		cats.push(nextItem);
	}

	return cats;
}
