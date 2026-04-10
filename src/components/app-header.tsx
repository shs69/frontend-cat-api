import { Link, useLocation } from "@tanstack/react-router";

const tabClassName =
	"flex h-16 items-center px-5 text-sm text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white";

export function AppHeader() {
	const pathname = useLocation({
		select: (location) => location.pathname,
	});

	const isFavoritesRoute = pathname === "/favorites";

	return (
		<header className="bg-[#2196F3] px-3 sm:px-6 md:px-10 lg:px-15.5">
			<nav className="flex">
				<Link
					to="/"
					className={`${tabClassName} ${isFavoritesRoute ? "hover:bg-[#1E88E5]" : "bg-[#1E88E5]"}`}
				>
					Все котики
				</Link>
				<Link
					to="/favorites"
					className={`${tabClassName} ${isFavoritesRoute ? "bg-[#1E88E5]" : "hover:bg-[#1E88E5]"}`}
				>
					Любимые котики
				</Link>
			</nav>
		</header>
	);
}
