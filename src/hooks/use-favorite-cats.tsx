import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";
import type {CatImage} from "../lib/cat-image.ts";
import {readFavoriteCats, writeFavoriteCats} from "../lib/favorites-storage.ts";

type FavoritesContextValue = {
	favoriteCats: CatImage[];
	favoriteIds: Set<string>;
	toggleFavorite: (cat: CatImage) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({children}: PropsWithChildren) {
	const [favoriteCats, setFavoriteCats] = useState<CatImage[]>(() =>
		readFavoriteCats(),
	);

	useEffect(() => {
		writeFavoriteCats(favoriteCats);
	}, [favoriteCats]);

	function toggleFavorite(cat: CatImage) {
		setFavoriteCats((currentCats) => {
			const isAlreadyFavorite = currentCats.some(
				(currentCat) => currentCat.id === cat.id,
			);

			if (isAlreadyFavorite) {
				return currentCats.filter((currentCat) => currentCat.id !== cat.id);
			}

			return [cat, ...currentCats];
		});
	}

	return (
		<FavoritesContext.Provider
			value={{
				favoriteCats,
				favoriteIds: new Set(favoriteCats.map((cat) => cat.id)),
				toggleFavorite,
			}}
		>
			{children}
		</FavoritesContext.Provider>
	);
}

export function useFavoriteCats() {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error("useFavoriteCats must be used within FavoritesProvider");
	}

	return context;
}
