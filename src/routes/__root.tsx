import {createRootRoute} from "@tanstack/react-router";
import {AppShell} from "../components/app-shell.tsx";

const RootLayout = () => <AppShell/>;

export const Route = createRootRoute({component: RootLayout});
