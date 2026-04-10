import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatsPage } from "../api/cats-api.ts";
import type { CatImage } from "../lib/cat-image.ts";

type CatsFeedData = InfiniteData<CatImage[], number> & { cats: CatImage[] };

const EMPTY_CATS: CatImage[] = [];

const selectCatsFeed = (
	data: InfiniteData<CatImage[], number>,
): CatsFeedData => ({
	...data,
	cats: data.pages.flat(),
});

export function useCatsFeed() {
	const query = useInfiniteQuery<
		CatImage[],
		Error,
		CatsFeedData,
		readonly ["cats"],
		number
	>({
		queryKey: ["cats"] as const,
		queryFn: ({ pageParam }) => fetchCatsPage(pageParam),
		initialPageParam: 0,
		getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
			lastPageParam + 1,
		select: selectCatsFeed,
	});

	return {
		...query,
		cats: query.data?.cats ?? EMPTY_CATS,
	};
}
