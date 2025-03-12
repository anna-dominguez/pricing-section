import { RiCheckFill } from 'react-icons/ri';
import ListElement from './ListElement';

const Description = () => {
	return (
		<article className="flex flex-col gap-8">
			<h2 className="text-2xl sm:text-3xl font-semibold leading-[32px] text-neutral-900">
				Unlock creativity once, enjoy forever
			</h2>
			<div className="flex flex-col gap-5 text-neutral-600 leading-[28px]">
				<ListElement>128 available credits for all images</ListElement>
				<ListElement>Up to 3 users</ListElement>
				<ListElement>24 hour response time</ListElement>
				<ListElement>Advanced analytics</ListElement>
			</div>
		</article>
	);
};

export default Description;
