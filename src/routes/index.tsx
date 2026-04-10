import { createFileRoute } from "@tanstack/react-router";
import { CatsGrid } from "../components/cats-grid.tsx";
import { InfiniteScrollTrigger } from "../components/infinite-scroll-trigger.tsx";
import { PageMessage } from "../components/page-message.tsx";
import { useCatsFeed } from "../hooks/use-cats-feed.ts";
import { useFavoriteCats } from "../hooks/use-favorite-cats.tsx";
import { useInfiniteScroll } from "../hooks/use-infinite-scroll.ts";

export const Route = createFileRoute("/")({
	component: AllCatsPage,
});

function AllCatsPage() {
	const { favoriteIds, toggleFavorite } = useFavoriteCats();
	const { cats, error, isError, isFetchingNextPage, isPending, fetchNextPage } =
		useCatsFeed();

	const loadMoreRef = useInfiniteScroll({
		enabled: !isPending && !isFetchingNextPage && !isError,
		onIntersect: () => {
			void fetchNextPage();
		},
	});

	return (
		<>
			{isPending ? <PageMessage>Загружаем котиков...</PageMessage> : null}

			{isError ? (
				<PageMessage tone="error">
					Не удалось загрузить котиков: {error.message}
				</PageMessage>
			) : null}

			{cats.length > 0 ? (
				<CatsGrid
					cats={cats}
					favoriteIds={favoriteIds}
					onToggleFavorite={toggleFavorite}
				/>
			) : null}

			<InfiniteScrollTrigger
				triggerRef={loadMoreRef}
				isFetchingNextPage={isFetchingNextPage}
			/>
		</>
	);
}
