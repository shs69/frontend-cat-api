import { Outlet } from "@tanstack/react-router";
import { FavoritesProvider } from "../hooks/use-favorite-cats.tsx";
import { AppHeader } from "./app-header.tsx";

export function AppShell() {
	return (
		<FavoritesProvider>
			<div className="flex min-h-screen w-full flex-col bg-white">
				<AppHeader />
				<main className="flex-1 w-full px-3 py-3 sm:px-6 md:px-10 md:py-5 lg:p-13">
					<Outlet />
				</main>
			</div>
		</FavoritesProvider>
	);
}
