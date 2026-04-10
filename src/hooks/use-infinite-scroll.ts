import {useEffect, useEffectEvent, useRef} from "react";

type UseInfiniteScrollOptions = {
	enabled: boolean;
	onIntersect: () => void;
	rootMargin?: string;
};

export function useInfiniteScroll({
	enabled,
	onIntersect,
	rootMargin = "400px 0px",
}: UseInfiniteScrollOptions) {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const handleIntersect = useEffectEvent(
		(entries: IntersectionObserverEntry[]) => {
			if (!entries[0]?.isIntersecting) {
				return;
			}

			onIntersect();
		},
	);

	useEffect(() => {
		const target = targetRef.current;
		if (!enabled || !target) {
			return;
		}

		const observer = new IntersectionObserver(handleIntersect, {
			root: null,
			rootMargin,
		});

		observer.observe(target);
		return () => {
			observer.disconnect();
		};
	}, [enabled, rootMargin]);

	return targetRef;
}
