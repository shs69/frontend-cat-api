import type { CatImage } from "../lib/cat-image.ts";

type CatCardProps = {
	cat: CatImage;
	isFavorite: boolean;
	onToggleFavorite: (cat: CatImage) => void;
};

export function CatCard({ cat, isFavorite, onToggleFavorite }: CatCardProps) {
	const base = import.meta.env.BASE_URL;
	return (
		<article className="group relative overflow-hidden bg-white shadow-[0_1px_4px_rgba(0,0,0,0.18)] transition-transform duration-200 ease-out will-change-transform hover:z-10 hover:-translate-y-1 hover:scale-[1.075] hover:shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
			<img
				src={cat.url}
				alt="Котик"
				loading="lazy"
				className="block aspect-square w-full object-cover"
			/>
			<button
				type="button"
				aria-label={isFavorite ? "Убрать котика из любимых" : "Добавить котика в любимые"}
				onClick={() => onToggleFavorite(cat)}
				className="group/icon absolute right-2 bottom-2 h-9 w-9 cursor-pointer border-none bg-transparent p-0 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
			>
				<img
					src={`${base}heart_empty.svg`}
					alt="Добавить в избранное"
					aria-hidden="true"
					className={`absolute inset-0 h-full w-full object-contain transition-opacity ${isFavorite ? "opacity-0" : "opacity-100 group-hover/icon:opacity-0 group-focus-visible/icon:opacity-0"}`}
				/>
				<img
					src={`${base}heart_filled.svg`}
					alt="Добавить в избранное"
					aria-hidden="true"
					className={`absolute inset-0 h-full w-full object-contain transition-opacity ${isFavorite ? "opacity-0" : "opacity-0 group-hover/icon:opacity-100 group-focus-visible/icon:opacity-100"}`}
				/>
				<img
					src={`${base}heart_filled_red.svg`}
					alt="Добавлено в избранное"
					aria-hidden="true"
					className={`absolute inset-0 h-full w-full object-contain transition-opacity ${isFavorite ? "opacity-100" : "opacity-0"}`}
				/>
			</button>
		</article>
	);
}
