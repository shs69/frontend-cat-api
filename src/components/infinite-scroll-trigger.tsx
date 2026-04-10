import type {RefObject} from "react";
import {PageMessage} from "./page-message.tsx";

type InfiniteScrollTriggerProps = {
	triggerRef: RefObject<HTMLDivElement | null>;
	isFetchingNextPage: boolean;
};

export function InfiniteScrollTrigger({
	triggerRef,
	isFetchingNextPage,
}: InfiniteScrollTriggerProps) {
	return (
		<div className="mt-4 text-[#616161]">
			{isFetchingNextPage ? (
				<PageMessage className="mb-2 text-center">Загружаем еще котиков...</PageMessage>
			) : null}
			<div ref={triggerRef} className="h-8 w-full"/>
		</div>
	);
}
