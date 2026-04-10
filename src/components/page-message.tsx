import type {PropsWithChildren} from "react";

type PageMessageProps = PropsWithChildren<{
	tone?: "default" | "error";
	className?: string;
}>;

const toneClassNames = {
	default: "text-[#616161]",
	error: "text-[#b71c1c]",
};

export function PageMessage({
	children,
	tone = "default",
	className = "",
}: PageMessageProps) {
	return (
		<p className={`mb-5 ${toneClassNames[tone]} ${className}`.trim()}>
			{children}
		</p>
	);
}
