import type { CatImage } from "../lib/cat-image.ts";
import { CatCard } from "./cat-card.tsx";

type CatsGridProps = {
	cats: CatImage[];
	favoriteIds: Set<string>;
	onToggleFavorite: (cat: CatImage) => void;
};

export function CatsGrid({ cats, favoriteIds, onToggleFavorite }: CatsGridProps) {
	return (
		<section className="grid w-full grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:gap-4 lg:grid-cols-[repeat(auto-fill,minmax(190px,1fr))] lg:gap-12 xl:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] xl:gap-10">
			{cats.map((cat) => (
				<CatCard
					key={cat.id}
					cat={cat}
					isFavorite={favoriteIds.has(cat.id)}
					onToggleFavorite={onToggleFavorite}
				/>
			))}
		</section>
	);
}
