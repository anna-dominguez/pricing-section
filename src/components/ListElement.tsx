import { RiCheckFill } from 'react-icons/ri';

import type React from 'react';

const ListElement = ({ children }: { children: React.ReactNode }) => {
	return (
		<p className="flex items-center gap-3">
			<RiCheckFill className="text-indigo-500 bg-indigo-50 rounded-full" />
			{children}
		</p>
	);
};

export default ListElement;
