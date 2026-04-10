import {createFileRoute} from "@tanstack/react-router";
import {PageMessage} from "../components/page-message.tsx";
import {CatsGrid} from "../components/cats-grid.tsx";
import {useFavoriteCats} from "../hooks/use-favorite-cats.tsx";

export const Route = createFileRoute("/favorites")({
	component: FavoriteCatsPage,
});

function FavoriteCatsPage() {
	const {favoriteCats, favoriteIds, toggleFavorite} = useFavoriteCats();

	if (favoriteCats.length === 0) {
		return (
			<PageMessage>Добавьте котиков в любимые на вкладке "Все котики".</PageMessage>
		);
	}

	return (
		<CatsGrid
			cats={favoriteCats}
			favoriteIds={favoriteIds}
			onToggleFavorite={toggleFavorite}
		/>
	);
}
