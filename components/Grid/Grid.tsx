import { ReactNode } from "react";

interface GridProps {
	children: ReactNode;
}

export const Grid = ({ children }: GridProps) => {
	return (
		<div className="grid grid-flow-row gap-3 grid-cols-2 mx-[auto]">
			{children}
		</div>
	);
};
